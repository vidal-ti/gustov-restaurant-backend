import { ApiProperty } from '@nestjs/swagger';
import { Dish } from 'src/dish/entities/dish.entity';

export class UpdateImageDto {
    @ApiProperty({ description: 'ID de la imagen' })
    public Id: number;

    @ApiProperty({ description: 'Plato relacionado', type: () => Dish })
    public Dish: Dish;

    @ApiProperty({ description: 'Imagen en base64' })
    public Image: string;
}