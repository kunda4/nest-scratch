import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController{
    @Get('/hi')
    getRootRouter(){
        return 'Hi There How are doing?'
    }

    @Get('bye')
    getbyeRouter(){
        return 'Bye Bye!!!'
    }
}