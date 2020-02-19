import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-comanda',
    loadChildren: () => import('./modal-comanda/modal-comanda.module').then( m => m.ModalComandaPageModule)
  },
  {path: 'developers', loadChildren:'./pages/developers/developers.module#DevelopersPageModule'},
  {path: 'developers/:id', loadChildren:'./pages/developer/developer.module#DeveloperPageModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
