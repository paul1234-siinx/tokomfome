import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalComandaPageRoutingModule } from './modal-comanda-routing.module';

import { ModalComandaPage } from './modal-comanda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComandaPageRoutingModule
  ],
  declarations: [ModalComandaPage],
  exports: [ModalComandaPage]
})
export class ModalComandaPageModule {}
