import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonStats } from '../models/pokemonStats.model';
import { Stats } from '../models/stats.model';
import { PokedexFilters } from './PokedexFilters';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public pokemonsStats: PokemonStats[] = [];
  public pokemonStats: PokemonStats;
  public filteredPokemonList: Pokemon[];
  public filters: PokedexFilters = {stats:undefined, typeId:undefined};
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(success => {
      if (success) {
        this.pokemons = this.pokemonService.pokemons;
        this.filteredPokemonList = this.pokemons;
      }
    });

    this.pokemonService.getPokemonsStats().subscribe(success => {
      if (success) {
        this.pokemonsStats = this.pokemonService.pokemonsStats;
      }
    });
  }

  public showDetails(pokemon){
    this.pokemonStats = this.pokemonsStats.filter(x => x.id === pokemon.id)[0];
  }

  public setTypeFilter(typeId:number){
    this.filters.typeId = typeId;
    this.applyFilters();
  }

  public setStatFilter(stats:Stats){
    this.filters.stats = stats;
    this.applyFilters(); 
  }

  private applyFilters(){
    let matchingCriteriaIds:number[] = [];

    matchingCriteriaIds = this.pokemonsStats
      .filter(item => 
          {
            let isMatching = true;
            if (this.filters.typeId) {
              if (item.primaryTypeId != this.filters.typeId && item.secondaryTypeId != this.filters.typeId) {
                return false;
              }
            }
            for (var stat in this.filters.stats) {
              if (this.filters.stats[stat] === undefined || this.filters.stats[stat] === null) {
                continue;
              }
              if (item[stat] !== this.filters.stats[stat]) {
                isMatching = false;  
              }
            }
            return isMatching;
          }
        )
      .map(x => x.id);
    this.filteredPokemonList = this.pokemons.filter(x => matchingCriteriaIds.includes(x.id));
  }

  public resetFilter(){
    this.filteredPokemonList = this.pokemons;
  }
}