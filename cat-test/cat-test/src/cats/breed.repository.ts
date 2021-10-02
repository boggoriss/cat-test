import {EntityRepository, Repository} from "typeorm";
import {Breed} from "./breed-entity";

@EntityRepository(Breed)
export class BreedRepository extends Repository<Breed> {}