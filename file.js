// ----- Arithmetic Operators ------
let a = 30;
let b = 20;
let add=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let rem=a%b;
console.log("Arithmetic Operators:");
console.log(add,sub, mul, div, rem);


//Relational Operators
let c = 30;
let d = 20;
let les=(c<d);
let lesEql=(c<=d);
let grt=(c>d);
let grtEql=(c>=d);
let notEql=(c!=d);
console.log("Relational Operators:");
console.log(les,lesEql,grt,grtEql,notEql);

//Logical Operators
let e = 30;
let f = 20;
let n=e&&f;
let r=e||f;
let nt=e|f;
console.log("Logical Operators:");
console.log(n,r,nt);

//Increment/Decrement Operator
let g = 30;
let h = 20;
let pls=g++;
let pl=++h;
let plus=h+2;
let minus=g--;
let mins=--h;
let mis=h-2;
console.log("Increment/Decrement Operators:");
console.log("1.Increment Operators:");
console.log(pls,pl,plus);
console.log("2.Decrement Operators:");
console.log(minus,mins,mis);

//Bitwise Operators
let i = 30;
let j = 20;
let and=(i&j);
let or=(i|j);
let xr=(i^j);
let lfshft=(i<<j);
let rtshft=(i>>j);
let not= (~j);
console.log("Bitwise Operators:");
console.log(and,or,xr,lfshft,rtshft,not);

//Special Operator
let k = 10;
let l = "JS";
console.log("Special Operators:");
console.log(typeof(k),typeof(l));

//Conditional Operator
let age = 25;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log("Conditional Operators:");
console.log(result);