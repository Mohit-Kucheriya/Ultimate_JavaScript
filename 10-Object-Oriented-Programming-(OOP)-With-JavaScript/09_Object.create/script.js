/*

Now, with Object.create there is still the idea of prototypal inheritance. However there are no prototype properties involved. And also no constructor function and no 'new' operator involved.

NOTE - Object.create creates a new object, and the prototype of that object will be the object that we passed in.

*/

const PersonProto = {
    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    },

    // Manually initializing the object
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// Create a new object using Object.create
const Hermoine = Object.create(PersonProto);
console.log(Hermoine);
Hermoine.firstName = "Hermoine";
Hermoine.birthYear = 2006;
console.log(Hermoine.calcAge());

const jessica = Object.create(PersonProto);
console.log(jessica);

jessica.init("Jessica", 1990);
console.log(jessica.calcAge());


