const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    return 2037 - this.birthYear
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    return `Hi, I am ${this.firstName} and I am studying ${this.course}`
};

const mohit = new Student("Mohit", "2000", "Computer Science");
console.log(mohit.introduce());

console.log(mohit.calcAge());
