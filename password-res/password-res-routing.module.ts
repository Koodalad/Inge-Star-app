import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordResPage } from './password-res.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordResPageRoutingModule {}
