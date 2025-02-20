import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DishDto } from './dto/dish.dto';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishService {
    constructor(@InjectRepository(Dish) private dishRepository: Repository<Dish>) { }

    async seed() {
        const dishes = [
            { Name: 'Picante de Pollo', Price: 25.0, Description: 'Plato tradicional' , IsAvailable: true},
            { Name: 'Charque', Price: 30.0, Description: 'Charque de res'             , IsAvailable: true},
            { Name: 'Pique', Price: 28.0, Description: 'Pique macho'                  , IsAvailable: true},
            { Name: 'Pailita', Price: 35.0, Description: 'Pailita de res'             , IsAvailable: true}
        ];
        
        for (const dish of dishes) {
            const exists = await this.dishRepository.findOne({ where: { Name: dish.Name } });
            if (!exists) {
                await this.dishRepository.save(dish);
            }
        }
    }

    async save(entity : DishDto){
        if (entity.Id === 0 || entity.Id == null) {
            return this.insert(entity);
        } else {
            return this.updated(entity);
        }
    }
    
    async insert(entity : DishDto){
        const newCategory = this.dishRepository.create(entity);
        return this.dishRepository.save(newCategory);
    }
    
    async updated(entity : DishDto){
        const existName = await this.dishRepository.findOne({where :{ Id : entity.Id}});
        if(!existName)
            return new HttpException('Product not found', HttpStatus.NOT_FOUND);

        const updatedProduct = Object.assign(existName, entity)
        return this.dishRepository.save(updatedProduct);
    }

    async search(){
        return this.dishRepository.find();
    }

    async get(id: number){
        return this.dishRepository.findOne({
            where:{ Id: id}
        });
    }

    async delete(id: number){
        return this.dishRepository.delete({ Id : id});
    }
}