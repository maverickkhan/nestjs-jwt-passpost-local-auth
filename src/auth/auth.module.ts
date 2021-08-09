import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule],
  providers: [AuthService]
})
export class AuthModule {
  constructor(
    private usersService: UsersService,
  ){}

  async validateUser(username: string, password: string):Promise<any>{
    const user = await this.usersService.findOne(username)

    if (user && user.password === password){
      const {password, username, ...rest} = user;
      return rest;
    }
    return null;
  }
    
}
