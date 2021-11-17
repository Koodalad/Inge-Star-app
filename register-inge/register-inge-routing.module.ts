import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterIngePage } from './register-inge.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterIngePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterIngePageRoutingModule {}
