import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/Authentication/authentication.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss();
  }

  async signInWithGoogle() {
    await this.authService.signInWithGoogle();
    return this.modalCtrl.dismiss();
  }
}
