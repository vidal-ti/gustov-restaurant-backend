import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleDetail } from './entities/sale-detail.entity';
import { SaleDetailDto } from './dto/sale-detail.dto';

@Injectable()
export class SaleDetailService {

    constructor(@InjectRepository(SaleDetail) private saleDetailRepository: Repository<SaleDetail>) { }

    async save(entity : SaleDetailDto){
        if (entity.Id === 0 || entity.Id == null) {
            return this.insert(entity);
        } else {
            return this.updated(entity);
        }
    }
    
    async insert(entity : SaleDetailDto){
        const newCategory = this.saleDetailRepository.create(entity);
        return this.saleDetailRepository.save(newCategory);
    }
    
    async updated(entity : SaleDetailDto){
        const existName = await this.saleDetailRepository.findOne({where :{ Id : entity.Id}});
        if(!existName)
            return new HttpException('Product not found', HttpStatus.NOT_FOUND);

        const updatedProduct = Object.assign(existName, entity)
        return this.saleDetailRepository.save(updatedProduct);
    }

    async search(){
        return this.saleDetailRepository
            .createQueryBuilder('SaleDetail')
            .leftJoinAndSelect('SaleDetail.Dish', 'Dish')
            .leftJoinAndSelect('SaleDetail.Sale', 'Sale')
            .leftJoinAndSelect('Sale.User', 'User')
            .getMany();
    }

    async get(id: number){
        return await this.saleDetailRepository
        .createQueryBuilder('SaleDetail')
        .where('SaleDetail.Id = :id', { id })
        .leftJoinAndSelect('SaleDetail.Dish', 'Dish')
        .leftJoinAndSelect('SaleDetail.Sale', 'Sale')
        .leftJoinAndSelect('Sale.User', 'User')
        .getOne();
    }

    async delete(id: number){
        return this.saleDetailRepository.delete({ Id : id});
    }
}