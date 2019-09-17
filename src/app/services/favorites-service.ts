import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CityData } from '../models/city-data.model';
import {CurrentWeather} from '../models/current-weather.model';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private http;
  favorites: Array<CityData>;
  addedToFavorites: boolean;
  homeMode: boolean;

  constructor(http: HttpClient, private toastr: ToastrService, private router: Router, private location: Location) {
    this.http = http;
    this.favorites = [];
    this.addedToFavorites = false;
  }

  handleFavorites(city) {
    if (this.findIndex(city) < 0) {
      this.addToFavorites(city);
    } else {
      this.removeFromFavorites(city);
    }
  }
  findIndex(city: CityData) {
    return this.favorites.findIndex(c => c.cityData.id === city.cityData.id);
  }
  addToFavorites(city: CityData) {
    this.favorites.push(city);
    this.toastr.success('Added To Your Favorites');
    this.addedToFavorites = true;
  }
  removeFromFavorites(city: CityData) {
    this.favorites.splice(this.findIndex(city), 1);
    this.toastr.error('Removed From Your Favorites');
    this.addedToFavorites = false;
  }
  checkIfAdded(id: string) {
    return this.favorites.find(city => city.cityData.id === id);
  }
  changeRouterLink() {
    if (this.homeMode) {
      this.homeMode = !this.homeMode;
      return this.router.navigate(['/favorites']);
    }
    this.homeMode = !this.homeMode;
    return this.router.navigate(['']);
  }
  checkRouterLink() {
    this.location.path() === '/favorites' ? this.homeMode = false : this.homeMode = true;
  }
  changeHomeMode() {
    this.homeMode = !this.homeMode;
  }
}
