import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    ) {    }


    getData() {
      return this.http.get('https://uat.utopiatech.in:4520/panel/gettestlist?org_id=3');
    }
}
