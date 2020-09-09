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

  constructor() { }

  ngOnInit() { }

  public filter(){
    const stats:Stats = 
    {
      health:this.statsArray[0],
      attack:this.statsArray[1],
      defence:this.statsArray[2],
      specialAttack:this.statsArray[3],
      specialDefence:this.statsArray[4],
      speed:this.statsArray[5],
    }; 
    this.filterEvent.emit(stats);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}