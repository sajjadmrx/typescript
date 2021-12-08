// interface Person {
//     firstName: string;
//     lastName: string;

// }

// const teacher: Person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// const student: Person = {
//     firstName: 'jack',
//     lastName: 'Johnson',
// };

// interface Boy extends Person {
//     age: number;
// }
// const jack: Boy = {
//     firstName: 'sajjad',
//     lastName: "mrx",
//     age: 19
// }




// console.log(teacher, student);



interface Person {
    id?: number;
    name: string;
    family: string;
    age: number,
    email?: string
}
const db: any[] = []
interface PersonService {
    save(person: Person): Person;
    delete(person: Person): void;
    getPersonById(id: number): Person | undefined;
    getAllPersons(): Person[];

}



class database implements PersonService {

    save(person: Person): Person {
        const user = db.find(v => v.name == person.name)
        if (user) {
            return user
        }
        person.id = db.length + 1
        db.push(person)
        return person
    }

    delete(person: Person): void {
        db.splice(db.indexOf(person), 1)
    }

    getPersonById(id: number): Person | undefined {
        return db.find(v => v.id == id)
    }

    getAllPersons(): Person[] {
        return db
    }

    getPersonsByAge(age: number): Person[] | undefined {
        return db.filter(v => v.age == age)

    }


}


const dbService = new database()
let person1: Person = {
    name: 'sajjad',
    family: 'mrx',
    age: 19,
    email: 'fake@gmail.com'
}
let person2: Person = {
    name: 'Ali',
    family: 'Zareh',
    age: 25,
}
dbService.save(person1)
dbService.save(person2)

console.log(dbService.getAllPersons())

