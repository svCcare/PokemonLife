import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StatTypeForegroundColor, StatTypeBorderColor } from 'src/app/shared/colorMappers/index';
import { PokemonStats } from 'src/app/models/pokemonStats.model';

@Component({
  selector: 'app-pokemon-comparer',
  templateUrl: './pokemon-comparer.component.html',
  styleUrls: ['./pokemon-comparer.component.css']
})
export class PokemonComparerComponent implements OnInit, OnChanges {

  @Input() pokemonsStats: PokemonStats[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshSorting();
  }

  ngOnInit() { }

  public refreshSorting()  {
    this.pokemonsStats.sort((a:PokemonStats,b:PokemonStats) => a.id - b.id);
  }

  public getStatColor(statName: string) {
    const styles = {
        "background-color": StatTypeForegroundColor[statName],
        "border": "1px solid" + StatTypeBorderColor[statName]
    };
    return styles;
  }

  public getStatWidth(value: number):number {
    return 100 * value/255;
  }

}
