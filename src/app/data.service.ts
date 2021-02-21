import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }
  //AJAX GET requet
  public sendGetRequest(url: String) {
    return this.httpClient.get(this.REST_API_SERVER + url).pipe(
      //if bad req,call error handler
      catchError(this.handleError)
    );
  }

  //AJAX POST requet
  public sendPostRequest(url: String, data: Object) {
    return this.httpClient.post(this.REST_API_SERVER + url, data).pipe(
      //if bad req,call error handler
      catchError(this.handleError)
    );
  }

    //handler error function
  //@copied from https://angular.io/guide/http
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
