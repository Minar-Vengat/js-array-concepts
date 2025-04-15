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

//!!Array.prototype.entries()
const frit = ["apple", "banana", "cherry"];
const iterator = frit.entries();
for (let entry of iterator) {
  console.log(entry);
}

//!!Array.prototype.every()
//All numbers are positive
const numbs = [10, 20, 30, 40];
const allPositive = numbs.every(num => num > 0);
console.log(allPositive);
//One number is negative
const numbes = [5, -2, 10, 8];
const alPositive = numbes.every(num => num > 0);
console.log(alPositive);
//String length check
const frt =["apple","orange","banana"];
const allLenghtAbove3 = frt.every(frt => frt.length >3);
console.log(allLenghtAbove3);

//!!Array.prototype.fill()
// Fill from index 1 to 3
const rr = [1, 2, 3, 4];
rr.fill(7,1,3);
console.log(rr);
//Create array using fill
const rey = new Array(5).fill(1);
console.log(rey)

//!!Array.prototype.filter()
// Filter even numbers
const nmbs = [1,2,3,4,5,6,7,8,9];
const even = nmbs.filter(num => num % 2 === 0);
console.log(even);
//Filter names longer than 4 letters
const namess = ["Ram", "Sita", "Lakshman", "Hanuman"];
const longNamess = namess.filter(name => name.length > 4);
console.log(longNamess);
//Filter positive numbers
const numbss = [-3, 0, 5, -1, 8, 2];
const positivee = numbss.filter(n => n > 0);
console.log(positivee);
//Filter objects (students who passed)
const students = [
  { name: "Arun", score: 45 },
  { name: "Divya", score: 75 },
  { name: "Kumar", score: 60 },
  { name: "Sneha", score: 30 }
];
const passed = students.filter(student => student.score >= 50);
console.log(passed);

//!!Array.prototype.find()
//Find first even number
const numberss = [1, 3, 5, 6, 8];
const firstEven = numberss.find(num => num % 2 === 0);
console.log(firstEven);
//Find student with marks > 80
const studentss = [
  { name: "Asha", marks: 75 },
  { name: "Rahul", marks: 88 },
  { name: "Deepa", marks: 95 }
];
const topper = students.find(stu => stu.marks > 80);
console.log(topper);
//No match case
const itemss = [1,2,3,5];
const rsslt =itemss.find(n => n >10);
console.log(rsslt);

//!!Array.prototype.findIndex()
//Find index of first number > 10
const numbrs = [4, 9, 12, 20];
const index = numbrs.findIndex(num => num > 10);
console.log(index);
//Find index of student who failed
const student = [
  { name: "Kavi", marks: 55 },
  { name: "Vijay", marks: 45 },
  { name: "Anu", marks: 70 }
];
const failIndex = student.findIndex(stu => stu.marks < 50);
console.log(failIndex);
// X No match found
const array = [5, 6, 7];
const re = array.findIndex(x => x < 0);
console.log(re);
//Find last even number
const nubs = [1, 3, 4, 7, 10, 13];
const lastEven = nubs.findLast(num => num % 2 === 0);
console.log(lastEven);
//Find last student who passed
const std = [
  { name: "Arun", marks: 30 },
  { name: "Divya", marks: 80 },
  { name: "Kavi", marks: 45 },
  { name: "Sneha", marks: 60 }
];
const lastPassed = std.findLast(stu => stu.marks >= 50);
console.log(lastPassed);
// X  No match
const arrey = [1, 3, 5];
const res = arr.findLast(x => x % 2 === 0);
console.log(res);

//!!Array.prototype.findLastIndex()
//Find last even number index
const numrs = [1, 3, 4, 7, 10, 13];
const indx = numrs.findLastIndex(num => num % 2 === 0);
console.log(index);
//Find last student who passed (score >= 50)
const stds = [
  { name: "Arun", marks: 30 },
  { name: "Divya", marks: 80 },
  { name: "Kavi", marks: 45 },
  { name: "Sneha", marks: 60 }
];
const lastPassedIndex = stds.findLastIndex(stu => stu.marks >= 50);
console.log(lastPassedIndex);
// X No match
const ar = [1, 3, 5];
const rs = ar.findLastIndex(x => x % 2 === 0);
console.log(rs);

//!!Array.prototype.flat()
//One level flatten (default)
const ary = [1, 2, [3, 4], 5];
const flatArr = ary.flat();
console.log(flatArr);
//Flatten two levels
const arys = [1, [2, [3, 4]], 5];
const flatArry = arys.flat(2);
console.log(flatArry);
//Infinite flattening
const arreys = [1, [2, [3, [4, [5]]]]];
const flatArreys = arreys.flat(Infinity);
console.log(flatArreys);

//!!Array.prototype.flatMap()
//Simple flatMap
const numss = [1,2,3,];
const resllt =numss.flatMap(n =>[n, n * 2]);
console.log(resllt);
// Remove empty values
const areys = ["hello", "", "world"];
const clean = areys.flatMap(word => word ? [word] : []);
console.log(clean);
//Split words
const sentences = ["hello world", "good day"];
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words);

//!!Array.prototype.forEach()
//Simple print
const fruitss = ["apple", "banana", "cherry"];
fruitss.forEach(fruit => {
  console.log(fruit);
});
//Using index
const numbess = [10, 20, 30];
numbess.forEach((num, i) => {
  console.log(`Index ${i}: ${num}`);
});
//Sum of all elements
const marks =[50,70,90];
let total = 0 ;
marks.forEach(mark =>{
  total += mark;
});
console.log("total:",total);
//!!Array.prototype.includes()
//Basic check
const frts = ["apple", "banana", "cherry"];
console.log(frts.includes("banana")); 
console.log(frts.includes("grapes")); 
//Case-sensitive check
const items = ["Pen", "Pencil"];
console.log(items.includes("pen"));   
console.log(items.includes("Pen"));  
//Starting from a specific index
const numbbs = [1, 2, 3, 2];
console.log(numbbs.includes(2));
console.log(numbbs.includes(2, 2));     
console.log(numbbs.includes(2, 3));
//Checking NaN
const arrr =[1,NaN,3];
console.log(arrr.includes(NaN));

//!!Array.prototype.indexOf()
// Basic use
const colors =["red","green","black"];
console.log(colors.indexOf("black"));
console.log(colors.indexOf("white"));
//From specific index
const numms =[1,2,3,4,2,5];
console.log(numms.indexOf(2));
console.log(numms.indexOf(2,2));
//indexOf() with strings
const wordss =["hi","hello","hi"];
console.log(wordss.indexOf("hi"));
//NaN problem
const aer =[NaN];
console.log(aer.indexOf(NaN));

//!!Array.prototype.join()
//Basic usage
const frut =["apple","banana","cherry"];
const resultss = frut.join();
console.log(resultss);
//Custom separator
const name = ["arun","bala","amar"];
console.log(name.join(" - "));
//No separator
const chars = ["M","I","M","O"];
console.log(chars.join(""));
//Numbers with slash
const date =[10,4,2025];
console.log(date.join("/"));
// Emojis fun 😄
const emojis = ["🔥", "💪", "🚀"];
console.log(emojis.join(""));  

//!!Array.prototype.keys()
// Basic usage
const arris = ["a", "b", "c"];
const iterators = arris.keys();
for (let key of iterators) {
  console.log(key);
}
//Convert to array
const arise =["x","y","z"];
const keysaraise =[...arise.keys()];
console.log(keysaraise);
//Use with map()
const arises = ["A","B","C"];
const newARR =[...arises.keys()].map(i => `index: ${i}`);
console.log(newARR);

//!!Array.prototype.lastIndexOf()
//Basic use
const fruts =["apple","banana","cherry","apple"];
console.log(fruts.lastIndexOf("banana")); 
console.log(fruts.lastIndexOf("grapes")); 
//Starting from a specific index
const numbees = [1, 2, 3, 2, 1];
console.log(numbees.lastIndexOf(2));      
console.log(numbees.lastIndexOf(2, 2)); 
//lastIndexOf() with NaN
const rise = [NaN, 1, 2, NaN];
console.log(rise.lastIndexOf(NaN)); 
