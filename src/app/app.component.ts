import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './database.service';
  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = null; // ele não vai iniciar a home antes de criar o banco de dados

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    dbService: DatabaseService // adicionamos a nossa base de dados no nosso construtor

  ) {
    this.initializeApp();
  }

  initializeApp() {

    //Esse método serve para verificar se a plataforma do cordova foi carregada
    
    this.platform.ready().then(() => {
      //Ok, então a plataforma está pronta e nossos plugins estão disponíveis.
      //Aqui você pode fazer qualquer coisa nativa de nível superior que possa precisar.
      this.statusBar.styleDefault();
 
      //Criando o banco de dados
      DatabaseService.createDatabase()
        .then(() => {
          // fechando a SplashScreen somente quando o banco for criado
          this.openHomePage(this.splashScreen);
        })
        .catch(() => {
          // ou se houver erro na criação do banco
          this.openHomePage(this.splashScreen);
        });
    });
    
   } 
   private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = this.openHomePage;
  }
}

