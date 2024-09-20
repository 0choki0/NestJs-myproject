import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException, NotFoundException, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Header('Custom', 'Test Header')
  @Get(':id')
  findOne(@Param('id') id: string) {
    if ( +id === 0) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    } else if ( +id < 0) {
      throw new NotFoundException('id 값을 찾지 못하였습니다.')
    }

    return this.usersService.findOne(+id);
  }

  @HttpCode(202)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
