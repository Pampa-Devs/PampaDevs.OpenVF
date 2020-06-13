import { Controller, Body, Post, HttpException, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';


@ApiTags('specification')
@Controller('specification')
export class SpecificationController {

    @Get()
    @ApiOperation({ summary: 'Get materialized OpenAPI Spec' })
    @ApiResponse({ status: 200, description: 'The request has been successfully processed.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 500, description: 'Internal Server Error.'})
    @ApiResponse({ status: 501, description: 'Not Implemented Yet.'})
    async get(@Param() url: String) {
        throw new HttpException('Forbidden', HttpStatus.NOT_IMPLEMENTED); 
    }

    @Post()
    @ApiOperation({ summary: 'Save OpenAPI Spec in a Mongo document' })
    @ApiResponse({ status: 200, description: 'The request has been successfully processed.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 500, description: 'Internal Server Error.'})
    @ApiResponse({ status: 501, description: 'Not Implemented Yet.'})
    async post(@Body() url: String) {
        throw new HttpException('Forbidden', HttpStatus.NOT_IMPLEMENTED); 
    }
}
