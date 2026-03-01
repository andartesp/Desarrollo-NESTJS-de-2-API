import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, Like } from 'typeorm';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonServicio {
  constructor(
    @InjectRepository(Pokemon)
    private repo: Repository<Pokemon>,
  ) {}

  async buscar(nombre?: string, tipo?: string, hpMinimo?: number) {
    const filtro: any = {};

    if (nombre) {
      filtro.nombre = Like(`%${nombre}%`);
    }

    if (tipo) {
      filtro.tipo = tipo;
    }

    if (hpMinimo) {

      filtro.hp = MoreThan(hpMinimo);
    }

    return await this.repo.find({ where: filtro });
  }

  async insertarVarios(datos: any[]) {
    return await this.repo.save(datos);
  }
}