import { Prisma } from '.prisma/client';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { Pokemon } from '../entities/pokemon.entity';

export class CreatePokemonDto extends Pokemon {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  height?: number | null;

  @IsOptional()
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
