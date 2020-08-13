import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Office } from 'src/app/models/office-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private _http: HttpClient) { }

  getAllOffices(): Observable<Office> {
    const url = "http://localhost:3000/officeDetails";
    return this._http.get<Office>(url);
  };

  createOffice(officeBody): Observable<Office> {
    const url = "http://localhost:3000/officeDetails";
    return this._http.post<Office>(url, officeBody);
  };

  viewOffice(id): Observable<Office> {
    const url = "http://localhost:3000/officeDetails?Id=";
    return this._http.get<Office>(url + id);
  };

  updateOffice(id, officeBody): Observable<Office> {
    const url = "http://localhost:3000/officeDetails?Id=";
    return this._http.put<Office>(url + id, officeBody);
  }

  deleteOffice(id): Observable<Office> {
    const url = "http://localhost:3000/officeDetails?Id=";
    return this._http.delete<Office>(url + id);
  };

}
