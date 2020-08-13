import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/models/staff-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private _http: HttpClient) { }

  getStaffData(): Observable<Staff> {
    const url = 'http://localhost:3000/staffDetails';
    return this._http.get<Staff>(url);
  }
}


