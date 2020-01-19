import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavegationBarComponent} from './Component/navegation-bar/navegation-bar.component' 
import {CristianCaravergaComponent} from './Component/cristian-caraverga/cristian-caraverga.component'
const routes: Routes = [
  {path:'navbar', component:NavegationBarComponent},
  {path:'', redirectTo:'navbar',pathMatch:'full'},
  {path:'cricaver', component:CristianCaravergaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
