import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }
  public async presentToast(errorMessage: string, time: number, colorClass: string) {

    const toast = await this.toastController.create({
      message: errorMessage,
      duration: time,
      color: colorClass,
    });

    toast.removeAttribute('tabindex');

    await toast.present();
  }
}
