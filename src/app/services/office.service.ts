import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Office } from 'src/app/models/office-model';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private _http: HttpClient) { }

  getOfficeDataHome(): Observable<Office> {
    const url = 'http://localhost:3000/officeDetails';
    return this._http.get<Office>(url);
  }
}
