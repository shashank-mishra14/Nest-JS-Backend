import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {

    private users =[
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role?: 'INTERN' | 'USER' | 'ADMIN') {
        if(role){
            const rolesArray= this.users.filter(user=>user.role===role)
            if(rolesArray.length===0){
                throw new NotFoundException(`Koi bhi ${role} role se related user nahi hai`);
            }
        }
        return this.users;

    }
    
    findOne(id:number){
        const user = this.users.find(user=>user.id ==id);
        if(!user){
            throw new NotFoundException(`Jis user se aap sampark karna chahte hai voh abhi uplabh nahi hai`);
        }
        return user;
    }


    create(createUserDto:CreateUserDto){
       const userByHighestId=[...this.users].sort((a,b)=> b.id - a.id);

       const newUser ={
        id:userByHighestId[0].id+1,
        ...createUserDto
       }
       this.users.push(newUser);
       return newUser;
    }

    update(id:number, updateUserDto:UpdateUserDto){ this
       this.users = this.users.map(user => {
        if(user.id === id){
            return {
                ...user,
                ...updateUserDto
            }
        }
        return user
       })

       return this.findOne(id);
    }

    delete(id:number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);

        return removedUser;
    }
}
