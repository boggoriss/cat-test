import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cat} from "./cat-entity";
import {Breed} from "./breed-entity";
import {CatsRepository} from "./cats.repository";
import {BreedRepository} from "./breed.repository";
import {CatsController} from "./cats.controller";
import {CatsService} from "./cats.service";

@Module({
    imports: [TypeOrmModule.forFeature([CatsRepository, BreedRepository])],
    controllers: [CatsController],
    providers: [CatsService]
})
export class CatsModule {}
