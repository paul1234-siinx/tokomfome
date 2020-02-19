import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-comanda',
  templateUrl: './modal-comanda.page.html',
  styleUrls: ['./modal-comanda.page.scss'],
})
export class ModalComandaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
