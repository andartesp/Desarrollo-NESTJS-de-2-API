import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { PokemonServicio } from './pokemon.servicio';

@Controller('pokemon')
export class PokemonControlador {
  constructor(private servicio: PokemonServicio) {}

  @Get()
  obtener(
    @Query('n') n?: string, 
    @Query('t') t?: string, 
    @Query('vida') vida?: number
  ) {
    return this.servicio.buscar(n, t, vida);
  }

  @Post('cargar')
  cargar(@Body() datos: any[]) {
    return this.servicio.insertarVarios(datos);
  }
}