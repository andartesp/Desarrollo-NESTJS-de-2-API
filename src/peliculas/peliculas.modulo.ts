import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasServicio } from './peliculas.servicio';
import { PeliculasControlador } from './peliculas.controlador';
import { Pelicula } from './pelicula';

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula])],
  controllers: [PeliculasControlador],
  providers: [PeliculasServicio],
})
export class PeliculasModulo {}