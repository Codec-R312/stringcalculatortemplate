//Return 0 if string is empty
console.log("\nReturn 0 if string is empty: ");
add1(1);
add1(0);
add1("");

console.log("\nReturn 1 if string is not empty: ");
add2(1);
add2(0);
add2("");

console.log("\nReturn sum: ");
sun("1,2");
sun("67,20");

function add1(numbers){

    let emptyString = "";
    let result;

    if (numbers === emptyString) {
        result = 0;
    }
    else{
        result = "Not a string";
    }
    console.log(result);
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
    console.log(result);
}


//The function for the two string numbers
function sun(numbers){

    let emptyString = "";
    let result = 0;
    let myArray = numbers.split(",");

    if (numbers != emptyString) {
        result = parseInt(myArray[0]) + parseInt(myArray[1]);
    }
    else{
        result = 0;
    }
    console.log(result);
}
