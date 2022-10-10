
//Sum of two string numbers
console.log("\nReturn sum: ");
console.log(sum("1,2"));
console.log(sum("67,20"));

console.log("\nReturn sum: ");
console.log(sum2("1,2"));
console.log(sum2("67,20"));

//total calculation using two sum 
let total = sum("1,1"); 
let we =  sum("6,20");

console.log(total + we);


function add1(numbers){

    let emptyString = "";
    let result;

    if (numbers === emptyString) {
        result = 0;
    }
    else{
        result = "Not a string";
    }
    
    return result;
}

function add2(numbers){

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

function addUnknownNumbers(){



    return 0;
}

function addNewLineNumbers(){


    return 0;
}