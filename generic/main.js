var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log("HELLO EVERYONE");
    };
    return Person;
}());
var teacher = new Person("John", "Doe");
function test(person) {
    return person;
}
test(teacher);
