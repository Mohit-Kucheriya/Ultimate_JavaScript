/*

Switch Statement - A switch statement is a control structure that allows you to select one of many code blocks to be executed. Similar to if-else statements.

break - The break statement is used to exit a switch statement. If we dont`t use break, the switch statement will continue to execute and stops when it finds the next break statement otherwise it will execute all the cases if no break statement is found.

default - The default statement is used to specify a default case in a switch statement. If no case is matched, the default case is executed.

*/

const day = "Thursday";
switch (day) {
    case "Monday":
        console.log(`Start the React course`);
        console.log(`Revision of JS Fundamentals`);
        break;
    case "Tuesday":
        console.log(`Fundamentals of React JS`);
        break;
    case "Wednesday":
    case "Thursday":
        console.log(`What are react hooks`);
        break;
    case "Friday":
    case "Saturday":
        console.log(`Overall Revision of previous concept `);
        break;
    case "Sunday":
        console.log(`Enjoy Weekend`);
        break;
    default:
        console.log(`Invalid day, Please enter a valid day`);
}
// Using if-else
const anotherDay = "Thursday";
if (anotherDay === "Monday") {
    console.log(`Start the Web Development Journey`);
} else if (anotherDay === "Tuesday") {
    console.log(`Week 1 HTML & CSS`);
} else if (anotherDay === "Wednesday" || anotherDay === "Thursday") {
    console.log(`Week 3 & 4 JavaScript`);
} else if (anotherDay === "Friday" || anotherDay === "Saturday") {
    console.log(`Week 5 & 6 Adavanced JavaScript`);
} else if (anotherDay === "Sunday") {
    console.log(`It's Weekend`);
} else {
    console.log(`Invalid day, Please enter a valid day`);
}
