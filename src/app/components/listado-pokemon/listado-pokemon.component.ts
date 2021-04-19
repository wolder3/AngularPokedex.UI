import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageEnum } from 'src/app/models/image.enum';
import { PokemonDTO } from 'src/app/models/pomekon.dto';
import { TypeDTO } from 'src/app/models/type.dto';
import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styles: [],
})
export class ListadoPokemonComponent implements OnInit {
  dataPokemon: PokemonDTO[] = [];
  p: number = 1;
  message: string = '';

  constructor(
    private apiService: ApiEndpointsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fncGetPokemonByName();
  }

  ngOnChanges(): void {
    this.fncGetPokemonByName();
  }

  fncGetPokemon() {
    if (!this.message) {
      this.apiService
        .getAllPokemon()
        .subscribe((result) => (this.dataPokemon = result));
    }
  }

  fncGetPokemonByName() {
    if (!this.message) {
      this.apiService
        .getAllPokemon()
        .subscribe((result) => (this.dataPokemon = result));
    } else {
      this.apiService
        .getPokemonByName(this.message)
        .subscribe((result) => (this.dataPokemon = result));
    }
  }
  fncGetImagePokemon(id: number) {
    return this.apiService.getImageyId(id, ImageEnum.thumbnail);
  }

  fncGetTypePokemon(id: number): TypeDTO[] {
    let typePokemon: TypeDTO[] = [];
    this.apiService
      .getTypeByPokemonId(id)
      .subscribe((result) => (typePokemon = result));
    return typePokemon;
  }

  addToKeywords() {
    this.fncGetPokemonByName();
  }

  RedirectToPokemon(id: number) {
    this.router.navigateByUrl('/pokemon', { state: { hello: 'world' } });
  }
}
