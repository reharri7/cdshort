import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  cancel() {
    console.log('Cancel');
  }

  confirm() {
    console.log('Confirm');
  }
}
