import { Body, Controller, Delete, Get, Param,Patch,Post, Query } from '@nestjs/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get() //Get /users
    findAll(@Query('role') role?:'INTERN' | 'USER' | 'ADMIN') {
        return this.usersService.findAll(role);
    }

    @Get() //Get /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
            return this.usersService.findOne(id);

    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id') //Patch /users/:id
    update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
            return this.usersService.update(id, updateUserDto);

    }

    @Delete(':id') //Patch /users/:id
    delete(@Param('id' ,ParseIntPipe) id: number) {
            return this.usersService.delete(
                id
            );

    }
}