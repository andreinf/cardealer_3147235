import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('brands')
export class BrandsController {

  @Post()
  create(){
    return "Aqui se van las brands"
  }

  @Get()
  findAll() {
    return"Aqui se van a consultar todas" +
          "las brands" ;
  }
//Consultar un resource por id 
//una brand
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aqui se consulta la 
    brand cuyo id es :
    ${id}`
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return "Aqui se actualizara" +
          "la brand con id" + id
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Aqui se borrara" +
          "la brand con id" + id
  }
}
