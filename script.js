                                         //Array() constructor
//Empty Array
 let a = new Array();
 console.log(a);
 //Array with Length Only
let b = new Array(5);
console.log(a);
//Array with Values
let c = new Array(1,2,3);
console.log(c);
//String Element
let d = new Array("5");
console.log(d);
                                   //!Static methods!
//!!array form!!
//!!!Array.from(arrayLike)!!!
//String → Array
let arr =Array.from("chat")
console.log(arr);
//Set → Array
let mySet = new Set([10, 20, 30]);
let arrs = Array.from(mySet);
console.log(arrs);
//Arguments → Array
function showArgs() {
    let args = Array.from(arguments);
    console.log(args);
}
showArgs("apple","orange");
//!!!Array.from(arrayLike, mapFn)!!!
//Double Each Value//
let numbers = [1,2,3];
let doubled = Array.from(numbers, x=> x* 2);
console.log(doubled);
// Convert string to char codes//
let charCodes = Array.from("MIMO" , ch => ch.charCodeAt(0));
console.log(charCodes);

//!!!Array.from(arrayLike, mapFn, thisArg)!!!
//Use custom this in map function//
let multiplier = {factor: 3};

let result = Array.from([1,2,3],function(x){
    return x * this . factor; 
},multiplier);
console.log(result);

//!!Array.fromAsync(arrayLike)!!
//Convert async iterable to array//
async function* generate() {
    yield 1;
    yield 2;
    yield 3;
  }
  const results = await Array.fromAsync(generate());
  console.log(results); // [1, 2, 3]

  //!!Array.fromAsync(arrayLike, mapFn)!!//
  //Async map function//
const number = [1,2,3];
const reslt = await Array.fromAsync(number, async (x) =>{
    return x * 2 ;
})
console.log(reslt);
//Add delay with async map//
function delay(ms){
    return new Promise(res => setTimeout(res,ms)); 
}
const rslt = await Array.fromAsync([1,2,3],async (x) =>{
    await delay(100);
    return x + 10
});
console.log(rslt);

//!!Array.fromAsync(arrayLike, mapFn, thisArg)//
//Custom this inside async mapFn//
const multipliers = {
    factor: 5
  };
  
  const rest = await Array.fromAsync([1, 2, 3], async function (x) {
    return x * this.factor;
  }, multipliers);
  
  console.log(rest);

//!!Array is array()//
let ae = [1,2,3];
console.log(Array.isArray(ae)); 
//Array created using
let are =new Array(5);
console.log(Array.isArray(are));

//!!array.of()
const arey =Array.of("minar");
console.log(arey);
                                   //Static properties
//!!array[symbol.species]
class MyArray extends Array {
    static get [Symbol.species]() {
      return Array; 
    }
  }
  const e = new MyArray(1, 2, 3);
  const f = a.map(x => x * 2);
  console.log(e); 
  console.log(f instanceof MyArray); 
  console.log(f instanceof Array); 
                                  //instance array methods
//!!Array.prototype.at()
//Positive index
const fruits = ["apple","banana","cherry","data"];
console.log(fruits.at(0));
console.log(fruits.at(2));
// Negative index
const fruit = ["apple", "banana", "cherry", "date"];
console.log(fruits.at(-1));
console.log(fruits.at(-2));

//!!Array.prototype.concat()
//concat() (no arguments)
const g = [1, 2, 3];
const rt = g.concat();
console.log(rt);
//concat(value1)
const n = [1,2,3];
const rst = n.concat(4);
console.log(rst);
//concat(value1, value2)
const m = [1,2];
const op = a.concat(3,4);
console.log(op);
//concat(array1)
const t =[1,2];
const y =[3,4];
const otp =t.concat(y);
console.log(otp);
//concat(array1, array2, value)
const q = [1];
const w = [2,3];
const r = [4,5];
const i = q.concat(w,r,6,7);
console.log(i);
//Nested arrays
const l = [1];
const k = [[2,3]];
const lk = l.concat(k);
console.log(lk);

//!!Array.prototype.copyWithin()
//Basic usage
const nm = [10,20,30,40,50];
nm.copyWithin(3,0,2);
console.log(nm);
// Overlap copy
const nms =[1,2,3,4,5];
nms.copyWithin(0,1);
console.log(nms);
//Use negative index
const nums =[100,200,300,400,500];
nums.copyWithin(-2,0,2);
console.log(nums);
//Only target given
const bn = [5,6,7,8,9];
bn.copyWithin(1);
console.log(bn);