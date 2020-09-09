import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonTypes } from 'src/app/models/pokemonTypes.enum';

@Component({
  selector: 'app-pokemon-type-filter',
  templateUrl: './pokemon-type-filter.component.html',
  styleUrls: ['./pokemon-type-filter.component.css']
})
export class PokemonTypeFilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<number>();
  public PokemonTypes = PokemonTypes;
  public typeId:number;

  constructor() { }

  ngOnInit() { }

  public setFilter(typeId:number) {
    this.typeId = this.typeId !== typeId ? typeId : undefined;
  }

  public resetFilter() {
    this.typeId = undefined;
    this.filterEvent.emit(this.typeId);
  }

  public onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {
      if (clickedElement.classList.contains("active")) {
        clickedElement.classList.remove("active");
      }
      else{
        let anyActivatedButtons = clickedElement.parentElement.parentElement.querySelector(".active");
        if (anyActivatedButtons) {
          anyActivatedButtons.classList.remove("active");
        }
        clickedElement.className += " active";
      }
    }
    this.filterEvent.emit(this.typeId);
  }
}
