import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CatsRepository} from "./cats.repository";
import {BreedRepository} from "./breed.repository";
import {CreateBreedDto} from "./dto/create-breed.dto";
import {CreateCatDto} from "./dto/create-cat.dto";
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(CatsRepository) private catsRepository: CatsRepository,
                @InjectRepository(BreedRepository) private breedRepository: BreedRepository) {}

    async getAllBreeds() {
        const breeds = await this.breedRepository.find({select: ["breed_id", "name_breed", "created_at"]})
        return breeds
    }

    async getAllCats() {
        const cats = await this.catsRepository.find({
            relations: ["breed"]
        })
        return cats
    }

    async createBreed(dto: CreateBreedDto) {
        const breed =  this.breedRepository.create(dto)
        await this.breedRepository.save(breed)
        console.log(breed)
        return breed
    }

    async createCat(dto: CreateCatDto){
        let msg = ""
        const breed = await this.breedRepository.findOne({ where: { name_breed: dto.name_breed}})

        if(!breed){
            const newBreed = this.breedRepository.create(dto)
            await this.breedRepository.save(newBreed)
            msg += "[New breed added]"
            const cat =  this.catsRepository.create({...dto,
                breed: newBreed})
            await this.catsRepository.save(cat);
            msg += "[New cat added]"
            return {...cat, msg};
        }

        const cat =  this.catsRepository.create({...dto,
            breed: breed})
        await this.catsRepository.save(cat);
        msg += "[New cat added]"
        return {...cat, msg};
    }
}
