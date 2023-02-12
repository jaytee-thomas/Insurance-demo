import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//routes
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { EligibleComponent } from './eligible/eligible.component';
import { IneligibleComponent } from './ineligible/ineligible.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'eligible', component: EligibleComponent },
  { path: 'ineligible', component: IneligibleComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
