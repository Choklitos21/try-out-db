import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Logger, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
  );

  const config = new DocumentBuilder()
      .setTitle('My API Test')
      .setDescription('Im trying to make a good API')
      .setVersion('1.0')
      .addTag('API')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('myApi', app, document);

  const PORT = process.env.PORT || 3000;

  const logger = new Logger('/Main');

  logger.log(`Running on port ${PORT}`)

  await app.listen(PORT);
}
bootstrap();
