import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { Router } from '@angular/router';

import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {


   public listCountries: Country[]= [];

   limmit = 8;
   offset = 0;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.getDate();
          
  }

  public getDate(){
    this.countriesService.getAllCountries().subscribe(
      data => {
       this.listCountries = data;
       
      });
  }

  nextPage() {
    console.log("el boton sirve");

    this.countriesService.getByPage(this.limmit, this.offset)
      .subscribe(data => {
       this.offset += this.limmit;
        console.log(data)
      });
  }
  

  showCountries(){
    console.log('diste clic');
    console.log(this.listCountries[0]);
     
    for(let i=0; i< this.listCountries.length; i++){
      console.log(this.listCountries[i].name.common );
    }
    
  }

  showCountriesName(name:string): void {
    
      this.router.navigate([`countries/${name}`])
    
  }

  
  

}


