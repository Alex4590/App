import { Component } from '@angular/core';
import { Country } from './country';


const COUNTRY: Array<Country> = [
  {name: 'Russia', language: 'ru'},
  {name: 'USA', language: 'en'},
  {name: 'UK', language: 'en'},
  {name: 'Spain', language: 'es'},
  {name: 'France', language: 'fr'},
];


@Component({
  selector: 'app-list-country',
  templateUrl: 'list-country.component.html',
  styleUrls: ['list-country.component.css']
})
export class ListCoutryComponent {
  title = 'Country';
  countryList = COUNTRY;
  selectedCountry: string;

  onSelect(selected: Country) {
    this.selectedCountry = selected.language;
  }
}
