import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty({ description: 'ID del usuario' })
    public Id: number;

    @ApiProperty({ description: 'Nombre completo' })
    public Name: string;

    @ApiProperty({ description: 'Nombre de usuario' })
    public UserName: string;

    @ApiProperty({ description: 'Contraseña' })
    public Password: string;

    @ApiProperty({ description: 'Rol del usuario' })
    public Role: number;

    @ApiProperty({ description: 'Estado del usuario' })
    public IsActive: boolean;

    @ApiProperty({ description: 'Fecha de creación' })
    public Created: Date;
}