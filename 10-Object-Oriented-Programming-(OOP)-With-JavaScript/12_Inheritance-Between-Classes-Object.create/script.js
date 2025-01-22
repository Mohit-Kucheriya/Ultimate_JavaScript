const PersonProto = {
    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    return `Hi, I am ${this.firstName} and I am studying ${this.course}`
}

const mohit = Object.create(StudentProto);

mohit.init("Mohit", "2000", "Computer Science");