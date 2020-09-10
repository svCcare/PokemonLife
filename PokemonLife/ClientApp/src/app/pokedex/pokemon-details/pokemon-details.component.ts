import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonStats } from 'src/app/models/pokemonStats.model';
import { StatTypeBackgroundColor, StatTypeBorderColor, StatTypeForegroundColor } from 'src/app/shared/colorMappers/index'
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemonStats: PokemonStats;
  @Output() compareEvent = new EventEmitter<number>();
  
  public statsDisplayed: boolean = false;
  public statsDictionary: Map<string,number> = new Map<string, number>();
  public statSum: number;
  public addedForComparing: boolean = false;

  constructor() { }

  ngOnInit() {
    this.statsDictionary.set("Health", this.pokemonStats.health);
    this.statsDictionary.set("Attack", this.pokemonStats.attack);
    this.statsDictionary.set("Defence", this.pokemonStats.defence);
    this.statsDictionary.set("SpecialAttack", this.pokemonStats.specialAttack);
    this.statsDictionary.set("SpecialDefence", this.pokemonStats.specialDefence);
    this.statsDictionary.set("Speed", this.pokemonStats.speed);
    this.getStatsSum();
  }

  private getStatsSum():void{
    this.statSum = [...this.statsDictionary.values()].reduce((a,b) => a + b);
  }

  public originalOrder = (a: KeyValue<string,number>, b: KeyValue<string,number>): number => {
    return 0;
  }

  public toggleStatsVisibility(){
    this.statsDisplayed = !this.statsDisplayed;
  }

  public getExpectedStat(value:number, max:boolean, level:number, statName: string):number {
    const iv = max ? 31 : 0;
    const ev = max ? 255 : 0;

    return statName == "Health"
        ? Math.floor(((((value + iv) * 2) + (Math.sqrt(ev) / 4)) * level / 100) + 5 + level)
        : Math.floor(((((value + iv) * 2) + (Math.sqrt(ev) / 4)) * level / 100) + 5);
  }   

  public getStatColor(statName: string) {
    const styles = {
        "background-color": StatTypeForegroundColor[statName],
        "border": "1px solid" + StatTypeBorderColor[statName]
    };
    return styles;
  }

  public getStatBackgroundColor(statName: string) {
    const styles = {
        "background-color": StatTypeBackgroundColor[statName]
    };
    return styles;
  }

  public getStatWidth(value: number):number {
    return 100 * value/255;
  }

  public addToCompare(id:number): void{
    this.addedForComparing = !this.addedForComparing;
    this.compareEvent.emit(id);
  }
}
