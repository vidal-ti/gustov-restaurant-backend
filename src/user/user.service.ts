import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async save(entity : UserDto){
        if (entity.Id === 0 || entity.Id == null) {
            return this.insert(entity);
        } else {
            return this.updated(entity);
        }
    }
    
    async insert(entity : UserDto){
        const newCategory = this.userRepository.create(entity);
        return this.userRepository.save(newCategory);
    }
    
    async updated(entity : UserDto){
        const existName = await this.userRepository.findOne({where :{ Id : entity.Id}});
        if(!existName)
            return new HttpException('Product not found', HttpStatus.NOT_FOUND);

        const updatedProduct = Object.assign(existName, entity)
        return this.userRepository.save(updatedProduct);
    }

    async search(){
        return this.userRepository.find();
    }

    async get(id: number){
        return this.userRepository.findOne({
            where:{ Id: id}
        });
    }

    async delete(id: number){
        return this.userRepository.delete({ Id : id});
    }
}