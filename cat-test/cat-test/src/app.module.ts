import {Module} from "@nestjs/common";


import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import {Cat} from "./cats/cat-entity";
import {Breed} from "./cats/breed-entity";


@Module({
        controllers: [],
        providers: [],
        imports: [
            ConfigModule.forRoot({
                    envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            TypeOrmModule.forRoot({
                        type: 'postgres',
                        host: process.env.POSTGRES_HOST,
                        port: Number(process.env.POSTGRES_PORT),
                        username: process.env.POSTGRES_USER,
                        password: process.env.POSTGRES_PASSWORD,
                        database: process.env.POSTGRES_DB,
                        entities: [Cat, Breed],
                        synchronize: true,
                        autoLoadEntities: true
                }),
            CatsModule,
        ]
})
export class AppModule {}