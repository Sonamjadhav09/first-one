//var arr=[1,2,3,4,5,6,6,'string',true];
//console.log(arr);
//for(let i=0; i<5;i++);
// print value-
// for(let i in arr){
//      console.log(i);

//  }
//print index value-
// for(let i of arr){
//     console.log(i);

// }
//conditional opreator-
// let a=80;
// if(a>90){
//     console.log('A');
// }
// else if(a>=85){
//     console.log('B');

// }
// else if(a>70){
//     console.log('C');
// }
// else{
//     console.log('bye');
// }
//ternary opreator
let b=true;
b? console.log('true'): console.log('false');
// logical opreator
let a=80;
let c=20;
if(a>90 || c==20){
     console.log('A');
 }
 else if(a>=85){
   console.log('B');

}
 else if(a>70){
    console.log('C');
 }
 else{
     console.log('bye');
 }
 //functions
 // creation of function
//  function add(){
//     console.log('hello');
//  }
 //function calling
//  add();
//  add();
 // another way to create function (arrow function)
//  const add=() =>{
//     console.log('hehe');
    
//  }
//  add();
//  add();
 //parameterize function
 //function add(a,b,c){
    // 
    // console.log(a+b+c);
   // return 'hello';

 //}
 //let d=add();
 //console.log(d);
//  add(5,6,7);
//in arrow function
let add=(a,b) =>a+b;

console.log(add(5,6));



