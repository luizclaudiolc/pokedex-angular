import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.getPokemonList();
  }
  getPokemonList(): any {
    this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .pipe(
        tap(({ results }) => {
          this.pokemons = results.map(({ name }: any) => name);
        }),
      ).subscribe();
  }
}
