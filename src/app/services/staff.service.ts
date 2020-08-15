import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/models/staff-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private _http: HttpClient) { }

  getStaffData(id): Observable<Staff> {
    const url = 'http://localhost:3000/staffDetails?officeId=';
    return this._http.get<Staff>(url + id);
  };

  createStaff(staffBody): Observable<Staff> {
    const url = 'http://localhost:3000/staffDetails';
    return this._http.post<Staff>(url, staffBody);
  };

  updateStaff(id, staffBody): Observable<Staff> {
    const url = "http://localhost:3000/staffDetails/";
    return this._http.put<Staff>(url + id, staffBody);
  }

  deleteStaff(id): Observable<Staff> {
    const url = "http://localhost:3000/officeDetails/";
    return this._http.delete<Staff>(url + id);
  };
}


