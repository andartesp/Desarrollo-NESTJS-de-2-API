import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { PeliculasModulo } from './peliculas/peliculas.modulo';
import { PokemonModulo } from './pokemon/pokemon.modulo';


import { Pelicula } from './peliculas/pelicula';
import { Pokemon } from './pokemon/pokemon';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '',     
      database: 'nest_practica', 
      entities: [Pelicula, Pokemon],
      synchronize: true, 
    }),
    PeliculasModulo,
    PokemonModulo,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}