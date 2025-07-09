"use strict"  // tells engine to treat code as newer version(Ecma6) of js.

// enables strict mode.

// use semi-colon in the end of every statement and start new statement on new line for better readibility.

// Avoid this kind of code

   console.log(3+
                         4
   );                          // it won't give any error but its not that much readable.


   console.log(3+3);          // much better.

  

   //<<<=========== Documentation for Js is Mdn and Ecma 262. ==========>>>>





   // <<<<<<<===================== DATA TYPES IN JS(Primitive) =======================>>>>

   let name = "Ravish Bibi";
   let nickName = "my Zargo";
   let sweetness = "Infinite"
   let lub = true;

   console.log(name);
   console.log(nickName);
   console.log(sweetness);
   console.log(lub);


   let sName = "Omer Farooq";             // string----- double qoutes enclosing recommended.

   let mobNO = 23432121;                // number(it has range---- 2 to power of 52)

   let study = true;                  // boolean

   let loggedIn = false;              // boolean


   /*
   number ------------ 2 to power of 52

   bigInt ------------- used for larger values like stock market etc.

   string ------------- stores character containing variables.

   boolean ------------  true or false, yes/no like user is loggedIn or not.

   null -------------     standAlone value---- (also dataType = object)--- empty value--can also be assigned as value(null) intentionally, like if weather is requested and there is some error then we can get null value instead of wrong temperature.

   null -------  absence of object/value.

   undefined ----------   value not assigned yet.

   symbol ------------ uniqueness                                           */




   // typeof operator is used to find the datatype of a value or variable

   let fname = "Omer";
   console.log(fname);
   console.log("DataType is:", typeof fname);          // checks type of variable

   let phoneNO = 323432;
   console.log(phoneNO);
   console.log("DataType is:", typeof phoneNO);        // checks type of variable


   let bigInt = 3423435343453;
   console.log(bigInt);
   console.log("DataType is:", typeof bigInt);         // checks type of variable


   let follow = true;
   console.log(follow);
   console.log("DataType is:", typeof follow);         // checks type of variable

   




// Non-Primitives(Objects: collection of values.) (Functions, Arrays are part of objecsts.(semi)) 


