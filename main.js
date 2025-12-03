// let val = document;
// val = document.head; // <head>...</head>
// val = document.body; // <body>...</body>
// val = document.doctype; // <!DOCTYPE html>
// val = document.domain; // localhost
// val = document.URL; // full URL
// val = document.characterSet; // UTF-8
// val = document.contentType; // text/html

// val = document.forms; // HTMLCollection of forms
// val = document.forms[0]; // first form
// val = document.forms[0].id; // id of first form
// val = document.forms[0].method; // method of first form
// val = document.forms[0].action; // action of first form
// val = document.links; // HTMLCollection of links
// val = document.links[0]; // first link
// val = document.links[0].className; // class of first link
// val = document.links[0].classList; // classList of first link

// val = document.scripts; // HTMLCollection of scripts
// val = document.scripts[0]; // first script
// val = document.scripts[0].src; // src of first script
// val = document.scripts[0].getAttribute("src"); // src of first script using getAttribute

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(function (script) {
//     console.log(script);
// });

// console.log(val);

//DOM Manipulation - Single Element Selectors 
// document.getElementById()

// console.log(document.getElementById("taskTitle")); // entire element
// console.log(document.getElementById("taskTitle").id); // id only
// console.log(document.getElementById("taskTitle").className); // class only

// // //change styling
// let taskTitle = document.getElementById("taskTitle");
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// console.log(taskTitle.style.padding);

// //change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color:yellow'>Task List</span>";

// console.log(taskTitle);

// document.querySelector()
// console.log(document.querySelector("#taskTitle")); // by id
// console.log(document.querySelector(".card-title")); // by class
// console.log(document.querySelector("h5")); // by tag
// console.log(document.querySelector("li").style.color = "orange"); // first li
// console.log(document.querySelector("li:nth-child(2)").style.color = "blue"); // first li in ul
// console.log(document.querySelector("li:last-child").style.color = "green"); // last li
// console.log(document.querySelector("li:nth-child(3)").style.color = "red"); // third li
// console.log(document.querySelector("li:nth-child(4)").textContent = "Hello World"); // fourth li

//Multi Element Selectors
// document.getElementsByClassName() //array list

// const items = document.getElementsByClassName("task-item");
// console.log(items[3].style.color = "black");
// console.log(items[0].textContent = "Hello World");
// console.log(items);

//document.getElementsByTagName()
// const lis = document.getElementsByTagName("li");
// console.log(lis[2].style.background = "pink");
// console.log(lis);

//document.querySelectorAll() // node list
// const listItems = document.querySelectorAll("li.task-item");
// listItems.forEach(function(li){
//     console.log(li.style.background = "#ccc");
// }
// );

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");
// liOdd.forEach(function(li){
//     li.style.background = "#ccc";
// });
// liEven.forEach(function(li){
//     li.style.background = "#f52";
// });

//DOM Traversing
// const list = document.querySelector("ul.task-list");
// const listItems = document.querySelectorAll("li.task-item");

// let val;

// val = list;

//Get child nodes
// val = list.childNodes; //node list including spaces and line breaks
// val = list.children; // HTMLCollection
// val = list.children[1]; // second li

// val = list.children[1].textContent = "Hello World";
// val = list.firstChild; // first node
// val = list.firstElementChild; // first element
// val = list.lastChild; // last node
// val = list.lastElementChild; // last element

//Parent node
// val = listItems;

// val = listItems[0].parentNode;
// val = listItems[0].parentElement;
// val = listItems[0].parentElement.parentElement;


//Sibling
// val = listItems[0].nextSibling; // next node
// val = listItems[0].nextElementSibling; // next element
// val = listItems[2].previousSibling; // previous node
// val = listItems[2].previousElementSibling; // previous element

// console.log(val);

//creating elements

// const li = document.createElement("li");

//add class
// li.className = "task-item";

//add id
// li.id = "new-task";

//add attribute
// li.setAttribute("title", "New Task");

//create text node and append
// const list = document.querySelector("ul.task-list");
// li.appendChild(document.createTextNode("New Task Item"));
// list.appendChild(li);

//add an html icon
// const link = document.createElement("a");
// link.innerHTML = '<i class="fas fa-times"></i>';

// console.log(list);


//removing and replacing elements

// const newHeading = document.createElement("h2");
// newHeading.id = "taskTitle";
// console.log(newHeading);

// newHeading.appendChild(document.createTextNode("Task Form"));

//get the old heading
// const oldHeading = document.getElementById("form-title");
//parent
// const cardAction = document.querySelector(".card-action");
//replace
// cardAction.replaceChild(newHeading, oldHeading);

//remove element
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul.task-list");

// lis[0].remove();

//remove child element
// list.removeChild(lis[3]);

// console.log(list);

//event listeners and the event object

// anonymous function
// document.querySelector("#clearTasksLink").addEventListener("click", function(){
//     console.log("Button Clicked");
// });

//named function
// document.querySelector("#clearTasksLink").addEventListener("click", runEvent);
// function runEvent(e){
    // console.log(e);
    // let val;
    // val = e;

    //target element
    // val = e.target;
    // e.target.innerText = "Clicked";
    // val = e.target.innerText;

    //type of event
    // val = e.type;
    // val = e.timeStamp;
    // val = e.clientY; //y coordinate
    // val = e.clientX; //x coordinate
    // val = e.offsetY; //y coordinate relative to element
    // val = e.offsetX; //x coordinate relative to element

    // prevent default behavior
    // e.preventDefault(); // prevent default behavior of link
//     console.log(val);
// }

//mouse events
// const clearBtn = document.querySelector(".form-container");

// const card = document.querySelector(".form-label");

// const title = document.querySelector("#taskTitle");

// clearBtn.addEventListener("click", runEvent);
// clearBtn.addEventListener("dblclick", runEvent);
// clearBtn.addEventListener("mousedown", runEvent);
// clearBtn.addEventListener("mouseup", runEvent);
// clearBtn.addEventListener("mouseenter", runEvent);
// clearBtn.addEventListener("mouseleave", runEvent);
// clearBtn.addEventListener("mousemove", runEvent);

// card.addEventListener("mouseover", runEvent);
// card.addEventListener("mouseout", runEvent);
// card.addEventListener("mousemove", runEvent);


// title.addEventListener("mousemove", runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 70)`;
//     e.preventDefault();
// }

//keyboard and input events
// const form = document.querySelector(".form-group");
// const taskInput = document.querySelector(".form-textarea");
// const title = document.querySelector(".form-textarea");

//form event
// form.addEventListener("submit", runEvent);
// taskInput.value = "";
// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
    // console.log(taskInput.value);
    // title.textContent = taskInput.value;
//     e.preventDefault();
// }

//Event Bubbling and Delegation

//Event Bubbling

// document.querySelector(".form-title").addEventListener("click", function(){
//     console.log("form-title");
// });

// document.querySelector(".feedback-form").addEventListener("click", function(){
//     console.log("feedback-form");
// });

// document.querySelector(".form-label").addEventListener("click", function()
// {
//     console.log("form-label");
// });

//Event Delegation
//without delegation

// const delItems = document.querySelector(".remove-icon");
// delItems.addEventListener("click", removeElement);

// //body
// document.body.addEventListener("click", removeElement);

// function removeElement(e){
    // console.log(e.target);
//    if(e.target.parentElement.classList.contains("task-item")){
//      e.target.parentElement.parentElement.remove();
//    }
    
// }

//Local storage and Session storage
// localStorage.setItem('Name', 'Sujan'); //local storage
// sessionStorage.setItem('Name','Mani'); //session storage

// const name = localStorage.getItem("Name"); //getting specific item
// console.log(name);

// localStorage.removeItem('Key','Value'); //remove item

// document.getElementById('taskForm').addEventListener('submit', addToLocal);

// function addToLocal(e){
    
//     const Task = document.getElementById("name").value;
//     let Tasks;
//     if(localStorage.getItem("Tasks") === null){
//         Tasks = [];
//     }else{
//         Tasks = JSON.parse(localStorage.getItem("Tasks"));
//     }
//     Tasks.push(Task);
//     localStorage.setItem("Tasks", JSON.stringify(Tasks));
//     alert("Task Saved!");
//     e.preventDefault();
// }
   
//Factory functions - will always return an object
// function createCircle(name, radius){
//     return{
//         name: name,
//         radius: radius,
//         draw: function(name, radius){
//             console.log(`The radius to draw the circle is ${this.radius} and the name of that circle is ${this.name}`);
//         }

//     };
// }

// const circle1 = createCircle("earth", 12000);
// console.log(circle1.name);

// circle1.draw();

//Constructor functions
// function createCircle(radius, name){
//     (this.radius = radius),
//     (this.name = name),
//     (this.draw = function(){
//         console.log(`The radius of the circle is ${radius} and the name is ${name}`);
//     });
// }

// const circle1 = new createCircle(12000, "earth");
// circle1.draw();

//understanding 'this' keyword

//this inside object -> object

// const person = {
//     firstName : "Sujan",
//     age : 25,
//     getBirthDay : function(){
//         2020 - this.age;
//     },
//     hobbies : ["eat", "sleep", "cook", "swim"], 
//     getHobbies : function(){
//         this.hobbies.forEach(function (hobby){
//             console.log(this.firstName, hobby);
//         }, this);
//     },
// };

// person.getHobbies();

//Constructor function

// function Person(firstName){
//     this.firstName = firstName;
//     console.log(this);
// }
// const p = new Person("Sujan");

//Constructor.prototype

// function Person(firstName, lastName, age) {
//     (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.age = age);
    // getBirthYear = function(){
    //     return(2020 - this.age);
    // }
// }

// Person.prototype.getBirthYear = function(){
//     return(2020 - this.age);
// };

// Person.prototype.fullName = function(){
//     return `${this.firstName}${this.lastName}`;
// };

// Person.prototype.changeLastName = function(newLastName){
//     return(this.lastName = newLastName);
// };

// const person1 = new Person("Sujan", " Gowda", 23);
// const person2 = new Person("Sharath", " Gowda", 25);
// console.log(person1.changeLastName("RoXD"));

//Prototypal Inheretence

// function Person(firstName, lastName){
//     this.firstName = firstName,
//     this.lastName = lastName
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName}${this.lastName}`;
// };

// const P1 = new Person("Sujan", " RoXD");
// console.log(P1);

// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

//to access prototype method
// Customer.prototype = Object.create(Person.prototype);

//to return constructor
// Customer.prototype.constructor = Customer;

// const c1 = new Customer("Suj", "an", 7760430885, "Standard");
// console.log(c1.getFullName());

//Sub classes

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName(){
//         return `${this.firstName}${this.lastName}`;
//     }
// }
// const p1 = new Person("Suj", "an");
// console.log(p1);

// class Customer extends Person{
//     constructor(firstName, lastName, phone, membership){
//         super(firstName, lastName)
//         this.phone = phone;
//         this.membership = membership;
//     }

//     static addNum(a, b){
//         return a + b ;
//     }
// }
// const c1 = new Customer("Suj", "an", 7760430885, "Standard");
// console.log(c1);