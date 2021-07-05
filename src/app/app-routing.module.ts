import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShopComponent } from './pages/book-shop/book-shop.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'shop', component:BookShopComponent
  },
  {
    path: '', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
