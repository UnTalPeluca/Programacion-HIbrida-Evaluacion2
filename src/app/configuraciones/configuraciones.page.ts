import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class ConfiguracionesPage implements OnInit {
  allowDeleteHome: boolean = true;

  constructor(private preferencesService: PreferencesService) {}

  async ngOnInit() {
    this.allowDeleteHome = await this.preferencesService.getDeleteInHome();
  }

  async toggleSettings() {
    await this.preferencesService.setDeleteInHome(this.allowDeleteHome);
  }
}
