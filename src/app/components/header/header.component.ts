import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LoginModalComponent} from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openLoginModal() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
    });
    await modal.present();

    const {data, role} = await modal.onDidDismiss();
  }
}
