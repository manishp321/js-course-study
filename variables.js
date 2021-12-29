// here i am learning about the variables and types which i can input at js 
/*rules for naming a variables
_______________________________
-VARIABLE NAMES-
1) cannot contain spaces.
2) must begain with letter underscore(_) or a dollar($) sign
3) can only contain letters, numbers, underscore and dollar sign
4) are case sensative
5) cannot contain reserved keywords
*/

var firstName = 'Manish ';
var age = 25 ;
var isMale = true ;
var dob = new Date (1999,05,11);
var empty = undefined;
// use console.log to display the data at console
console.log(firstName);
console.log(age);
console.log(isMale);
console.log(dob);

console.log(empty);
// use typeof function to display the type of data that are input on the variables
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMale);
console.log(typeof dob);

console.log(typeof empty);


// var person ={}; using curly braces we can store the data like above with in one var for example 
var person ={
    firstName: 'Manish',
    age:25,
    isMale:true,
    dob: new Date (1999,05,11)
};
console.log(person.isMale)
