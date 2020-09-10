import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-comparer',
  templateUrl: './pokemon-comparer.component.html',
  styleUrls: ['./pokemon-comparer.component.css']
})
export class PokemonComparerComponent implements OnInit {

  @Input() ids: number[] = [];

  constructor() { }

  ngOnInit() {
  }

}
