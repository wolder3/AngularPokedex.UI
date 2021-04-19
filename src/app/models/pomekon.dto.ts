import { BaseDTO } from './base.dto';

export interface PokemonDTO {
  id: number;
  name: string;
  bases: BaseDTO;
}
