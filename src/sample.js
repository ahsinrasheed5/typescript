console.log("Hello World From (sample.ts)");
// var a = 23;
// var b = "string";
// b = '32'
// console.log(b)
// let mytype = {name: "ali", id :1};
// mytype = {id:2 , name:"Toni"};
// console.log(mytype);
// var x : {id : number, [x:string]: any };
// var y = {id : 1, fullname: "Ali"};
//   x= y ;
// console.log(x);
// var x : {foo: number};
// x= {foo: 1, baz: 2} //Error , excess or misspelled property 'baz'
// var y : {foo: number, bar ? : number };
// y = {foo: 1, baz: 2 }; //Error , excess or misspelled property 'baz'
// var a: { foo: number};
// var a1= {foo:1 , baz: 2};
// a = a1; //No Error
// var z: { foo: number , bar?: number};
// var z1= {foo: 1 , baz: 2};
// z = z1;//No Error
// console.log(a);
// console.log(z);
// let array1 : number[]= [5,6,7];
// console.log(array1[1]);
// let array2: Array<number> = [1,2,3];
// let array3: number[]= [];
// let array4 : number[]= new number[2]; //Error
// let array5: number[]= [];
// array5.push(1234);
// console.log(array5);
var mytype = { name: "ali", id: 1 };
mytype = { id: 2, name: 'Toni' };
mytype = { id: 3, name: "Mike", gender: false };
mytype = "Even a string can be assigned";
mytype = function () {
    console.log("Even a function Can be assigned");
};
console.log(mytype);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
