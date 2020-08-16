import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/models/staff-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private _http: HttpClient) { }

  // Gets all staff data form json-server
  getStaffData(id): Observable<Staff> {
    const url = 'http://localhost:3000/staffDetails?officeId=';
    return this._http.get<Staff>(url + id);
  };

  // Views id-specific staff data from json-server
  viewStaffData(id): Observable<Staff> {
    const url = 'http://localhost:3000/staffDetails?id=';
    return this._http.get<Staff>(url + id);
  };

  // Posts new staff data to json-server
  createStaff(staffBody): Observable<Staff> {
    const url = 'http://localhost:3000/staffDetails';
    return this._http.post<Staff>(url, staffBody);
  };

  // Updates id-specific staff data from json-server
  updateStaff(id, staffBody): Observable<Staff> {
    const url = "http://localhost:3000/staffDetails/";
    return this._http.put<Staff>(url + id, staffBody);
  }

  // Deletes id-specific staff data from json-server
  deleteStaff(id): Observable<Staff> {
    const url = "http://localhost:3000/staffDetails/";
    return this._http.delete<Staff>(url + id);
  };
}


