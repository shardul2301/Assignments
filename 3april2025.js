const promise1 = new Promise((resolve,reject)=>{
   
    setTimeout((val)=>{
        console.log('set time out done for promise 1 ',val)
        resolve("promise 1 is resolve");
    },5000,45);
});
const promise2 = new Promise((resolve,reject)=>{
   
    setTimeout((val2)=>{
        console.log('set time out done for promise 2 ',val2)
        resolve("promise 2 is resolve");
    },2000,445);
});
const promise3= new Promise((resolve,reject)=>{
   
    setTimeout((val3)=>{
        console.log('set time out done for promise 3 ',val3)
        resolve("promise 3 is resolve");
    },3000,4405);
});



async function kartehai(){
    console.log('promise one is waiting to complete');
    const value1 = await promise1;
     console.log(value1)
     
    console.log('promise two is waiting to complete');
    const value2 = await promise2;
    console.log(value2)
}
kartehai();





const P1 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("promise 1 is resolve"),5000);
    });
const P2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise 2 is resolve"),3000);
});
const P3 = new Promise((resolve,reject)=>{
   
    setTimeout(()=> resolve("promise 3 is resolve"),2000);
});

Promise.all([P1,P2,P3]).then((res)=>{
    console.log(res)
})



const P11 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("promise 1 is resolve"),5000);
    });
const P22 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise 2 is resolve"),1000);
});
const P33 = new Promise((resolve,reject)=>{
   
    setTimeout(()=> reject("promise 3 is reject"),2000);
});

Promise.all([P11,P22,P33]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
});



const P11 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("promise 1 is resolve"),5000);
    });
const P22 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise 2 is resolve"),1000);
});
const P33 = new Promise((resolve,reject)=>{
   
    setTimeout(()=> reject("promise 3 is reject"),2000);
});

Promise.allSettled([P11,P22,P33]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
});


const P11 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("promise 1 is resolve"),5000);
    });
const P22 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise 2 is resolve"),1000);
});
const P33 = new Promise((resolve,reject)=>{
   
    setTimeout(()=> reject("promise 3 is reject"),2000);
});

Promise.race([P11,P22,P33]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
});

const P11 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("promise 1 is resolve"),5000);
    });
const P22 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise 2 is resolve"),1000);
});
const P33 = new Promise((resolve,reject)=>{
   
    setTimeout(()=> reject("promise 3 is reject"),2000);
});

Promise.any([P11,P22,P33]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
});

const P11 = new Promise((resolve,reject)=>{
   setTimeout(()=>reject("promise 1 is reject"),5000);
    });
const P22 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("promise 2 is reject"),1000);
});
const P33 = new Promise((resolve,reject)=>{
   
    setTimeout(()=> reject("promise 3 is reject"),2000);
});

Promise.any([P11,P22,P33]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
});

