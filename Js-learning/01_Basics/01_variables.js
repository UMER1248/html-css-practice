/* There are many ways to name a variable but common is camelCase(readibility).

others are PascalCase, snake_case, kebab-case, UPPER_SNAKE_CASE. */

const accountId = 4425;
console.log("accountId");

console.log("Account Id is", accountId);


console.log("Variable are containers to store any data, we have many variables like let, var and const.");

/* Keywords and ways to declare Variables:

1: Const
2: let
3: var (default)

*/

const phoneNO = 312676573;    

// phoneNO = 123456;        This re-assginment causes error

console.log(phoneNO);    // See, It'll give error, because we are re-assigning value to const. Const can neither be re-declared nor re-assigned.



let accountEmail = "myEmail@google.com";

// let accountEmail;   // cannot be re-declared.

accountEmail = "yourEmail@sharp.com";            // Re-assigned

console.log(accountEmail);        //  does not cause any error, because let can be re-assigned but not re-declarable.


var password = "myPassword";
var password = "yourPassword";     // re-declared and re-assigned

accountCity = "Islamabad";          // By default, variable is var if no keyword is used.



// <<<============    Prefer not to use var because of its block or functional scope. =====>>


// <<===============  Practice: ===============>>>>

const rollNO = 223;

// rollNO = 242;              const cannot be re-declared and re-assigned.

console.log(rollNO);


let myCity = "islamabad";
myCity = "karachi.";

var country = "pakistan";
country = "Netherlands";

console.log(myCity);

console.log("Let and Var are re-assgined.");
console.log("City: ", myCity, "Country: ", country);