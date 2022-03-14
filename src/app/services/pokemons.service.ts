import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.getPokemonList();
  }
  getPokemonList(): Observable<any> {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
}
