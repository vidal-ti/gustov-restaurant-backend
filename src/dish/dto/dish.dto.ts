import { ApiProperty } from '@nestjs/swagger';

export class DishDto {
    @ApiProperty({ description: 'ID del plato', example: 1 })
    public Id: number;

    @ApiProperty({ description: 'Nombre del plato', example: 'Picante de Pollo' })
    public Name: string;

    @ApiProperty({ description: 'Precio del plato', example: 25.0 })
    public Price: number;

    @ApiProperty({ description: 'Descripción del plato', example: 'Plato tradicional' })
    public Description: string;

    @ApiProperty({ description: 'Disponibilidad del plato', example: true })
    public IsAvailable: boolean;
}