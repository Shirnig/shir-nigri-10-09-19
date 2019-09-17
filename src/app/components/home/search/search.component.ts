import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import cities from '../../../../assets/cities';
import { WeatherService } from '../../../services/weather-service';
import { ToastrService } from 'ngx-toastr';
import {CityAutocomplete} from '../../../models/city-autocomplete.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name: string;
  id: any;
  cities: Array<CityAutocomplete>;
  currentCity: CityAutocomplete[];
  search: string;
  placeholder: string;

  constructor(private weatherService: WeatherService, private toastr: ToastrService) {
    this.cities = cities;
    this.search = '';
    this.currentCity = [];
    this.placeholder = 'Tel Aviv';
  }
  getCurrentCity(cityName: string) {
    this.name = cityName;
    this.id = this.getId();
    const {id, name} = this;
    this.weatherService.setCurrentCity({id, name});
    this.search = '';
    this.placeholder = cityName;
  }
  getId() {
    this.currentCity = this.cities.filter(city => this.name === city.LocalizedName);
    return this.currentCity[0].Key;
  }
  consoleLog(search: string) {
    this.weatherService.getCities(search).subscribe((data: Array<CityAutocomplete>) => {
      this.cities = data;
    }, err => this.toastr.error(`${err.name}`));
  }

  ngOnInit() {
  }

}
