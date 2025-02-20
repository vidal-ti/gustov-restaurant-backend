import { ApiProperty } from '@nestjs/swagger';
import { Dish } from 'src/dish/entities/dish.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'UpdateImage'})
export class UpdateImage {
    @ApiProperty({ description: 'ID de la imagen' })
    @PrimaryGeneratedColumn('increment', { name: 'UpdateImageId' })
    public Id: number;

    @ApiProperty({ description: 'ID del plato' })
    @Column()
    public DishId: number;

    @ApiProperty({ description: 'Plato relacionado', type: () => Dish })
    @ManyToOne(() => Dish)
    @JoinColumn({ name: 'DishId'})
    public Dish: Dish;

    @ApiProperty({ description: 'Imagen en base64' })
    @Column({ type: 'text', nullable: true })
    Image: string;
}

