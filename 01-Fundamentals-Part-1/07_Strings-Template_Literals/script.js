const firstName = "Mohit";
const birthYear = 2001;
const currentYear = 2024;
const job = "Software Engineer";

const details = "I'm " + firstName + "  a " + (currentYear - birthYear) + " year Working as " + job
console.log(details);

// Now using template literals
const anotherDetails = `I'm ${firstName} a ${currentYear - birthYear} year Working as ${job} in Pune`
console.log(anotherDetails);

// We can simply use ` ` to write string or multiline string. In template literals, we don't need to use `\n\`
console.log("Modern Web Development \n\
is incomplete without JavaScript");

console.log(`Modern Web Development
is incomplete without JavaScript`);

console.log(`Ultimate JavaScript course by Jonas Schmedtmann`);




