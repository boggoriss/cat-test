import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToOne, PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Breed} from "./breed-entity";
import {ImageEntity} from "../images/image.entity";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name_cat: string;

    @ManyToOne(type => Breed,
        breed => breed.cats,
        {eager: true, onUpdate: "CASCADE", onDelete: "CASCADE"}
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

    @OneToOne(
        () => ImageEntity,
        {
            eager: true,
            nullable: true
        }
    )
    @JoinColumn({
        name: "photo"
    })
    public image?: ImageEntity;

    @Column({
        default: false
    })
    public is_booked: boolean;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}