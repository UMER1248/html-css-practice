// <<<================== DATATYPE CONVERSION =======================>>>>

// In JavaScript, conversion is changing the type  of value from one type to another.

/*
It has two types:

Implicit Conversion(Type Coersion).---- Js does it automatically.

Explicit conversion.(programmar does it.)       */



// It is done bcz JavaScript is loosely typed, so it tries to “make it work” when you mix types.


console.log("5" + 2);     // converts number to string to concatinate.

console.log(3 + "7");     // converts number to string. "37"

console.log(7 - "2");     // (5) converts string to number, bcz string can't be subtrated.

console.log("5" - 1);     // (4)-- converts to number, same reason.

console.log(2 + 2 + "2");  // 42-- goes from lft to ri8, 4+"2" = string

console.log("2" + 2 + 2);   // 222--- lft to ri8, 2+2=str + 2 = str

console.log(true + 1);     // 2-- coverted to number.

// Whenever you use booleans in math, JavaScript first converts them to numbers like 1 (true) or 0 (false), then does the calculation And datatype is also converted to number.

console.log(true - "abcd");           // 1 - "abcd" = NAN (number)

// "abcd" is not a valid number, js tries to make it number, but it doesn't make sense as number, so returns NAN.

// NAN-------- Means------ This failed to convert to Number.

console.log(typeof (true - "abcd")); // output NAN, but type is number.





// Conversion of non-empty string to Boolean is always truthy (1)..

// conversion of non-zero number is also truthy. zero value is always falsy with any sign.

console.log(Boolean("123"));             // true

console.log(Boolean ("0"));               // true

console.log(Boolean (" "));               // true

console.log(Boolean (343));               // true

console.log(Boolean (1));                 // true

console.log(Boolean({}));     // but empty and objects are truthy

console.log(Boolean([]));     // true
/*
 Math = implicit to number
 String + boolean = implicit to string
 Conditions = implicit to boolean       */

//  Falsy Values

console.log("Value is:",false);               //  false is false

console.log(Boolean (0));                      // zero and -zero falsy

console.log(Boolean(-0));                     // also false

console.log(Boolean (0n));        // bigInt zero is also falsy, same behavior as number---- n stands for bigInt

console.log(Boolean (1n));         // truthy just like non zero integers, example given below

console.log(Boolean (23));           // true

console.log("Empty String is: ",Boolean (""));           // "" is false

console.log("Null is also: ",Boolean (null));            // null to boolean is false

console.log("Undefine is:", Boolean (undefined));            // false, bcz it has no value inside.

console.log("NAN is: ", Boolean(NaN));                   //false, invalid number, so treated as empty.


/*
 Falsy: false, 0, -0, 0n, "", null, undefined, NaN
 Everything else: Truthy!                                               */


 console.log("Conversion to Numbers:");

 console.log(Number("1234"));

 console.log(Number(" "));      // empty, whitespace----> zero

 console.log(Number(""));         // empty string-------->> zero

 console.log(Number("123abc"));        // 123 with character -----> NaN

 console.log(Number(true));            // 1

 console.log(Number(false));           // 0

 console.log(Number(null));            //as null means---no value so, 0

 console.log(Number(undefined));        // NaN

