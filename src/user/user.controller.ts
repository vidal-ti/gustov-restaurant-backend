import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Usuarios')
@Controller('users')
export class UserController {
    constructor(private UserService : UserService) {}

    @Get('search')
    search(): Promise<Array<UserDto>>{
        return this.UserService.search();
    }

    @Post('save')
    save(@Body() entity: UserDto){
        return this.UserService.save(entity);
    }

    @Get('get/:id')
    get(@Param('id', ParseIntPipe) id: number){
        return this.UserService.get(id);
    }

    @Delete('delete/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.UserService.delete(id);
    }
}