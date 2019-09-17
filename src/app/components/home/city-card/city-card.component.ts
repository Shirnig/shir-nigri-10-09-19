import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites-service';
import { WeatherService } from '../../../services/weather-service';
import icons from '../../../../assets/icons-map';


@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {
  icons: object;

  constructor(private favoritesService: FavoritesService, private weatherService: WeatherService) {
    this.icons = icons;
  }
  findIcon(iconId: number) {
    return `../../../../../assets/pictures/${icons[iconId]}`;
  }
  handleFavorite() {
    const {currentCityData, currentWeather} = this.weatherService;
    // tslint:disable-next-line:max-line-length
    this.favoritesService.handleFavorites({cityData: currentCityData, currentWeather});
  }

  ngOnInit() {
    this.weatherService.get5DaysWeather();
    this.weatherService.getCurrentWeather();
  }

}
