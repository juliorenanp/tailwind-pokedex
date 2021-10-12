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
  pokemonType!: string;
  pokemonDescription: string | undefined;
  pokemonPhoto: string | undefined;
  pokemonUrl: string | undefined;

  classe : Array <{type: string}> = [
    {
      type:'water'
    },
    {
      type:'fire'
    },
    {
      type:'grass'
    },
    {
      type:'ghost'
    },
    {
      type:'dragon'
    },
  ];
  

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

  getClass(type: string){

    switch (type){
      case 'water':{
        return { 'bg-blue-500 ring-blue-800' : true };  
      }
      case 'normal': {
        return { 'bg-gray-200 ring-gray-800' : true };  
      }
      case 'fighting': {
        return { 'bg-yellow-500 ring-yellow-800' : true };  
      }
      case 'flying': {
        return { 'bg-sky-500 ring-sky-800' : true };  
      }
      case 'poison': {
        return { 'bg-purple-500 ring-purple-800' : true };  
      }
      case 'ground': {
        return { 'bg-orange-500 ring-orange-800' : true };  
      }
      case 'rock': {
        return { 'bg-yellow-700 ring-yellow-900' : true };  
      }
      case 'bug': {
        return { 'bg-green-500 ring-green-800' : true };  
      }
      case 'ghost': {
        return { 'bg-purple-500 ring-purple-800' : true };  
      }
      case 'steel': {
        return { 'bg-gray-500 ring-gray-800' : true };  
      }
      case 'fire': {
        return { 'bg-red-500 ring-red-800' : true };  
      }
      case 'grass': {
        return { 'bg-green-500 ring-green-800' : true };  
      }
      case 'electric': {
        return { 'bg-yellow-200 ring-yellow-400' : true };  
      }
      case 'psychic': {
        return { 'bg-pink-500 ring-pink-800' : true };  
      }
      case 'ice': {
        return { 'bg-indigo-200 ring-indigo-800' : true };  
      }
      case 'dragon': {
        return { 'bg-indigo-200 ring-indigo-800' : true };  
      }
      case 'dark': {
        return { 'bg-gray-500 ring-gray-900' : true };  
      }
      case 'fairy': {
        return { 'bg-pink-200 ring-pink-800' : true };  
      }
      case 'shadow': {
        return { 'bg-gray-200 ring-gray-800' : true };  
      }
      default: { 
           return {'bg-gray-500 ring-gray-800': true};
      } 
      
      // fighting
      // flying
      // poison
      // ground
      // rock
      // bug
      // ghost
      // steel
      // fire
      // water
      // grass
      // electric
      // psychic
      // ice
      // dragon
      // dark
      // fairy
      // shadow
    }
  }

  getBackGroundClass(type: string){

    switch (type){
      case 'water':{
        return { 'from-blue-200 to-blue-800' : true };  
      }
      case 'normal': {
        return { 'from-gray-200 to-gray-800' : true };  
      }
      case 'fighting': {
        return { 'from-yellow-500 to-yellow-800' : true };  
      }
      case 'flying': {
        return { 'from-sky-500 to-sky-800' : true };  
      }
      case 'poison': {
        return { 'from-purple-500 to-purple-800' : true };  
      }
      case 'ground': {
        return { 'from-orange-500 to-orange-800' : true };  
      }
      case 'rock': {
        return { 'from-yellow-700 to-yellow-900' : true };  
      }
      case 'bug': {
        return { 'from-green-500 to-green-800' : true };  
      }
      case 'ghost': {
        return { 'from-purple-500 to-purple-800' : true };  
      }
      case 'steel': {
        return { 'from-gray-500 to-gray-800' : true };  
      }
      case 'fire': {
        return { 'from-red-500 to-red-800' : true };  
      }
      case 'grass': {
        return { 'from-green-200 to-green-800' : true };  
      }
      case 'electric': {
        return { 'from-yellow-200 to-yellow-400' : true };  
      }
      case 'psychic': {
        return { 'from-pink-500 to-pink-800' : true };  
      }
      case 'ice': {
        return { 'from-indigo-200 to-indigo-800' : true };  
      }
      case 'dragon': {
        return { 'from-indigo-200 to-indigo-800' : true };  
      }
      case 'dark': {
        return { 'from-gray-500 to-gray-900' : true };  
      }
      case 'fairy': {
        return { 'from-pink-200 to-pink-800' : true };  
      }
      case 'shadow': {
        return { 'from-gray-200 to-gray-800' : true };  
      }
      default: { 
           return {'from-gray-500 to-gray-800': true};
      } 
    
    }
  }
}
