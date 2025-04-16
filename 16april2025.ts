import { Controller, Get, Post, Delete, Patch, Put, Res, Req, Header, Redirect, Param, Query, Body } from "@nestjs/common";
import { Request, Response } from "express";
 interface Videosface{
    id?:number;
    name :string;
    age?:34;
    date: string;
    
 }
 interface VideosDTO{
    id?:number;
    name :string;
    age?:34;
    date: string;
    
 }


@Controller("/users")
export class UserController {

    @Get('/videos/:id/:name')
    getvideo(@Param() params1:Videosface){
     console.log(params1);
     return 'sucessful';
    }
    
    @Get('/videos')
    getvideo(@Query() query1:Videosface){
     console.log(typeof query1);
     return 'sucessful';
    }
    @Post('/videos')
    getvideo2(@Body() query12:VideosDTO){
     console.log(query12);
     return {suncessful:true};
    }
    @Post('/videos')
    getvideo3(@Body('name') query12:string){
     console.log(query12);
     return {suncessful:true};
    }

    @Get('/profile')
    @Header('Cache-Control', 'ajdkwjk')
    @Header('X-Name', 'abhijeet')
    //  @Redirect("users/acc",302);
    getprofile(@Req() req: Request) {
       
        return {
            name: 'spider man',
        };
    }
   

    @Get('/balance')
    getbalance(){
        return {
            name : 'ldmad'
        };
    }



}
}
import { Controller, Get, Header, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/users')
export class UserController {

    @Get('/profile')
    @Header('Cache-Control', 'no-store') 
    @Header('X-Name', 'abhijeet')        
    getProfile(@Req() req: Request) {
        return {
            name: 'spider man',
        };
    }

    // Optional: another example route
   
    }

