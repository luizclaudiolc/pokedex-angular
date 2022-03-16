import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pokemonsService
      .getPokemonList()
      .pipe(
        tap(({ results }) => {
          this.pokemonsService.pokemons = results.filter(
            (name: { name: string }) => name.name.includes(filterValue)
          );
          console.log(this.pokemonsService.pokemons);
        })
      )
      .subscribe();
  }
}
