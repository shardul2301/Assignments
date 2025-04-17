
const User =[];
Controller('/users')
export class UserController{
     @Post
     adduser(@Body() createuserdto : createuserDTO ){
        User.push(createuserdto);
        return 'user added';
     }


@Get()
getuser(){
    return User;
}
@Get(":id")
getuser(@Param(":ID") id : number){
    return userInfo.find(user => +user.id === +id);
}
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
