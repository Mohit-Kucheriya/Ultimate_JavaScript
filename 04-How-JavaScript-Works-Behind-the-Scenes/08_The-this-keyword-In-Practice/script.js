console.log(this); // global object

const calcAge = function (birthYear) {
    const age = 2024 - birthYear;
    console.log(this); // global object and 'undefined' in strict mode
}

calcAge(2001)

const calcAgeArrow = birthYear => {
    const age = 2024 - birthYear;
    console.log(this); // 'this' of it's lexical scope i.e. here the global scope (window). Here 'this' is inherited from the outer lexical scope i.e. parent's scope 
}
calcAgeArrow(1965)

const mohitObj = {
    firstName: "Mohit",
    job: "Software Engineer",
    year: 2001,
    calcAge: function () {
        console.log(this); // 'this' points to the object on which the method is called i.e. mohitObj

        const age = 2024 - this.year;
        return age
    }
}

mohitObj.calcAge();

const harryObj = {
    year: 1985,
}
harryObj.calcAge = mohitObj.calcAge // - borrowing the method from mohitObj
console.log(harryObj);
console.log(harryObj.calcAge()); 
