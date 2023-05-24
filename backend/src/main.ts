import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors');
  app.enableCors(); // CORS ayarlarını etkinleştirin
  app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST"],
}))
  await app.listen(3000);
}
bootstrap();