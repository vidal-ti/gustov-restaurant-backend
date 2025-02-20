import { ApiProperty } from '@nestjs/swagger';
import { User } from "src/user/entities/user.entity";

export class SaleDto {
    @ApiProperty({ description: 'ID de la venta' })
    public Id: number;

    @ApiProperty({ description: 'Usuario que realizó la venta', type: () => User })
    public User: User;

    @ApiProperty({ description: 'Total de la venta' })
    public Total: number;

    @ApiProperty({ description: 'Estado de la venta' })
    public Status: number;

    @ApiProperty({ description: 'Fecha de creación' })
    public CreatedAt: Date;
}