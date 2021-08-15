import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import engine from 'express-edge'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(
  //   session({
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { maxAge: 360000 }
  //   }),
  // )

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.use(engine);
  // app.use(passport.initialize());
  // app.use(passport.session());

  await app.listen(80);
}
bootstrap();
