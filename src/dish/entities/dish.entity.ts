import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Dish'})
export class Dish {
    @ApiProperty({ description: 'ID del plato' })
    @PrimaryGeneratedColumn('increment', {name: 'DishId'})
    Id: number;

    @ApiProperty({ description: 'Nombre del plato' })
    @Column({ length: 100 })
    Name: string;

    @ApiProperty({ description: 'Precio del plato' })
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    Price: number;

    @ApiProperty({ description: 'Descripción del plato' })
    @Column({ type: 'text', nullable: true })
    Description: string;

    @ApiProperty({ description: 'Disponibilidad del plato' })
    @Column({ default: true })
    IsAvailable: boolean;
}