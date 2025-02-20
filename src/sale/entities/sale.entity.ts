import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Sale'})
export class Sale {
    @ApiProperty({ description: 'ID de la venta' })
    @PrimaryGeneratedColumn('increment', { name: 'SaleId' })
    public Id: number;

    @ApiProperty({ description: 'ID del usuario' })
    @Column()
    private UserId: number;

    @ApiProperty({ description: 'Usuario relacionado', type: () => User })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'UserId'})
    public User: User;

    @ApiProperty({ description: 'Total de la venta' })
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    public Total: number;

    @ApiProperty({ description: 'Estado de la venta' })
    @Column()
    public Status: number;

    @ApiProperty({ description: 'Fecha de creación' })
    @Column()
    public CreatedAt: Date;
}