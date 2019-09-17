import { Component, OnInit, Input } from '@angular/core';
import icons from '../../../../../assets/icons-map';
import {DailyForecast} from '../../../../models/daily-forecast.model';
import {CityData} from '../../../../models/city-data.model';

@Component({
  selector: 'app-condition-card',
  templateUrl: './condition-card.component.html',
  styleUrls: ['./condition-card.component.css']
})
export class ConditionCardComponent implements OnInit {
  icons: object;
  @Input() inFavCity: CityData;
  @Input() inDay: DailyForecast;

  constructor() {
    this.icons = icons;
  }
  findIcon(iconId: number) {
    return `../../../../../assets/pictures/${icons[iconId]}`;
  }

  ngOnInit() {
  }

}
