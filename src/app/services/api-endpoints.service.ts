import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDTO } from '../models/pomekon.dto';
import { environment } from '../../environments/environment.prod';
import { BaseDTO } from '../models/base.dto';
import { TypeDTO } from '../models/type.dto';
import { ImageEnum } from '../models/image.enum';
import { MoveDTO } from '../models/move.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {
  url = environment.Api_Endpoint;
  urlResource = environment.Api_Resource;
  constructor(private http: HttpClient) {}

  /* Services for Base*/
  getBaseByPokemonId(pokemonId: number): Observable<BaseDTO> {
    return this.http.get<BaseDTO>(this.url + '/Base/' + pokemonId);
  }

  /* Services for Move*/
  getMoveByPokemonId(pokemonId: number): Observable<MoveDTO[]> {
    return this.http.get<MoveDTO[]>(this.url + '/Move/' + pokemonId);
  }

  /* Services for Pokemon */
  getAllPokemon(): Observable<PokemonDTO[]> {
    return this.http.get<PokemonDTO[]>(this.url + '/Pokemon');
  }

  getPokemonById(pokemonId: number): Observable<PokemonDTO> {
    return this.http.get<PokemonDTO>(this.url + '/Pokemon/' + pokemonId);
  }

  getPokemonByName(pokemonName: string): Observable<PokemonDTO[]> {
    return this.http.get<PokemonDTO[]>(
      this.url + '/Pokemon/GetByName/' + pokemonName
    );
  }

  getImageyId(pokemonId: number, type: number) {
    switch (type) {
      case (type = ImageEnum.image): {
        return (
          this.urlResource +
          '/images/' +
          String(pokemonId).padStart(3, '0') +
          '.png'
        );
        break;
      }
      case (type = ImageEnum.sprite): {
        return (
          this.urlResource +
          '/sprites/' +
          String(pokemonId).padStart(3, '0') +
          'MS' +
          '.png'
        );
        break;
      }
      case (type = ImageEnum.thumbnail): {
        return (
          this.urlResource +
          '/thumbnails/' +
          String(pokemonId).padStart(3, '0') +
          '.png'
        );
        break;
      }
      default: {
        return (
          this.urlResource +
          '/images/' +
          String(pokemonId).padStart(3, '0') +
          '.png'
        );
        break;
      }
    }
  }

  /* Services for Type*/
  getTypeByPokemonId(pokemonId: number): Observable<TypeDTO[]> {
    return this.http.get<TypeDTO[]>(this.url + '/Type/' + pokemonId);
  }
}
