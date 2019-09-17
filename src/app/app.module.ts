import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FavoritesService } from './services/favorites-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchComponent } from './components/home/search/search.component';
import { CityCardComponent } from './components/home/city-card/city-card.component';
import { ConditionCardComponent } from './components/home/city-card/condition-card/condition-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavoritesComponent,
    SearchComponent,
    CityCardComponent,
    ConditionCardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'favorites', component: FavoritesComponent}
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
