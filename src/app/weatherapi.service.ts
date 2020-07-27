import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {


  private apikey: any = '3cfc48467a4da0ae5fe48e7418057143';
   constructor(private http: HttpClient) { }

//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=135&appid=3cfc48467a4da0ae5fe48e7418057143
   getWeather(lat: any, lan: any): Observable<any>
   {
    const param = new HttpParams().set('lat', lat).set('lon', lan)
.set('appid', this.apikey);
    return this.http.get('http://api.openweathermap.org/data/2.5/weather', {params: param }).pipe(tap(data =>
     data), catchError(this.errorHandler));
   }


   // tslint:disable-next-line:typedef
   errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
