import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { PeliculasServicio } from './peliculas.servicio';

@Controller('peliculas')
export class PeliculasControlador {
  constructor(private servicio: PeliculasServicio) {}

  @Get()
  obtener(@Query('t') t?: string, @Query('d') d?: number, @Query('h') h?: number) {
    return this.servicio.buscar(t, d, h);
  }

  @Post('cargar')
  cargar(@Body() datos: any[]) {
    return this.servicio.insertarVarios(datos);
  }
}