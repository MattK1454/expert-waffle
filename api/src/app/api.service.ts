import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { };

  getCountries() {
    return this.http.get('https://api.worldbank.org/v2/country/AW?format=json');
  };
}
