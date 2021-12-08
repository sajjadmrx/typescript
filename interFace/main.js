// interface Person {
//     firstName: string;
//     lastName: string;
var db = [];
var database = /** @class */ (function () {
    function database() {
    }
    database.prototype.save = function (person) {
        var user = db.find(function (v) { return v.name == person.name; });
        if (user) {
            return user;
        }
        person.id = db.length + 1;
        db.push(person);
        return person;
    };
    database.prototype["delete"] = function (person) {
        db.splice(db.indexOf(person), 1);
    };
    database.prototype.getPersonById = function (id) {
        return db.find(function (v) { return v.id == id; });
    };
    database.prototype.getAllPersons = function () {
        return db;
    };
    database.prototype.getPersonsByAge = function (age) {
        return db.filter(function (v) { return v.age == age; });
    };
    return database;
}());
var dbService = new database();
var person1 = {
    name: 'sajjad',
    family: 'mrx',
    age: 19,
    email: 'fake@gmail.com'
};
var person2 = {
    name: 'Ali',
    family: 'Zareh',
    age: 25
};
dbService.save(person1);
dbService.save(person2);
console.log(dbService.getAllPersons());
