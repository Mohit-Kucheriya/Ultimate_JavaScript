class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    introduce() {
        return `Hi I am ${this.firstName} and I am studying ${this.course}`;
    }
}

const mohit = new StudentCl("Mohit", 2000, "Information Technology");
console.log(mohit);
console.log(mohit.calcAge());
console.log(mohit.introduce());


