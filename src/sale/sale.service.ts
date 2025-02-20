import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { SaleDto } from './dto/sale.dto';

@Injectable()
export class SaleService {

    constructor(@InjectRepository(Sale) private salesRepository: Repository<Sale>) { }

    async save(entity : SaleDto){
        if (entity.Id === 0 || entity.Id == null) {
            return this.insert(entity);
        } else {
            return this.updated(entity);
        }
    }
    
    async insert(entity : SaleDto){
        const newCategory = this.salesRepository.create(entity);
        return this.salesRepository.save(newCategory);
    }
    
    async updated(entity : SaleDto){
        const existName = await this.salesRepository.findOne({where :{ Id : entity.Id}});
        if(!existName)
            return new HttpException('Product not found', HttpStatus.NOT_FOUND);

        const updatedProduct = Object.assign(existName, entity)
        return this.salesRepository.save(updatedProduct);
    }

    async search(){
        return this.salesRepository.find({
            relations: ['User']
        });
    }

    async get(id: number){
        return this.salesRepository.findOne({
            where:{ Id: id},relations: ['User']
        });
    }

    async delete(id: number){
        return this.salesRepository.delete({ Id : id});
    }

    async getDailyReport() {
        return this.salesRepository
            .createQueryBuilder('Sale')
            .select("FORMAT(Sale.createdAt, 'dd/MM/yyyy')", "SaleDate") 
            .addSelect("COUNT(Sale.SaleId)", "TotalSales") 
            .addSelect("SUM(Sale.Total)", "TotalAmount")
            .groupBy("FORMAT(Sale.createdAt, 'dd/MM/yyyy')")
            .orderBy("SaleDate", "DESC") 
            .getRawMany();
    }
}