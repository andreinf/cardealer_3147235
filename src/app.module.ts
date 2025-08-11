// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { BrandsModule } from './brands/brands.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [VendorsModule, BrandsModule, UserModule, CustomersModule],
  controllers: [AppController], // Solo el controlador principal aquí
  providers: [AppService],
})
export class AppModule {}
