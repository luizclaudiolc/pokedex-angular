import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon?: string;
  @Input() pokemonIndex?: number;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.pokemon);
  }

  getPokemonImageUrl(): string {
    const pokemonIndex = this.leadingZero(this.pokemonIndex as number);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png `
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = `0${s}`;
    }
    return s;
  }

}
