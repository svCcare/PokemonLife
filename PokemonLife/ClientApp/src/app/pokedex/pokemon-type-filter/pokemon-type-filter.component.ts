import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonTypes } from 'src/app/models/pokemonTypes.enum';
import { ElementalTypeBackgroundColor } from 'src/app/shared/colorMappers/index'

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
      if (clickedElement.classList.contains("type-filter-active")) {
        clickedElement.classList.remove("type-filter-active");
      }
      else{
        let anyActivatedButtons = clickedElement.parentElement.parentElement.querySelector(".type-filter-active");
        if (anyActivatedButtons) {
          anyActivatedButtons.classList.remove("type-filter-active");
        }
        clickedElement.className += " type-filter-active";
      }
    }
    this.filterEvent.emit(this.typeId);
  }

  public getElementalTypeBackgroundColor(elementalTypeName: string) {
    const styles = {
        "background-color": ElementalTypeBackgroundColor[elementalTypeName],
    };
    return styles;
  }
}
