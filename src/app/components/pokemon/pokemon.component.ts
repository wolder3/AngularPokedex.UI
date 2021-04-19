import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ImageEnum } from 'src/app/models/image.enum';
import { MoveDTO } from 'src/app/models/move.dto';
import { PokemonDTO } from 'src/app/models/pomekon.dto';
import { TypeDTO } from 'src/app/models/type.dto';
import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [],
})
export class PokemonComponent implements OnInit {
  sub: any;
  id: number = 0;
  image: string = '';
  data: PokemonDTO = {
    id: 0,
    name: '',
    bases: {
      hp: 0,
      attack: 0,
      defense: 0,
      spAttack: 0,
      spDefense: 0,
      speed: 0,
    },
  };
  dataMove: MoveDTO[] = [];
  dataType: TypeDTO[] = [];

  constructor(
    private route: Router,
    public activatedRoute: ActivatedRoute,
    private apiService: ApiEndpointsService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.fncGetPokemon();
    this.fncGetMove();
    this.fncGetType();
  }

  fncGetImagePokemon() {
    return this.apiService.getImageyId(this.id, ImageEnum.image);
  }

  fncGetPokemon() {
    this.apiService
      .getPokemonById(this.id)
      .subscribe((result) => (this.data = result));
  }

  fncGetMove() {
    this.apiService
      .getMoveByPokemonId(this.id)
      .subscribe((result) => (this.dataMove = result));
  }

  fncGetType() {
    this.apiService
      .getTypeByPokemonId(this.id)
      .subscribe((result) => (this.dataType = result));

    console.log(this.dataType);
  }
}
