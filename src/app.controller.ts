import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
