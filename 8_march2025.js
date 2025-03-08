//closuer practies quetions 

function outer1(){
  var a =10;
  function inner(){
    console.log(a);
  }
  return inner;
}

outer1()();
function outer2(){ 
  function inner(){
    console.log(a);
  }
  var a =10;
  return inner;
}

var close = outer2(); 
close(); 
function outer3(){ 
  function inner(){
    console.log(a);
  }
  let a =10; 
  return inner;
}
// console.log(outer3());
var close = outer3();
close(); 

function outer4(b){ 
  function inner(){
    console.log(a, b);
  }
  let a =10; 
  return inner;
}

// Passing argument here 
var close = outer4("Hi Closures");
close(); 

function outest5(){
  var c = 12; 
  function outer(b){ 
    function inner(){
      console.log(a, b, c); 
    }
    let a =10; 
    return inner;
  }
  return outer;
}


var close = outest5()("Hi Closures"); 
close(); 
function outest6(){
  var c = 12; 
  function outer(b){ 
    function inner(){
      console.log(a, b, c); 
    }
    let a =10; 
    return inner;
  }
  return outer;
}

let  a =100;
// Passing argument here 
var close = outest6()("Hi Closures"); 
close();
function outest7(){
  var c = 12; 
  function outer(b){ 
    function inner(){
      console.log(a1, b, c);
    }
   
    return inner;
  }
  return outer;
}

let a1 =100;
// Passing argument here 
var close = outest7()("Hi Closures"); 
close(); 
function a3(){
  var x = 10;
  return function b(){
   console.log(x);
  }
}
var y = a3();
console.log(y);

// function outest8(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a2, b, c); 
//     }
 
//     return inner;
//   }
//   return outer;
// }


// var close = outest8()("Hi Closures"); 
// close();


//ouput 

// 10
// 10
// 10
// 10 Hi Closures
// 10 Hi Closures 12
// 10 Hi Closures 12
// 100 Hi Closures 12
// [Function: b]








