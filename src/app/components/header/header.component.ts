import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {AuthenticationService} from '../../services/Authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public authService: AuthenticationService,
    ) { }

  ngOnInit() {}

  async openLoginModal() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
    });
    await modal.present();
  }
}
