import { ApiProperty } from "@nestjs/swagger";
import { user } from "@prisma/client";

export class UserEntity implements user {
    @ApiProperty({ example: 1, description: 'id do usuário' })
    id: number;

    @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
    email: string;

    @ApiProperty({ example: 'HashedPassword123', description: 'Senha criptografada do usuário' })
    password: string;
}
