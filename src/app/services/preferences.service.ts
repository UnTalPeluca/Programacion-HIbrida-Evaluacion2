import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private readonly KEY_DELETE_HOME = 'allow_delete_home';

  constructor() {}

  async setDeleteInHome(allow: boolean): Promise<void> {
    await Preferences.set({
      key: this.KEY_DELETE_HOME,
      value: JSON.stringify(allow),
    });
  }

  async getDeleteInHome(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.KEY_DELETE_HOME });
    return value !== null ? JSON.parse(value) : true;
  }
}
