import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonStats } from '../models/pokemonStats.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public pokemons: Pokemon[] = [];
  public pokemonsStats: PokemonStats[] = []; 

  getPokemons(): Observable<boolean> {
    return this.http.get("https://localhost:44334/api/Pokemon")
      .pipe(
        map((data:Pokemon[]) => {
          this.pokemons = data;
          return true;
      }));
  }

  getPokemonsStats(): Observable<boolean> {
    return this.http.get("https://localhost:44334/api/Pokemon/stats")
    .pipe(
      map((data:PokemonStats[]) => {
        this.pokemonsStats = data;
        return true;
      }));
  }
}