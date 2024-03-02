import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateOpenApi } from '@ts-rest/open-api';
import { contract } from '@cakaybox/common';
import * as swaggerUi from 'swagger-ui-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // TODO: フロントエンドアプリケーションに限定する
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  // OpenAPIのドキュメントを生成する
  const openApiDocument = generateOpenApi(contract, {
    info: {
      title: 'Cakaybox API',
      version: '2.0.0',
    },
  });
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

  await app.listen(3001);
}
bootstrap();
