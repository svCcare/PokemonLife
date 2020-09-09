import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { EnumToArrayPipe } from './shared/pipes/enum-to-array.pipe';
import { PokemonDetailsComponent } from './pokedex/pokemon-details/pokemon-details.component';
import { ConvertStatNameToShorterPipe } from './shared/pipes/convert-stat-name-to-shorter.pipe';
import { PokemonTypeFilterComponent } from './pokedex/pokemon-type-filter/pokemon-type-filter.component';
import { PokemonStatFilterComponent } from './pokedex/pokemon-stat-filter/pokemon-stat-filter.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PokedexComponent,
    PokemonDetailsComponent,
    EnumToArrayPipe,
    ConvertStatNameToShorterPipe,
    PokemonTypeFilterComponent,
    PokemonStatFilterComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'pokedex', component: PokedexComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
