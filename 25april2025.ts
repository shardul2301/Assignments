

import { Injectable } from "@nestjs/common";

interface User {
    name :string,
    age :number,
    id:number


}


@Injectable()
export class Store{
    private store = new Map<number,User>();
   constructor(){ 
    console.log("this is store 2");
   }
    adduser(user:User){
        return this.store.set(user.id,user);
    }

    getuser(id:number){
        return this.store.get(id);
    }
    getusers(){
        return Array.from(this.store).map((_,user)=>user);
    }
    updateuser(id:number,user:User){
        return this.store.set(id,user);
    }
    deleteuser(id:number){
        return this.store.delete(id);
    }
}

import { Module } from '@nestjs/common';
import{UserController} from './users.controller';
import { UserStore } from './store/users.store';
// import {store} from './store'
import{Store} from './store/store'
@Module({
 
  controllers: [UserController],
  // providers:[{provide:UserStore,useClass:Store}]
  // providers:[UserStore, {provide:Store,useExisting:UserStore}]
  // providers:[UserStore, {provide:Store,useClass:UserStore}]
  // providers:[Store]
providers:[
  {provide:'DATABASE',useValue:'VALUE OF DB'},
  {provide:'MAIL',useValue:['SHA@GMAIL.COM','WEEWR@GMAIL.COM']},
  {provide:'object_config',useValue:{
    name : 'shardul',
    age :22,
    weigth :'60kg'

  }}
]

})
export class AppModule {}


// controller
import { Controller, Get, Post, Delete, Patch, Put, Res, Req, Header, Redirect, Param, Query, Body, Inject } from "@nestjs/common";
import { Request, Response } from "express";
import { get } from "http";
import { UserStore } from "./store/users.store";
import { Store } from "./store/store";



@Controller("/users")
export class UserController { 
    // constructor( private store:Store){
    //     console.log(this.store);
    // }
    // constructor( @Inject('DATABASE')private dbname:string){
    //     console.log(this.dbname);
    // }
    // constructor( @Inject('MAIL')private mail:string[]){
    //     console.log(this.mail);
    // }
    constructor( @Inject('object_config')private configur:Record<string,any>){
        console.log(this.configur);
    }
}



