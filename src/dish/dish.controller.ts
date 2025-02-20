import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { DishService } from "./dish.service";
import { DishDto } from "./dto/dish.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Platos')
@Controller('dish')
export class DishController {
    constructor(private dishService : DishService) {
        this.dishService.seed();
    }

    @Get('search')
    search(): Promise<Array<DishDto>>{
        return this.dishService.search();
    }

    @Post('save')
    save(@Body() entity: DishDto){
        return this.dishService.save(entity);
    }

    @Get('get/:id')
    get(@Param('id', ParseIntPipe) id: number){
        return this.dishService.get(id);
    }

    @Delete('delete/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.dishService.delete(id);
    }
}