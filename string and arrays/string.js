// Quetion 01 Write a JavaScript function that takes a string as input and returns
//  the reverse of the string. For example, if the input is "hello", the function should return "olleh".

// function reverseName(str){
//     document.write("Reverse String: " + str.split("").reverse().join(""));
// }
// let text = prompt("Enter your name")

// reverseName(text);


// -------------------------------------------------------------------------------------------------------

// Quetion 02 Write a JavaScript function that takes a string as input and returns the number of vowels in the string.
//  For example, if the input is "hello", the function should return 2.

// var count = 0;
// var vowels  = ["a" ,"e" ,"i" ,"o","u"];
// function display(str){

//     for(var i=0; i<str.length; i++){

//         if(vowels.includes(str[i].toLowerCase())){
//             count++;

//         }
//     }
//     return count;
// }
// let username = prompt("Enter you name")
// document.write(username + "<br>")
// document.write("Total Vowels:  " + display(username));
   

//------------------------------------------------------------------------------------------------------------------
// Write a JavaScript function that takes a string as input and returns the same string with the first letter converted to uppercase. For example, if the input is "hello", the function should return "Hello".

function display(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let str = "hello";
console.log(display(str));


//------------------------------------------------------------------------------------------------------------------

// Write a JavaScript code to remove extra spaces in the string, from starting, ending and even in between the string, print the result with one space in between words.


//  var x = prompt("Enter Name")
//  x = x.replace(/\s{1,}/g, ' ');
//  console.log(x);

//OR

// var str = "    Hello     World    ";
// var newStr = str.trim().split(/\s+/).join(" ");
// console.log(newStr);
// =====================================================================================
//Array Assigment

//Quetion 01:  Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// function sumArray(numbers){
//     var sum = 0;
//     for(var i = 0; i<numbers.length; i++){
//       sum +=numbers[i];

//     }
//     return sum;     
// }

// var numbers = [1 ,2, 3, 4, 5]
// var total = sumArray(numbers)
// console.log(total);
//=================================================================================

//Quetion 02:Write a JavaScript function that takes an array of strings as input and returns a new array that contains only the strings that have 3 or more characters.

// function filStrings(arr) {

//   let filteredArr = [];//as of now empty array

//   for (let i = 0; i < arr.length; i++) { //condition
//     if (arr[i].length >= 3) {    //arr[i] = length check (arr[i].length)
//       filteredArr.push(arr[i]); //(push) = which adds new elements to the end of the array.
//     }

//   }
//   return filteredArr;  //filterhokar filterArray return
// }
// let myArray = ['hi', 'hello', 'goodbye', 'yes', 'no']; //made variable and add arrays
// let newArray = filStrings(myArray); //call function 

// console.log(newArray); //function  == newArray 
// //Output:  ['hello', 'goodbye', 'yes']
//==================================================================================
//Quetion 03: Write a JavaScript function that takes an array of objects, where each object has a "name" property, and returns a new array that contains only the names of the objects in the original array.

// function getNames(arr) {
//     var names = [];
//     for (var i = 0; i < objects.length; i++) {
//       names.push(arr[i].name); //name imp
//     }
//     return names;
//   }
//   var objects = [  { name: "pratiksha", age: 25 },  { name: "nisha", age: 30 },  { name: "Charlie", age: 35 }];
//   var names = getNames(objects);
//   console.log(names); // Output: (3) ['pratiksha', 'nisha', 'Charlie']
    