import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-datail-country',
  templateUrl: './datail-country.component.html',
  styleUrls: ['./datail-country.component.scss']
})
export class DatailCountryComponent implements OnInit {
  
  nameCountry:string|null ='';
  country: Partial<Country> = {} as Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService:CountriesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params =>{
        this.nameCountry = params.get('name');
        this.countriesService.getByName(String(this.nameCountry))
          .subscribe(data => {
            const [country] = data;
            this.country = country;
            console.log(this.country.currencies)
          })      
        
      }
    )
  }


  toBack(): void {
    
    this.router.navigate(['countries'])
  
}

}
