import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessonSerializer } from './session.serializer';

@Module({
  imports: [UsersModule, PassportModule.register({session: true})],
  providers: [AuthService, LocalStrategy, SessonSerializer]
})
export class AuthModule {
}
