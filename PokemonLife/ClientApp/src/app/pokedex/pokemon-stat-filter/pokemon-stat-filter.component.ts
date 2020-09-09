import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-pokemon-stat-filter',
  templateUrl: './pokemon-stat-filter.component.html',
  styleUrls: ['./pokemon-stat-filter.component.css']
})
export class PokemonStatFilterComponent implements OnInit {

  constructor() { }

  @Output() filterEvent = new EventEmitter<Stats>();
  public healthStat: number;
  public attackStat: number;
  public defenceStat: number;
  public spAtkStat: number;
  public spDefStat: number;
  public speedStat: number;
  
  ngOnInit() {
  }

  public filter(){
    const stats:Stats = 
    {
      health:this.healthStat,
      attack:this.attackStat,
      defence:this.defenceStat,
      specialAttack:this.spAtkStat,
      specialDefence:this.spDefStat,
      speed:this.speedStat,
    }; 
    this.filterEvent.emit(stats);
  }
}