import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateImage } from './entities/upload-image.entity';
import { UpdateImageController } from './upload-image.controller';
import { UpdateImageService } from './upload-image.service';

@Module({
    imports: [TypeOrmModule.forFeature([UpdateImage])],
    controllers: [UpdateImageController],
    providers: [UpdateImageService],
    exports:[UpdateImageService]
})
export class UpdateImageModule {}
