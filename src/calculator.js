

console.log("\nReturn sum: ");
sun("1,2");
sun("67,20");

console.log("\n ");

let total = sun("1,1"); 
let we =  sun("6,20");

console.log(total + we);

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

    return result;
}
