import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

  constructor(private _http: Http) { }

  getBooks() {
    return this._http.get("https://dummy-blue-hunter.mybluemix.net/book/").map(res => res.json());
  }
}
