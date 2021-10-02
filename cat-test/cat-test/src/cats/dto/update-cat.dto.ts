import {IsNotEmpty, Length} from "class-validator";

export class UpdateCatDto {

    @IsNotEmpty({
        message: `Cat should have a name`
    })
    @Length(3, 15)
    name?: string;

    @IsNotEmpty({
        message: `Cat should have a price`
    })
    price?: number;

    @IsNotEmpty({
        message: `Cat should have a color`
    })
    color?: string;

    @IsNotEmpty({
        message: `Cat should have a breed`
    })
    name_breed?: string;

    @IsNotEmpty({
        message: `Cat should have a breed`
    })
    url?: string;
}