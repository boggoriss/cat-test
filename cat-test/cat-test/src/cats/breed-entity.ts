import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Cat} from "./cat-entity";

@Entity()
export class Breed {
    @PrimaryGeneratedColumn()
    public breed_id: number;

    @Column()

    public name_breed: string;

    @OneToMany( type => Cat,
        cats => cats.breed,
    )
    public cats: Cat[];

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}