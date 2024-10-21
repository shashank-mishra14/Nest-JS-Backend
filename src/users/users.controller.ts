import { Body, Controller, Delete, Get, Param,Patch,Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() //Get /users
    findAll(@Query('role') role?:'INTERN' | 'USER' | 'ADMIN') {
        return []
    }

    @Get() //Get /users/:id
    findOne(@Param('id') id: string) {
            return {id}

    }

    @Post()
    create(@Body() user:{}){
        return user;
    }

    @Patch(':id') //Patch /users/:id
    update(@Param('id') id: string, @Body() userUpdate:{}) {
            return {id,...userUpdate}

    }

    @Delete(':id') //Patch /users/:id
    delete(@Param('id') id: string) {
            return {id}

    }
}