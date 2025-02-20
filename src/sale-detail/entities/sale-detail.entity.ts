import { ApiProperty } from '@nestjs/swagger';
import { Dish } from 'src/dish/entities/dish.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'SaleDetail'})
export class SaleDetail {
    @ApiProperty({ description: 'ID del detalle de venta' })
    @PrimaryGeneratedColumn('increment', {name: 'SaleDetailId'})
    Id: number;

    @ApiProperty({ description: 'Cantidad' })
    @Column()
    Quantity: number;

    @ApiProperty({ description: 'Precio unitario' })
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    UnitPrice: number;

    @ApiProperty({ description: 'Subtotal' })
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    SubTotal: number;

    @ApiProperty({ description: 'ID de la venta' })
    @Column()
    public SaleId: number;

    @ApiProperty({ description: 'Venta relacionada', type: () => Sale })
    @ManyToOne(() => Sale)
    @JoinColumn({ name: 'SaleId'})
    Sale: Sale;

    @ApiProperty({ description: 'ID del plato' })
    @Column()
    public DishId: number;

    @ApiProperty({ description: 'Plato relacionado', type: () => Dish })
    @ManyToOne(() => Dish)
    @JoinColumn({ name: 'DishId'})
    Dish: Dish;
}