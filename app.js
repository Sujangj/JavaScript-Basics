//alert("Dangerous");

// console.log("Hello world");
// console.log([1,2,3]);
// console.log({a:1, b:2});
// var greeting = "Hello";
// console.log(greeting);

//variables
//var,let and const

// var $name = "abc"; //Dollr sign
// var firstName = "pqr"; //camel case
// var first_name = "xyz"; //underscore case
// var FirstName = "lmn"; //pascal case
// console.log(firstName);

//let
// let firstName = "abc";
// console.log(firstName);

//const - we cannot reassign values to const variables
// const person ={
//     name: "xyz"
// }
// person.name = "abc";
// console.log(person.name);

//arrays
// const numbers = [1,2,3,4];
// numbers.push(5);
// console.log(numbers);

//data types
//primitives
//string,number,boolean,undefined,null

//null
// const name = null; //stores empty value
// console.log(typeof name);

// //undefined
// let a; //variable declared but not assigned any value
// console.log(typeof a);

// //reference data types
// //arrays,objects,functions

// //objects
// const person = {
//     name: "xyz",
//     age: 14
// };
// console.log(typeof person);

//Type conversion
//Number to string conversion
//  let val;

// val = String("777"); //number to string
// val =String(true); //boolean to string
// val = String({name: "abc", age: 13}); //object to string
// val = String([1,2,3,4]); //array to string

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//toString() method
// val = (777).toString();

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//String to number conversion

// val = Number("777");
// val = Number(true);
// val = Number({name: "abc", age: 13});

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(1)); //toFixed() method is used to convert a number into string with fixed number of decimals

//parseInt() and parseFloat()
//val = parseInt("100.30"); //string to integer
// val = parseFloat("100.30"); //string to float

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

//type coehrcion
// const val1 = 5;
// const val2 = "6";
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

//string properties and methods


// const firstName = "Raja";
// const lastName = "Ram";
// const age = 23;

// let val;

// val = firstName.length; //length property
// val = firstName.concat("", lastName);
// val = firstName.toUpperCase(); //toUpperCase() method
// val = firstName.toLowerCase(); //toLowerCase() method
// val = firstName[0]; //indexing
// val = firstName.indexOf("a"); //indexOf() method
// val = firstName.lastIndexOf("a"); //lastIndexOf() method
// val = firstName.charAt(2); //charAt() method
// val = firstName.substring(0,3); //substring() method
// val = firstName.slice(0,3); //slice() method
// val = firstName.replace("Raja", "King"); //replace() method 
// val = firstName.includes("aj"); //includes() method

// console.log(val);
// console.log(typeof val);

//Numbers and Math object

// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;


//Math object
// val = Math.PI;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-10);
// val = Math.pow(2,3);
// val = Math.min(2,33,4,1,-5,6);
// val = Math.max(2,33,4,1,-5,6);
// val = Math.random(); //generates random number between 0 and 1
// val = Math.floor(Math.random() * 20 + 1); //generates random number between 1 and 20

// console.log(val);


//Arrays

// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Mango'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// let val;

// val = numbers.length; //length property
// val = Array.isArray(numbers); //isArray() method
// val = numbers[3]; //indexing
// numbers[2] = 100; //reassigning value
// val = numbers.indexOf(36); //indexOf() method
// mutating arrays
// numbers.push(250); //push() method
// numbers.unshift(120); //unshift() method
// numbers.pop(); //pop() method
// numbers.shift(); //shift() method
// numbers.splice(1,3); //splice() method
// numbers.reverse(); //reverse() method
// val = numbers.concat(numbers2); //concat() method
// val = fruit.sort(); //sort() method
// val = numbers.sort(); //sort() method
// val = numbers.sort(function(x,y){
//     return x - y}); //sort() method for ascending order
// val = numbers.sort(function(x,y){
//     return y - x}); //sort() method for descending order

// console.log(numbers);
// console.log(val);

//Template literals

// without using template literals, ES5 - we can render HTML content using JS
// const name = "Hoysala";
// const age = 30;
// const job = "Developer";
// const city = "Bengaluru";

// let html;

// html = 
//       '<ul><li>Name: ' + name + 
//       '</li><li>Age: ' + age + 
//       '</li><li>Job: ' + job +
//       '</li><li>City: ' + city + '</li></ul>';

//  document.body.innerHTML = html;

// //using template literals, ES6

// function hello(){
//     return "Hello Everyone";
// }
//     html = `<ul><li>Name: ${name}</li>
//             <li>Age: ${age}</li>
//             <li>Job: ${job}</li>
//             <li>City: ${city}</li>
//             <li>${hello()}</li></ul>`;

// document.body.innerHTML = html;

//object literals

// const person = {
//     firstName: "Raja",
//     age: 23,
//     email: "raja123@gmail.com",
//     hobbies: ['music', 'sports'],
//     address: {
//         city: "Bengaluru",
//         state: "Karnataka"
//     },
//     getBirthYear: function(){
//         return 2024 - this.age;
//     }
// }
// let val;
// val = person;

// console.log(person.hobbies[1]);
// console.log(person.getBirthYear());
// console.log(person.address.city);

//Arrays of objects

// const people = [
//     {name: "Raja", age: 23},
//     {name: "Ram", age: 24},
//     {name: "Ravi", age: 22}
// ];

// for(let i=0; i<people.length; i++){
//     console.log(people[2].age);
// }

//contionals and comparison operators

// const id = 101;

// equal to
// if(id == 100){
//        console.log("Correct");
// }else{
//     console.log("Incorrect");
// }

//  not equal to
// if(id != 101){
//     console.log("Correct");
// }else{
//     console.log("Incorrect");
// }

//  equal to value and type
// if(id === 101){
//     console.log("Correct");
// }else{
//     console.log("Incorrect");
// }

//else if
// const color = "white";
//  if(color == "red"){
//     console.log("Color is red");
//  }else if(color == "blue"){
//     console.log("Color is blue");
//     }else{
//     console.log("some other color");
// }

// logical operators
// const age = 25; //logical AND &&
// if(age > 0 && age < 12)
// {
//     console.log("Child");
// }else if(age >=13 && age <=19){
//     console.log("Teenager");
// }else{
//     console.log("Adult");
// }

// const age = 36; //logical OR ||
// if(age < 16 || age > 65)
// {
//     console.log("Not eligible to work");
// }else{
//     console.log("Eligible to work");
// }

//ternary operator
// const id = 101;
// console.log(id === 101 ? "Correct" : "Incorrect");

//loops
// for loop
// for(let i=0; i<5; i++){
//     console.log("Hello " + i);
// }

// while loop
// let i = 0;
// while(i < 10){
//     console.log("Hi " + i);
//     i++;
// }

// do while loop
// let i = 10;
// do{
//     i++;
//     console.log(i);
// }while(i < 10);

//looping through arrays
// const cars = ['BMW', 'Audi', 'Mercedes', 'Ford'];
// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }

//for in loop
// const cars = { firstName: 'BMW', model: 'X5', year: 2020};
// for(x in cars){
//     console.log(cars[x]);
// }

//function declaration and expression

// function greet(Name = "Sujan"){
//     return `Hello ${Name}`;
// }
// console.log(greet("Chirag"));

//function expression
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(5, 10));

//immediately invoked function expression - IIFE
// (function(name){
//     console.log(`Hello ${name}`);
//     })("Mani");

//function inside object
// const person = {
//     firstName: "Raja",
//     lastName: "Ram",
//     fullName: function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// console.log(person.fullName());

// const person = {
//     name: "Sujan",
//     age: function(){
//         return 2024 - 1990;
//     }
// }
// console.log(person.age());

//switch statements

// const dayOfWeek = new Date().getDay();
// let day;

// switch(dayOfWeek){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }

//Global and local scope

// const x = 101;  //global scope - accessible everywhere

// function test(){
//     const y = 100; //local scope - accessible only within this function and it has higher precedence than global scope
//     console.log(y);
// }
// test();
// function anotherTest(){
//     const z = 200; //local scope
//     console.log(x + z);
// }
// test();
// anotherTest();
// console.log(y); //error - y is not defined

//above concept is applicable to for loops and if blocks as well

// for(let i=0; i<5; i++){
    
// }
// console.log(i); //error - i is not defined

// if(true){
//     const a = 10;
// }
// console.log(a); //error - a is not defined

//Let V/s Var

// function testVar(){
//     for(var i=0; i<5; i++){
//         if(true){
//         }
//         console.log("Function scope"); //prints 0 to 4
//     }
//     console.log(i); //prints 5 as var is function scoped      
// }
// testVar();

// function testLet(){
//     for(let j=0; j<5; j++){
//         if(true){   
//         console.log("Block scope"); //prints "Block scope"
//         }
        
//     }console.log(j); //error - j is not defined as let is block scoped
// }
// testLet();

// var age = 25; //window attribute appends to global object
// let age = 30; //window attribute does not append to local object

// console.log(age);

