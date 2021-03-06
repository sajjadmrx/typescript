class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log("HELLO EVERYONE");
    }

}

let teacher = new Person("John", "Doe");


function test<T extends Person>(person: T): T {
    return person
}

///test(teacher);

makeArr(1, Date.now());

function makeArr<T, X = number>(value: T, value2: X): [T, X] {
    return [value, value2];
}
