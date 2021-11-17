import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordResPageRoutingModule } from './password-res-routing.module';

import { PasswordResPage } from './password-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordResPageRoutingModule
  ],
  declarations: [PasswordResPage]
})
export class PasswordResPageModule {}
