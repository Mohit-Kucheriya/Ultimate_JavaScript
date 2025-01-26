class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];

        console.log(
            `Account created for ${this.owner} with currency ${this.currency} and pin ${this.pin}`
        );
    }

    // Public interface
    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approval(val) {
        return true
    }

    requestedLoad(val) {
        if (this.approval(val)) {
            this.movements.push(val)
            console.log(`Request for ${val} approved`)
        }
    }
}

const acc1 = new Account("Mohit", "INR", 1111);
acc1.deposit(1000);
acc1.withdraw(500);
acc1.requestedLoad(350)
console.log(acc1.movements);
