import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { SaleDetailService } from "./sale-detail.service";
import { SaleDetailDto } from "./dto/sale-detail.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Detalle de venta')
@Controller('saledetail')
export class SaleDetailController {
    constructor(private saleDetailService : SaleDetailService) {}

    @Get('search')
    search(): Promise<Array<SaleDetailDto>>{
        return this.saleDetailService.search();
    }

    @Post('save')
    save(@Body() entity: SaleDetailDto){
        return this.saleDetailService.save(entity);
    }

    @Get('get/:id')
    get(@Param('id', ParseIntPipe) id: number){
        return this.saleDetailService.get(id);
    }

    @Delete('delete/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.saleDetailService.delete(id);
    }
}