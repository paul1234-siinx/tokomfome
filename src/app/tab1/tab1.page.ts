import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComandaPage } from '../modal-comanda/modal-comanda.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async showModalComanda(){
    const modal = await this.modalCtrl.create({
      component: ModalComandaPage
    });

    modal.present();
    
  }

}
