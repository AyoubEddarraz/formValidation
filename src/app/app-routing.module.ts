import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path : "" , component : RegisterComponent},
  { path : "registerSuccess" , component : RegisterSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
