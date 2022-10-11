
// //Sum of two string numbers
// console.log("\nReturn sum: ");
// console.log(sum("1,2"));
// console.log(sum("67,20"));

// console.log("\nReturn sum: ");
// console.log(sum2("1,2"));
// console.log(sum2("67,20"));

// //total calculation using two sum 
// let total = sum("1,1"); 
// let we =  sum("6,20");

// console.log(total + we);

function add(numbers) {
    let emptyString = "";

    if (numbers === emptyString) {
        result = 0;
    }
    else{
        result = "The string is not empty";
    }

    return result
}

function addOne(numbers){

    let emptyString = "";
    let result;

    if (numbers != emptyString) {
        result = parseInt(numbers);
    }
    else{
        result = "The string is empty";
    }
    
    return result;
}

function addTwo(numbers){

    let emptyString = "";
    let result;

    if (numbers != emptyString) {
        result = 1;
    }
    else{
        result = "The string is empty";
    }
    
    return result;
}

//The function for the addition of two string numbers
function sum(numbers){

    let emptyString = "";
    let result = 0;
    let myArray = numbers.split(",");

    if (numbers != emptyString) {
        result = parseInt(myArray[0]) + parseInt(myArray[1]);
    }
    else{
        result = 0;
    }
    //console.log(result);

    return result;
}

function sum2(numbers){

    let emptyString = "";
    let result = 0;
    let myArray = numbers.split(",");

    if (numbers == emptyString) {
        result = 0;
    }
    else{
        result = parseInt(myArray[0]) + parseInt(myArray[1]);
    }
    //console.log(result);

    return result;
}

//console.log(addUnknownNumbers("1,2,34,1000,-7"));

function addUnknownNumbers(numbers){
    let total = 0;
    let numArray = numbers.split(",");
   
    for (let i = 0; i < numArray.length; i++){
        total+= parseInt(numArray[i]);
    }

    return total;
}
//console.log(addNewLineNumbers("1\n2\n34\n1000\n-7"));

function addNewLineNumbers(numbers){
    let total = 0;
    let numArray = numbers.split("\n");
   
    for (let i = 0; i < numArray.length; i++){
        total+= parseInt(numArray[i]);
    }

    return total;
}

//console.log(addWithMultipleDelimiters("1\n2,3"));
//console.log(addWithMultipleDelimiters("1\n2,3"));

function addWithMultipleDelimiters(numbers) {
    
    let total = 0;
    let numArray = numbers.split(/;,\n\\/);
   
    for (let i = 0; i < numArray.length; i++){
        total+= parseInt(numArray[i]);
    }

    return total;
}

//////////////////////////////////////////////////////////////////////////////
// An example to remove 
const nums = [1, 2, 3, 4, 5, 6];
const remove = [1, 0, 4, 6];

function removeFromArray(original, remove) {
  return original.filter(value => !remove.includes(value));
}

//console.log(removeFromArray(nums,remove));

/////////////////////////////////////////////////////////////////////////////////
// let myinputarr = [];
// let size = 5; // Array size
const prompt=require("prompt-sync")({sigint:true});
 
// for(let a=0; a <= size; a++) 
// {
   
//     if (a === "q" || a === null) {
//         break;
//       }
//       myinputarr[a] = prompt('Enter array Element ');
// }
 
// //user eneter array
// console.log(myinputarr);


/*
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
} */

// let myArray = [];

// while(true)
// {
//     for( let a = 0; a <= 5; a++)
//     {

   
//     if( a === "q" || a ===null)
//     {
//         break;
//     }

//     myArray[a] = prompt('Enter array Element' + "" );
// }

// console.log(myinputarr);
// }
