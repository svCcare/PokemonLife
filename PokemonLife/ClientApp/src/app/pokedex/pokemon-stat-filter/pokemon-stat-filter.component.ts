import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-pokemon-stat-filter',
  templateUrl: './pokemon-stat-filter.component.html',
  styleUrls: ['./pokemon-stat-filter.component.css']
})
export class PokemonStatFilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<Stats>();
  public statsArray:number[] = [undefined,undefined,undefined,undefined,undefined,undefined,];
  public statsDictionary: Map<string,number> = new Map<string, number>();
  public showFilter: boolean = false;
  constructor() { }

  ngOnInit() { 
    this.statsDictionary.set("Health", undefined);
    this.statsDictionary.set("Attack", undefined);
    this.statsDictionary.set("Defence", undefined);
    this.statsDictionary.set("Special Attack", undefined);
    this.statsDictionary.set("Special Defence", undefined);
    this.statsDictionary.set("Speed", undefined);
  }

  public filter(){
    const stats:Stats = 
    {
      health:this.statsDictionary[0],
      attack:this.statsDictionary[1],
      defence:this.statsDictionary[2],
      specialAttack:this.statsDictionary[3],
      specialDefence:this.statsDictionary[4],
      speed:this.statsDictionary[5],
    }; 
    this.filterEvent.emit(stats);
  }

  public toggleVisibility(){
    this.showFilter = !this.showFilter;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}