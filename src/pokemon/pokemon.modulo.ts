import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonServicio } from './pokemon.servicio';
import { PokemonControlador } from './pokemon.controlador';
import { Pokemon } from './pokemon';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonControlador],
  providers: [PokemonServicio],
})
export class PokemonModulo {}