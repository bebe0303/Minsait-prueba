import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  
  private apiUrl = 'https://restcountries.com/v3.1'

  constructor(
   private http:HttpClient
  ) { }

  getAllCountries(){
    return this.http.get<Country[]>(this.apiUrl + '/all');
  }

  getByPage(limit:number, offset:number){
    return this.http.get<Country[]>(this.apiUrl + '/all' , {
      params: {limit, offset}
    });
  }

  getByName(name:string){
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`);
  }

}
