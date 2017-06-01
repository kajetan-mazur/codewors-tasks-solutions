// Grasshopper - Personalized Message
// Personalized greeting
//
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
//     Use conditionals to return the proper message: case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest'

function greet (name, owner) {
    if(name === owner) {return 'Hello boss'}
    else{return 'Hello guest'}
}

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    var a = x.replace(/\s/g,'');
    return a;
}

// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
//
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
//
// Since we cannot define keywords in Javascript (well, at least I don't

function xor(a, b) {
    if(a === true && b === false || a === false && b === true) {
        return true;}
    else { return false;}
}

//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
//     Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
//     Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    return d<3 ? d*40 : d>=3 && d<7? d*40-20 : d*40-50;
}
