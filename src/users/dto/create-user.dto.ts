export class CreateUserDto{
    name:string;
    email:string;
    role:'INTERN' | 'USER' | 'ADMIN';
}