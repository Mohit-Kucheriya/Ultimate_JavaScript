/*

Getter and Setters are used to create a property that can be read and written to.

Every objects in JavaScript has Getter and Setter properties. And we call this special properties as accessors properties, while normal properties are called data properties.

So getter and setter are basically functions that get and set a value. And setter needs to have a parameter, which is the value that we want to set.

Classes do also have getters and setters, and they do indeed work in the exact same way.

NOTE - Getters and Setters can actually be very useful for data validation, and also for data transformation.

*/

// Getter and Setter in regular JavaScript
const account = {
    name: "Mohit",
    movement: [500, 20, 150, 300],

    get latest() {
        return this.movement.slice(-1).pop();
    },

    set latest(move) {
        this.movement.push(move);
    },
};

console.log(account.latest); // use it as a property

/*

Now to use the getter and setter we have to use like them as a property of the object.

*/
account.latest = 400;
console.log(account);


class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcDetails() {
        return `Name: ${this.fullName}, Age: ${new Date().getFullYear() - this.birthYear}`;
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    /*

    Here we are creating a setter for a property name that does already exist. So here what happens, whenever we set the fullName on the 'this' keyword, so this setter is gonna be executed. Now what happens we get the cryptic error, because both the setter and the constructor are trying to set the exact same property name. So when we have a setter which is trying to set a property so here as a convention we have to use the underscore before the property name. And to access the 'jessica.fullName' we need the getter to return 'this._fullName'.
    
    */

    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName
    }
}

const jessica = new PersonCl("Jessica Davis", 1990);
console.log(jessica);
console.log(jessica.age);
console.log(jessica.fullName);
