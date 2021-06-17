import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonNumber!: number;
  pokemonName: string | undefined;
  pokemonType: string | undefined;
  pokemonDescription: string | undefined;
  pokemonPhoto: string | undefined;
  pokemonUrl: string | undefined;


  constructor(private service: PokemonService) { }
  ngOnInit(): void {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    let number = Math.floor(Math.random() * 250);
    this.getPokemon(number);
  }

  getNextPokemon() {
    let pokNumber = ++ this.pokemonNumber;
    this.getPokemon(pokNumber);
  }

  getMainPicture(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  getSprite(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getType(id: number) {
    return `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  }

  getPokemon(pokNumber: number) {
    this.service.getPokemon(pokNumber)
      .subscribe((data: any) => {
        this.pokemonName = data.name;
        this.pokemonType = data.types[0].type.name;
        this.pokemonNumber = data.id;
        this.pokemonPhoto = this.getMainPicture(data.id);
        this.pokemonUrl = this.getSprite(data.id);
      });

    this.service.getPokemonDetails(pokNumber)
      .subscribe((data: any) => {
        this.pokemonDescription = data.flavor_text_entries[0].flavor_text;
      });
  }

}
