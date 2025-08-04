import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { VendorsController } from './vendors/vendors.controller';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CustomersModule, VendorsModule, BrandsModule],
  controllers: [AppController, VendorsController],
  providers: [AppService],
})
export class AppModule {}
