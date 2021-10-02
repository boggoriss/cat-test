import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import { config } from 'aws-sdk';

async function start(){
    const PORT = process.env.PORT || 3000;
    config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });
    const app = await NestFactory.create(AppModule);


    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start()
