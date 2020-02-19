import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalComandaPage } from './modal-comanda.page';

const routes: Routes = [
  {
    path: '',
    component: ModalComandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalComandaPageRoutingModule {}
