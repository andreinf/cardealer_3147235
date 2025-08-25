import { Injectable } from "@nestjs/common";
import { Brand } from "./entities/brand.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  //private solo se puede usar al interior de la clase con this

  //metodos:
  //CRUD select * from brands
  //this: acceder a algo private en la clase
  findAll() {
    return this.prisma.brand.findMany()
  }

  //buscar en la brand por id
  findOne(id: number) {}
  //actualizar una brand//añadir al arreglo brands
  create(body) {}

  //eliminar un elemento de arreglo de brands por id
  remove(id: number) {}
  //filter : es para retornar un nuevo arreglo
  //elementos que cumplan con la condicional
}
