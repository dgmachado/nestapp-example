import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("Environment.production:" + environment.production);
  await app.listen(3000);
}
bootstrap();
