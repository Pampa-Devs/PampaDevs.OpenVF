import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpecificationModule } from './specification/specification.module';

@Module({
  imports: [SpecificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
