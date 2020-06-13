import { Module } from '@nestjs/common';
import { SpecificationController } from './specification.controller';

@Module({
    imports: [],
    controllers: [SpecificationController],
    providers: [],
})
export class SpecificationModule { }
