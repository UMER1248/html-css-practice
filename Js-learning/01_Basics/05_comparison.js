/* 

== comparison operator is a loosely equality with some special rules like:

null == undefined ------> true (null only equals undefined.)

It does not convert null to 0 Here.

In JavaScript:

== does not coerce null to a number. but is null is loosely equal to undefined.

*/

                                  //                                                   |      
console.log(null > 0);     // null --> 0;          0 > 0 --> false.                    |
                                  //                                                   |   
console.log(null < 0);     // null --> 0;     ----->         0 < 0 ---> false.         |
                                  //                                                   |   null is converted to number 0 for comparison.
console.log(null <= 0);    // null --> 0;     ----->         0 <= 0 ---> true.         |
                                  //                                                   |
console.log(null >= 0);    // null --> 0;     ----->         0 >= 0 ---> true.         |
                                  //                                                   |
                                //                                                     | 
                                  //                                                   |



console.log(null == 0);    // null is not converted to a number-- null only loosely equals undefined. So null == 0 is false.     

/* 
== loose equality. (loose and undefined are equal to each other.)

=== strict check/equality. (datatype and value must match)

*/


console.log("2" == 2);               // loose check, diff datatypes, coersion is done.

console.log("2" === 2);              // false---> strict check--type and value both checked, no co-ersion.



console.log("Undefined checking:");

console.log(undefined == 0);              // undefined loosely equals to only  null, undefined is not converted to 0 here.

console.log(undefined <= 0);              // undefined is converted to NaN, bcz undefined means no sensible value.

console.log(undefined >= 0);

console.log(undefined == null);           // undefined loosely equal to only null, undefined is not converted to 0 here.

console.log(undefined === null);          // checks types, un-matched. so false.
