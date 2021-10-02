import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne, PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Breed} from "./breed-entity";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name_cat: string;

    @ManyToOne(type => Breed,
        breed => breed.cats
    )
    @JoinColumn({
         name: 'breed_id'
    })
    public breed: Breed;

    @Column()
    public color: string;

    @Column({
        type: "numeric"
    })
    public price: number;

    @Column({
        default: null
    })
    public url: string;

    @Column({
        default: false
    })
    public is_adopted: boolean;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}