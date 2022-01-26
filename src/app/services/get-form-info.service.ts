import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormData } from '../FormData';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GetFormInfoService {
  private apiUrl = 'https://frontend-take-home.fetchrewards.com/form';

  constructor(private http: HttpClient) { }

   /**
   * Gets state and occupation data from API url
   * @returns {Json}
   */
  getInfo(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /**
   * Posts form to server
   * @param form 
   */
  postForm(form: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, form, httpOptions)
  }
}
