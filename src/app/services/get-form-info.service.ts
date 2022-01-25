import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  postForm(): Observable<any> {
    console.log("posting...")
    return this.http.post<any>(this.apiUrl, "")
  }
}
