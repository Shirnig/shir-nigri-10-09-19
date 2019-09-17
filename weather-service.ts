import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CurrentWeather } from '../models/current-weather.model';
import { ForecastWeather } from '../models/forecast-weather.model';
import { CityMetadata } from '../models/city-metadata.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http;
  currentCityData: CityMetadata;
  currentWeather: Array<CurrentWeather>;
  forecastWeather: ForecastWeather;

  constructor(http: HttpClient, private toastr: ToastrService) {
    this.http = http;
    this.currentCityData = {id: '215854', name: 'Tel aviv'};
    this.currentWeather = [];
    this.forecastWeather = {
        DailyForecasts: []
    };
  }

  getCities(search: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=6QVjLvU53tFxcdljRE9f4nqehZhA2buf&q=${search}`);
  }

  getCurrentWeather(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://dataservice.accuweather.com/currentconditions/v1/${this.currentCityData.id}?apikey=6QVjLvU53tFxcdljRE9f4nqehZhA2buf`).subscribe((data) => {
      this.currentWeather = data;
    }, err => this.toastr.error(`${err.name}`));
  }


  get5DaysWeather(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.currentCityData.id}?apikey=6QVjLvU53tFxcdljRE9f4nqehZhA2buf&metric=true`).subscribe((data) => {
      this.forecastWeather = data;
    }, err => this.toastr.error(`${err.name}`));
  }

  setCurrentCity(city: CityMetadata) {
    this.currentCityData = city;
    this.getCurrentWeather();
    this.get5DaysWeather();
  }


}
