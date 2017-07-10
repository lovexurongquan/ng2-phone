import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Md5 } from "ts-md5/dist/md5";

import { environment } from "../../../../environments/environment";
import { LoginModel } from "./login-model";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  validate(model: LoginModel<string>): Promise<LoginModel<string>> {

    debugger


    var url: string = "/user/validate";
    model.password = Md5.hashStr(model.password).toString();

    return this.http.post(environment.domain + url, JSON.stringify(model), { headers: this.headers })
      .toPromise()
      .then(response => response.json() as LoginModel<string>)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
