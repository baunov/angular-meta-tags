import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {path: 'page1', loadChildren: () => import('./modules/page1/page1.module').then(m => m.Page1Module)},
  {path: 'page2', loadChildren: () => import('./modules/page2/page2.module').then(m => m.Page2Module)},
  {path: 'default', loadChildren: () => import('./modules/default-page/default-page.module').then(m => m.DefaultPageModule)},
  {path: '**', redirectTo: '/default'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
