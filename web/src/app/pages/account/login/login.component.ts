import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginModel } from './login-model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: LoginModel<string> = new LoginModel<string>();
  public error: Error;

  constructor(public router: Router, public activatedRoute: ActivatedRoute, public loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin(): void {
    this.loginService.validate(this.login).then(data => console.log(data));

  }

}
