import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountRoutes } from './account.routes';
import { SiginComponent } from './sigin/sigin.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent },
    ])
  ],
  declarations: [
  ],
  providers: [
    RouterModule
  ]
})
export class AccountModule {

}
