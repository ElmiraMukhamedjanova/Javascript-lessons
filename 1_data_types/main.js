//  -----------------------------------    Simple type data    ----------------------------------- 
// Variables
var myNumber = 23,
	myString = 'String',
	myBool = true,
	myNull = null,
	myUndef = undefined;

console.log(myNumber);

// Function typeof - show type variable
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);


//  -----------------------------------   Object type data    ----------------------------------- 
// Function .toUpperCase
console.log("Sorax".toUpperCase());
console.log(false.toString());
console.log([1,2,3].toString());

var obj = {name: 'sorax'},
	array = [1,2,3],
	regexp = /w+/g,
	func = function(){}

console.log(' ');
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof fun);

console.log(' ');

// Mutable data types - Обьекты = изменяемые данные
obj.name = 'passive star';
array[1] = 124;

console.log(obj);
console.log(array);

// Unmutable data types - Строки = неизменяемые данные
myString.toUpperCase();
console.log(myString);

console.log(' ');





  