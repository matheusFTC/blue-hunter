import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("https://dummy-blue-hunter.mybluemix.net/user/").map(res => res.json());
  }
}
