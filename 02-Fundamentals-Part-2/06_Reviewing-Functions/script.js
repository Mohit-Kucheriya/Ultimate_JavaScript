// currentAge function simply returns the current age of a person which takes birthYear as a parameter.
const currentAge = function (birthYear) {
    return 2024 - birthYear
}

// yearsUntilRetirement function takes birthYear and firstName as parameters and returns the years until retirement and calls the currentAge function to get the current age of the person.
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = currentAge(birthYear)
    const retirementAge = 65 - age;

    if (retirementAge > 0) {
        return retirementAge;
        console.log(`${firstName} will retire in ${retirementAge} years`); // This line will never get executes because the function has already been returned.
    } else {
        return -1
        console.log(`${firstName} is already retired`);
    }

}

console.log(yearsUntilRetirement(2001, "Harry"));
console.log(yearsUntilRetirement(1800, "Mohit"));

/*

Anatomy of Functions -
1. Function Name
2. Parameters - placeholder to receive input values. Like local variables of a function.
3. Function Body - block of code that we want to reuse. Processes the function's input and returns the output.
4. Return - keyword to return the output of the function and terminate execution of the function.
5. Arguments - actual values of function parameters, to input data.
6. Calling, Invoking - calling a function or invoking a function using the function name and parenthesis().
7. Variable - To save returned value(function output).

*/
