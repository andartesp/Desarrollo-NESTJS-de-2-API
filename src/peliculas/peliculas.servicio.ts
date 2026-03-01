import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, Like } from 'typeorm';
import { Pelicula } from './pelicula';

@Injectable()
export class PeliculasServicio {
  constructor(
    @InjectRepository(Pelicula)
    private repo: Repository<Pelicula>,
  ) {}

  async buscar(titulo?: string, desde?: number, hasta?: number) {
    const filtro: any = {};
    if (titulo) filtro.titulo = Like(`%${titulo}%`);
    if (desde && hasta) filtro.anio = Between(desde, hasta);
    return await this.repo.find({ where: filtro });
  }

  async insertarVarios(datos: any[]) {
    return await this.repo.save(datos);
  }
}