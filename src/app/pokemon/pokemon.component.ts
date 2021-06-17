import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonNumber: number | undefined;
  pokemonName: string | undefined;
  pokemonType: string | undefined;
  pokemonDescription: string | undefined;
  pokemonPhoto: string | undefined;
  pokemonUrl: string | undefined;


  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }

}
