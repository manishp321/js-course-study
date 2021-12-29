// objects we can store all the datas onside one var tag which i used at variable.js for example
var person ={
    firstName: 'manish panthi',
    age:25,
    isMale:true,
    dob: new Date (1999,05,11).toJSON(),
    // we   need to use .toJSON for storing the date
    // we can also use nested objects inside object
    address:{
        city:'Oulu',
        country:'Finland'
    }
};
// we can access the data by 
console.log(person.firstName);
// for all the values only of person 
console.log(Object.values(person));
// but in case we want only keys just replace values with keys
console.log(Object.keys(person));
// we can also stringify the object by using
console.log(JSON.stringify(person));