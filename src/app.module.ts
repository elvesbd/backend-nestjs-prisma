import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PokemonModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
