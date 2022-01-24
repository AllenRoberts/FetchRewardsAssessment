import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFormInfoService {
  private apiUrl = 'https://frontend-take-home.fetchrewards.com/form';

  constructor(private http: HttpClient) { }

  //Change from any
  getInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
