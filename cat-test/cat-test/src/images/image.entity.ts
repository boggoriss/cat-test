import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ImageEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public url: string;

    @Column()
    public key: string;
    
}