/*

Encapsulation: Private Class Fields and Methods

Why we need data privacy?
Two big reasons:
1. To prevent code from outside a certain class to accidentally manipulate the data that lives inside the class.

2. When we expose only a small interface, so that small API just consisting of a few methods, then we can change all the other internal methods inside the class i.e. external code does not rely on these methods, and so code will not break.

Implementation
1. Public fields and methods are accessible from outside the class.
2. Private fields and methods are accessible only from inside the class.
3. STATIC version of these 4

*/
class Account {
    // Public fields i.e. fields = properties
    bank = "Bankist";

    // Private fields
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movements = [];

        console.log(
            `Account created for ${this.owner} with currency ${this.currency
            } and pin ${this.#pin}`
        );
    }

    // Public interface (API)
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    // Private method
    #approval(val) {
        return true;
    }

    requestedLoad(val) {
        if (this.#approval(val)) {
            this.#movements.push(val);
            console.log(`Request for ${val} approved`);
        }
        return this;
    }
}

const acc1 = new Account("Mohit", "INR", 1111);
acc1.deposit(1000);
acc1.withdraw(500);

/*

Any can access the movements array like this
acc1.movements = [] and this is the bad practice, so we need to make it private.

Our movements array should only be able to read and write/ manipulate the data inside the class by using the methods like deposit, withdraw, approval, requestedLoad.

To make it private, we use "#" symbol before the name of the field.

And if some properties depends on user input, just like we declare in JS only the variable just like this
*/

acc1.requestedLoad(350);

/*

Chaining methods - We can chain the methods i.e. to use the chaining we have to return the object.

*/
acc1.deposit(1000).withdraw(500).requestedLoad(350).deposit(1000);
