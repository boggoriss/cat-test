import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseInterceptors, Req, UploadedFile} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {CreateCatDto} from "./dto/create-cat.dto";
import {CreateBreedDto} from "./dto/create-breed.dto";
import {UpdateCatDto} from "./dto/update-cat.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import { Express } from 'express';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get('/hi')
    sayHi() {
        return 'Hi! Very soon you will be able to create your own ' +
            'first cat!';
    }

    @Get()
    index(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
        limit = limit > 100 ? 100 : limit;
        return this.catsService.paginateCats({page, limit, route: "http://localhost:7000/cats"});
    }

    @Get('/:id')
    async getCat(@Param('id') id: number){
        return await this.catsService.getCat(id);
    }

    @Get('/booked_cats')
    async getAllBookedCats(){
        return await this.catsService.getAllBookedCats();
    }

    @Get('/not_booked_cats')
    async getAllNotBookedCats(){
        return await this.catsService.getAllNotBookedCats();
    }

    @Get('/get_all_breeds')
    async getAllBreeds(){
        return await this.catsService.getAllBreeds();
    }

    @Post('/create_cat')
    @HttpCode(201)
    async createCat(@Body() catDto: CreateCatDto) {
        return await this.catsService.createCat(catDto);
    }

    @Post('add_image/:id')
    @UseInterceptors(FileInterceptor('file'))
    async addImage(@Param(':id') id: number, @UploadedFile() file: Express.Multer.File){
        return this.catsService.addImage(id, file.buffer, file.originalname);
    }

    @Post('/create_breed')
    @HttpCode(201)
    async createBreed(@Body() breedDto: CreateBreedDto) {
        return await this.catsService.createBreed(breedDto);
    }

    @Put('/update_cat/:id')
    async updateCat(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
        return await this.catsService.updateCat(id, updateCatDto);
    }

    @Put('/book_cat/:id')
    async bookCat(@Param('id') id: number){
        return await this.catsService.bookCat(id);
    }

    @Put('unbook_cat/:id')
    async unbookCat(@Param('id') id: number){
        return await this.catsService.unbookCat(id);
    }

    @Delete('/delete_cat/:id')
    async deleteCat(@Param('id') id: number){
        return await this.catsService.remove(id);
    }

}
