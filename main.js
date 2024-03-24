
// <<<<<<<< Nested Function >>>>>>>>>>

// let a = 10 
// function outer () {
//     let b = 20 
//     function inner () {
//         let c = 30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

// >>>>>> Closure <<<<<<<

// function outer() {
//     let counter = 0
//     function inner () {
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer() // 1
// outer() // 1

// function outer() {
//     let counter = 0
//     function inner () {
//         counter++
//         console.log(counter)
//     }
//     return inner;
// }
// let fun = outer();
// fun(); // 1
// fun(); // 2
        
//>>>>>>>> Function currying <<<<<<<<<<
        
// fun(a,b,c) ===>> fun(a)(b)(c);

// function sum(a,b,c) {
//     return a+b+c
// }

// console.log(sum(5,6,7));

// function  curry(fn){
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return fn(a ,b ,c)
//             }
//         }
//     }
// }
// const curryingsum = curry(sum)         ]=====>>
// console.log(curryingsum(5)(6)(7));     ]=====>>        console.log( curry(sum)(a)(b)(c) );

// >>>>> B <<<<<<
// function curry(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(curry(1)(2)(3));

// >>>>>>>>>> This <<<<<<<<<<<<<<<<

// >>>> implicit binding <<<<
// const person = {
//     name: 'Amr',
//     sayMyName: function (){
//         console.log(`my name is ${this.name}`);
//     }
// }
// person.sayMyName();
  
// >>>> explicit binding <<<<
// const person = {
//     name: 'Amr'
// }

// function sayMyName() {
//     console.log(`my name is ${this.name}`)
// }
// sayMyName.call(person)
// call  -->> تعطى قيمه ل this مع الاستدعاء الفورى لل function  + apply( نفس ال call ولكن تختلف فى طريقه تمرير البيانات بتتمرر ك array); + bind(تحدد الاشاره ل this دون استدعاء الداله);

// >>>> New binding <<<<
// function person(name) {
//     this.name = name;
// }

// const p1 = new person(" Amr");
// const p2 = new person("Ahmed");

// console.log(p1.name,"\n",p2.name);
// New --> بتعمل obj جديد و بتنسبه ل this    -------   new  ->  this {} && typeof(p1) === "object"

// >>>> Default binding <<<<

// // عدم تحديد قيمه this لو متحددتش بال call , apply , bind --> 
// // اذا لم يتم تحديدها فان this تشير ال window
// // فى حاله use strict --> this === undefined
// // اذا تم تحديد ال glopalthis فان this تساوى قيمته
// // فى حاله ال nested function فان this فى nested function => window .......

// globalThis.name = "my name";

// function sayMyName() {
//     console.log(`my name is ${this.name}`)
// }
// sayMyName();

// ORDER OF PRECEDENCE 
// nem binding --> explicit binding --> implicite binding --> Default binding

// >>>>>>>> PROTOTYPE <<<<<<<<<<<<

// مجموعه من المميزات التى يمكن استخدامها مع كائن معين وتسمح بأضافه مميزات اخرى للكائن دون الحاجه لتكرار الميزه مع كل كائن 

// function person( fname , lname ) {
//     this.firstname = fname;
//     this.lastname = lname;
// }

// const person1 = new person( 'John', 'wick' );
// const person2 = new person( 'rick', 'grymes' );

// person1.getFullName = function() {
//     return this.firstname + ' ' + this.lastname ;
// }

// console.log( person1.getFullName() ); // john wick
// console.log( person2.getFullName() ); // error

// .........................................................

// function person( fname , lname ) {
//     this.firstname = fname;
//     this.lastname = lname;
// }

// const person1 = new person( 'John', 'wick' );
// const person2 = new person( 'rick', 'grymes' );

// person.prototype.getFullName = function() {
    // return this.firstname + ' ' + this.lastname ;
// }

// console.log( person1.getFullName() ); // john wick
// console.log( person2.getFullName() ); // rick grymes

// inheritance === الوراثه

// function person( fname , lname ) {
//     this.firstname = fname;
//     this.lastname = lname;
// }
// person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname ;
// }
// function superHero( fname , lname )  {
//     person.call(this, fname , lname );
//     this.isSuperHero = true
// }
// superHero.prototype.fightCrime = function (){
//     console.log('Fighting crime')
// }
// superHero.prototype = Object.create(person.prototype)

// superHero.prototype.constructor = superHero;

// const batman = new superHero('Bruce', 'wayne');
// console.log(batman);
// console.log(batman.getFullName());
// console.log(batman.fightCrime()); // error bc (object.create(empty object)) تفقد الوصول للوظايف القديمه(fightcrime());




// .................................................................................................






// function person(fname, lname) {
//     this.firstname = fname;
//     this.lastname = lname;
// }

// person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname;
// }

// function superHero(fname, lname) {
//     person.call(this, fname, lname);
//     this.isSuperHero = true;
// }

// superHero.prototype = Object.create(person.prototype);
// superHero.prototype.constructor = superHero;

// superHero.prototype.fightCrime = function() {
//     console.log('Fighting crime');
// }

// const batman = new superHero('Bruce', 'Wayne');
// console.log(batman.getFullName());
// console.log(batman.fightCrime());
// console.log(batman);

// >>>>>>> Class <<<<<<<

// class person {
//     constructor(fname, lname) {
//         this.firstname = fname;
//         this.lastname = lname;
//     }
//     getFullName() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// const classP1 = new person( "hamdy" , "H" );
// console.log(classP1);
// console.log(classP1.getFullName());

// class superHero extends person  {   // extends => to inherited class person
//     constructor(fname, lname) {
//         super(fname, lname); // super() in constructor => inherited constructor from person 
//                             // super method() => inherited method from person
//         this.isSuperHero = true;
//     }
//     fightCrime() {
//         console.log('Fighting crime');
//     }
// }
// const batman = new superHero("amr" , "hussein");
// console.log(batman);
// console.log(batman.getFullName());
// console.log(batman.fightCrime());
 
// >>>>>>>>> Iteration <<<<<<<<<<

// Normal way
// const str = "string";

// for(let i = 0 ; i < str.length ; i ++ ){
//     console.log(str[i]);
// }
// difficulty => in accessing the element + to manage iteration on the data for various types of data structures;

// for of way

// const str = "string";

// for(const char of str){
//     console.log(char);
// }

// for of is result of iterable & iterator protocol

// iterable => object has symbol.iterator === implement iterator method      _*-->    (built-in iterable ==>> string , array , set , map )

// let str = "string" ;
// let arr = [ 1 , 2  , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10] ;
// let obj1 = {} ;
// let num = 525 ; 
// console.log(typeof(str[Symbol.iterator]));  // function
// console.log(typeof(arr[Symbol.iterator]));  // function
// console.log(typeof(obj1[Symbol.iterator])); // undefined
// console.log(typeof(num[Symbol.iterator]));  // undefined

// iterator => object with interface designed for iteration --> all iterator has Next() that return a Result object--> has 2 properties { Value: (next.val) , done: (true , false) }

// const obj = {
//     [Symbol.iterator] : function() {
//         let index = 0;
//         const iterator ={
//             next : function() {
//                index++;
//                if(index === 1 ){
//                 return {value : "Hello" , done : false }
//                } else if (index === 2 ) {
//                 return { value : "World" , done : false }
//                }
//                return {value : undefined , done : true }
//             }
//         }
//         return iterator
//         {
            
//         }
//     }
// }

// // now obj is iterable 

// for(const word of obj ){
//     console.log(word);
// }
 

// >>>>>>> Generators <<<<<<<<<

// function normalFunction () {
//     console.log("Hello");
//     console.log("World");
// }

// normalFunction();

// function* generatorFunction() {
//     yield 'Hello';
//     yield 'World';
// }

// const generatorObject = generatorFunction();

// console.log(generatorObject);

// for(const word of generatorObject ){
//     console.log(word);
// }