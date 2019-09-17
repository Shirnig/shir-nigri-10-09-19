import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites-service';
import { WeatherService } from '../../services/weather-service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Array<any>;

  constructor(private router: Router, private favoritesService: FavoritesService, private weatherService: WeatherService) {
    this.favorites = [];
  }
  setCurrentCityId(id: string, name: string) {
    this.weatherService.setCurrentCity({id, name});
    this.router.navigate(['']);
    this.favoritesService.changeHomeMode();
  }

  ngOnInit() {
    this.favorites = this.favoritesService.fetchFavorites();
  }

}
