export class cardto {
    readonly   id : number;
    readonly   brand :string;
    readonly   colour:string;
    readonly   model:string
}
import { Test, TestingModule } from '@nestjs/testing';
import { SupercarController } from './supercar.controller';

describe('SupercarController', () => {
  let controller: SupercarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupercarController],
    }).compile();

    controller = module.get<SupercarController>(SupercarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { SupercarService } from './supercar.service';
import { get } from 'http';
import { cardto } from './car.dto';
@Controller('supercar')
export class SupercarController {
  constructor(private carservice: SupercarService) {}

  @Get('/')
  async getcar() {
    return this.carservice.getcar();
  }

  @Post()
  public postcar(@Body() car: cardto) {
    return this.carservice.postcar(car);
  }
  @Get(':id')
  public getcarbyid(@Param('id') id: number) {
    console.log(id)
    return this.carservice.getcarbyid(id);
  }
  @Delete()
  public deletecar(@Param('id') id: number) {
    this.carservice.deletecar(id);
  }
  @Put(':id')
  public putcar(@Param('id') id: number, @Query() query: any) {
    const propname= query.prop_name;
    console.log(propname);
    const propvalue= query.prop_value;
    console.log(propname);
    return this.carservice.putcar(id,propname,propvalue);
  }
}


export const CARS = [
    {
        "id": 1,
        "brand": "BMW",
        "color": "gold",
        "model": "BMWAR34"
    },
    {
        "id": 2,
        "brand": "marsadies",
        "color": "silver",
        "model": "MrA21"
    },
    {
        "id": 3,
        "brand": "oddy",
        "color": "black",
        "model": "SDW2"
    }
];
import { Module } from '@nestjs/common';
import { SupercarController } from './supercar.controller';
import { SupercarService } from './supercar.service';

@Module({
  controllers: [SupercarController],
  providers: [SupercarService]
})
export class SupercarModule {}
import { HttpException, Injectable } from '@nestjs/common';
import {CARS} from './supercar.mock'
import { throwError } from 'rxjs';
@Injectable()
export class SupercarService {
    private cars = CARS;

    public   getcar(){
        return this.cars;
    }



    public   postcar(car){
        return this.cars.push(car);
    }
    public   getcarbyid(id:number){
        const car = this.cars.find((car)=>car.id==id);
        if(!car){
            console.log("not found car :");
            throw new HttpException('car not found ',404);
        }
        return  car ;
    }
    public   deletecar(id:number){
        const indexfrom = this.cars.findIndex((car)=>car.id==id);
        if(id==-1){
          
            throw new HttpException('car not found ',404);
        }

        this.cars.splice(indexfrom,1);
        return  this.cars ;

    }
    public  putcar(id:number,propertyname:string,propertyvalue:string) {

        console.log(id,propertyname,propertyvalue)
        const index = this.cars.findIndex((car)=>car.id===id);
        // console.log("indexxxxxx", index)
        if(id==-1){
          
            throw new HttpException('car not found ',404);
        }

        const result =  this.cars[index][propertyname]= propertyvalue;
        return  result ;
        
    }
}
///node js code 


console.log('hi shardul');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
