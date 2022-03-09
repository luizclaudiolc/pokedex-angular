import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonsList = [];
  constructor(public pokemonsService: PokemonsService) {}

  ngOnInit(): void {
  }
}
