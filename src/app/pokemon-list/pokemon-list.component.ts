import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
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
    this.pokemonsService.getPokemonList()
      .pipe(
        tap(({ results }) => {
          this.pokemonsList = results.map((name: { name: string }) => name.name);
        })
      )
      .subscribe();
    
  }
}
