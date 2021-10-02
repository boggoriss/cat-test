import {Body, Controller, Get, HttpCode, Post} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {CreateCatDto} from "./dto/create-cat.dto";
import {CreateBreedDto} from "./dto/create-breed.dto";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get('/')
    sayHi() {
        return 'Hi! Very soon you will be able to create your own ' +
            'first cat!'
    }

    @Get('/get_all_cats')
    async getAllCats(){
        return await this.catsService.getAllCats()
    }

    @Get('/get_all_breeds')
    async getAllBreeds(){
        return await this.catsService.getAllBreeds()
    }

    @Post('/create_cat')
    @HttpCode(200)
    async createCat(@Body() catDto: CreateCatDto) {
        return await this.catsService.createCat(catDto)
    }

    @Post('/create_breed')
    @HttpCode(200)
    async createBreed(@Body() breedDto: CreateBreedDto) {
        return await this.catsService.createBreed(breedDto)
    }

}
