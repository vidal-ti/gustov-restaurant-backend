import { ApiProperty } from '@nestjs/swagger';
import { Dish } from 'src/dish/entities/dish.entity';
import { Sale } from 'src/sale/entities/sale.entity';

export class SaleDetailDto {
    @ApiProperty({ description: 'ID del detalle de venta' })
    public Id: number;

    @ApiProperty({ description: 'Cantidad' })
    public Quantity: number;

    @ApiProperty({ description: 'Precio unitario' })
    public UnitPrice: number;

    @ApiProperty({ description: 'Subtotal' })
    public SubTotal: number;

    @ApiProperty({ description: 'Venta relacionada', type: () => Sale })
    public Sale: Sale;

    @ApiProperty({ description: 'Plato relacionado', type: () => Dish })
    public Dish: Dish;
}
