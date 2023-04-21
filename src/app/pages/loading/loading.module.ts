import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingRoutingModule } from './loading-routing.module';

import { LoadingPage } from './loading.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoadingRoutingModule],
  declarations: [LoadingPage],
})
export class LoadingPageModule {}
