import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateImage } from './entities/upload-image.entity';
import { UpdateImageDto } from './dto/upload-image.dto';

@Injectable()
export class UpdateImageService {
  constructor(@InjectRepository(UpdateImage) private salesRepository: Repository<UpdateImage>) { }
  async saveImage( entity: UpdateImageDto) {
    const saleDetail = await this.salesRepository.findOne({ where: { DishId :entity.Dish.Id } });
    if (entity.Id == 0 || entity.Id == null && !saleDetail) 
      await this.salesRepository.save(entity);
    else{
      const existName = await this.salesRepository.findOne({where :{ DishId :entity.Dish.Id}});
          if(!existName)
              return new HttpException('Product not found', HttpStatus.NOT_FOUND);
          const updatedProduct = Object.assign(existName, entity)
      await this.salesRepository.save(updatedProduct);
    }
    return { message: 'Image saved successfully!' };
  }

  async getOwnerId(){
    return this.salesRepository.find({
      relations: ['Dish']
    });
  }
}