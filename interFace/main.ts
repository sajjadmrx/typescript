interface Person {
    firstName: string;
    lastName: string;

}

const teacher: Person = {
    firstName: 'John',
    lastName: 'Doe'
};

const student: Person = {
    firstName: 'jack',
    lastName: 'Johnson',
};

interface Boy extends Person {
    age: number;
}
const jack: Boy = {
    firstName: 'sajjad',
    lastName: "mrx",
    age: 19
}




console.log(teacher, student);