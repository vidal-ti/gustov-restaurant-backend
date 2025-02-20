import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { SaleService } from "./sale.service";
import { SaleDto } from "./dto/sale.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Ventas')
@Controller('sale')
export class SaleController {
    constructor(private saleService : SaleService) {}

    @Get('search')
    search(): Promise<Array<SaleDto>>{
        return this.saleService.search();
    }

    @Post('save')
    save(@Body() entity: SaleDto){
        return this.saleService.save(entity);
    }

    @Get('get/:id')
    get(@Param('id', ParseIntPipe) id: number){
        return this.saleService.get(id);
    }

    @Delete('delete/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.saleService.delete(id);
    }

    @Get('getdailyreport')
    getDailyReport() {
        return this.saleService.getDailyReport();
    }
}