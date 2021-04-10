
// Question 1

console.log(typeof(1 + "1"));  

// string 

// Question 2

console.log(typeof( 1 - "1")); 
// number

console.log( 1 - "1");
// number 0

// Question 3

let nums = [1,2,2,3];

console.log([...new Set(nums)]);

// [ 1, 2, 3 ]

console.log(new Set(nums));
// Set(3) { 1, 2, 3 }

console.log([new Set(nums)]);
// [ Set(3) { 1, 2, 3 } ]


// Question 4

let func = function() {
   {
        let a = "let";
        var b = "var";
        console.log(a)
    }
   
    console.log(b);
}

 func();


 // Question 5
// let func = function() {
//     {
//         (function(){
//         let a = "let";
//         var b = "var";

//         })();
         
         
//      }
    
//      console.log(b);
//      console.log(a);
//  }
 
//   func();
 
// Error out side of the function scope


// Question 6

console.log(5 < 6 < 7) 
// true
console.log(5 > 6 > 7)
// False


// Question 7

// let profile = {
//     name : "bhaskar"
// };
// Object.freeze(profile)
// profile.age = 3;

// console.log(profile)

let profile = {
    name : "bhaskar"
};
Object.seal(profile)
profile.name = "damu";

console.log(profile)

// Question 8

console.log(math.max(1,2));

// -infinity