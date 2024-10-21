import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsEnum(['INTERN' , 'USER' , 'ADMIN'],{
        message:'valid role required'
    })
    role:'INTERN' | 'USER' | 'ADMIN';
}