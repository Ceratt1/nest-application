import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
    @IsEmail()
    email: string;
    
    @ApiProperty({ example: 'HashedPassword123', description: 'Senha criptografada do usuário' })
    @IsStrongPassword()
    password: string;
}
