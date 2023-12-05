import { Controller, Module, Get } from "@nestjs/common";

@Controller()
class AppController{
    @Get()
    getRootRouter(){
        return 'Hi There!!!'
    }
}

@Module({controllers:[AppController]})
class AppModuler{}