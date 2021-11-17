import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterIngePageRoutingModule } from './register-inge-routing.module';

import { RegisterIngePage } from './register-inge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterIngePageRoutingModule
  ],
  declarations: [RegisterIngePage]
})
export class RegisterIngePageModule {}
