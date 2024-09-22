import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verjfy-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from './dto/user-info.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return
  }

  @Get(':id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
