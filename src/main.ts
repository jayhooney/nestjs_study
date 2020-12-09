import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 전역 범위 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      // ㅡ,.ㅡ whitelist 라니,, 너무 PC하지 못하구먼,,
      whitelist: true, // validation을 위한 데코레이터가 붙어있지 않은 속성들은 제거하는 옵션.
      forbidNonWhitelisted: true, // whitelist 설정을 켜서 걸러질 속성이 있다면 요청 자체를 막도록하는 옵션.(이 경우 400에러를 반환하게 된다.)
      transform: true, // 성공적으로 요청이 넘어오면 경우 자료들의 형변환을 실시하는 옵션.
    }),
  );
  await app.listen(3000);
}
bootstrap();
