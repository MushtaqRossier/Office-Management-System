import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Home } from 'src/app/models/home-model';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private _http: HttpClient) { }

  getOfficeDataHome(): Observable<Home> {
    const url = 'http://localhost:3000/officeDetails';
    return this._http.get<Home>(url);
  }
}
