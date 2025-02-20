import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'User'})
export class User {
    @ApiProperty({ description: 'ID del usuario' })
    @PrimaryGeneratedColumn('increment', {name:'UserId'})
    public Id: number;

    @ApiProperty({ description: 'Nombre completo' })
    @Column()
    public Name: string;

    @ApiProperty({ description: 'Nombre de usuario' })
    @Column({ unique: true, length: 30 })
    public UserName: string;

    @ApiProperty({ description: 'Contraseña' })
    @Column()
    public Password: string;

    @ApiProperty({ description: 'Rol del usuario' })
    @Column()
    public Role: number;

    @ApiProperty({ description: 'Estado del usuario' })
    @Column({ default: true })
    public IsActive: boolean;

    @ApiProperty({ description: 'Fecha de creación' })
    @Column()
    public Created: Date;
}