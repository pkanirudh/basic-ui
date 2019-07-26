import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchComponent } from './search/search.component';
import { ShowToursComponent } from './show-tours/show-tours.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent, pathMatch: 'full'},
  {path: 'show', component: ShowToursComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
