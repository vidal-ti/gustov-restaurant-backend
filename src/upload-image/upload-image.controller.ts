import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UpdateImageService } from "./upload-image.service";
import { UpdateImageDto } from "./dto/upload-image.dto";

@ApiTags('Actualizar Imagen')
@Controller('updateimage')
export class UpdateImageController {
    constructor(private imageService : UpdateImageService) {}

    @Post('saveimage')
    async saveImage(@Body() entity: UpdateImageDto) {
        return this.imageService.saveImage(entity);
    }

    @Get('getownerid')
    async getOwnerId(){
        return this.imageService.getOwnerId();
    }
}