import { Prisma } from '.prisma/client';

export class Image implements Prisma.ImageUncheckedCreateInput {
  id?: number;
  pokemonId: number;
  url: string;
}
