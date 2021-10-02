import {IsNotEmpty} from "class-validator";

export class CreateBreedDto {

    @IsNotEmpty({
        message: `Cat should have a price`
    })
    name_breed: string;
}