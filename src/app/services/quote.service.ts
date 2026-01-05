import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';

export interface Quote {
  id?: number;
  text: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  constructor() {}

  async initializePlugin() {
    this.db = await this.sqlite.createConnection(
      'quotes_db.sqlite',
      false,
      'no-encryption',
      1,
      false
    );
    await this.db.open();

    const schema = `
    CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      author TEXT NOT NULL
    );
  `;
    await this.db.execute(schema);

    const result = await this.db.query('SELECT COUNT(*) as count FROM quotes');
    const count = result.values?.[0]?.count ?? 0;

    if (count === 0) {
      const defaultQuotes = [
        {
          text: 'El éxito consiste en obtener lo que se desea. La felicidad en disfrutar lo que se obtiene.',
          author: 'Ralph Waldo Emerson',
        },
        {
          text: 'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.',
          author: 'Thomas Edison',
        },
        {
          text: 'Ningún viento es bueno para el barco que no sabe adónde va.',
          author: 'Séneca',
        },
      ];

      for (const q of defaultQuotes) {
        await this.addQuote(q);
      }
    }
  }

  async addQuote(quote: Quote) {
    const sql = 'INSERT INTO quotes (text, author) VALUES (?, ?)';
    await this.db.run(sql, [quote.text, quote.author]);
  }

  async findAllQuotes(): Promise<Quote[]> {
    const result = await this.db.query('SELECT * FROM quotes');
    return result.values ?? [];
  }

  async deleteQuote(id: number) {
    const sql = 'DELETE FROM quotes WHERE id = ?';
    await this.db.run(sql, [id]);
  }
}
