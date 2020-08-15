import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Office } from 'src/app/models/office-model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private _http: HttpClient) { }

  getAllOffices(): Observable<Office> {
    const url = "http://localhost:3000/officeDetails";
    return this._http.get<Office>(url).pipe(
      catchError(this.errorHandler)
    );
  };

  createOffice(officeBody): Observable<Office> {
    const url = "http://localhost:3000/officeDetails";
    return this._http.post<Office>(url, officeBody).pipe(
      catchError(this.errorHandler)
    );
  };

  viewOffice(id): Observable<Office> {
    const url = "http://localhost:3000/officeDetails?id=";
    return this._http.get<Office>(url + id).pipe(
      catchError(this.errorHandler)
    );
  };

  updateOffice(id, officeBody): Observable<Office> {
    const url = "http://localhost:3000/officeDetails/";
    return this._http.put<Office>(url + id, officeBody).pipe(
      catchError(this.errorHandler)
    );
  }

  deleteOffice(id): Observable<Office> {
    const url = "http://localhost:3000/officeDetails/";
    return this._http.delete<Office>(url + id).pipe(
      catchError(this.errorHandler)
    );
  };

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
