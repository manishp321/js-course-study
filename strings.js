// strings

var city = 'Kathmandu';
// for knowing the type of the string we can use typeof function at console.log
console.log(typeof city);
//  for knowing the length of the string which is inputed we use .length after the variable
console.log(city.length);
// we can also change the case of the data stored like in the example and we need to use empty braces after
console.log(city.toUpperCase());
console.log(city.toLowerCase());
// substring 
console.log(city.substring(0,3));

// for combining two stored strings just add both like in example
var a= 'man';
var b= 'ish';
console.log(a+b);
// if we want space between both use empty qotation after +
console.log(a+ ' ' + b);
// also there is 2nd way of doing so using backtics and dollar sign like
console.log (`${a}${b}`);