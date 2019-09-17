import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: FavoritesService) {
  }

  ngOnInit() {
    this.service.checkRouterLink();
  }

}
