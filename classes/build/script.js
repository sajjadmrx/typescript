"use strict";
// class Car {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// let car = new Car('BMW')
// console.log(car)
// type car = {
//     name: string,
//     speed: number
// }
// class Car {
//     constructor(car: car) {
//         return car
//     }
// }
// const car1 = new Car({
//     name: 'BMW',
//     speed: 100
// })
// console.log(car1)
// type carChecker = {
//     name: string
// }
// type car = {
//     name: string,
//     speed: number,
//     price: number
//     createdAt: Date
// }
// class Car {
//     constructor(car: carChecker) {
//         if (car.name == 'BMW') {
//             let carInShop: car = {
//                 name: car.name,
//                 speed: 350,
//                 price: 100,
//                 createdAt: new Date()
//             }
//             return carInShop
//         }
//         else
//             return {}
//     }
// }
// const car1 = new Car({
//     name: 'a'
// })
// console.log(car1)
// const cars: string[] = ['BWM', 'AUDI', 'MERCEDES']
// type carChecker = {
//     name: string
// }
// type car = {
//     name: string,
//     speed: number,
//     price: number
//     createdAt: Date
// }
// class checker {
//     checkName(name: string): Boolean {
//         if (cars.includes(name))
//             return true
//         else
//             return false
//     }
// }
// class Car extends checker {
//     carName: string
//     constructor(car: carChecker) {
//         super()
//         this.carName = car.name
//         if (!this.checkName(this.carName))
//             throw new Error('Car not found')
//     }
//     getDetails(): car {
//         return {
//             name: this.carName,
//             speed: 1000,
//             price: 2000,
//             createdAt: new Date()
//         }
//     }
// }
// const car1 = new Car({
//     name: 'BWM'
// })
// console.log(car1, car1.getDetails())
// protected:  class and subclasses
// private: class only
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.sayHello = function () {
        console.log(this.name + ':' + ' Hello ');
    };
    person.prototype.printPerson = function () {
        console.log(this.getDetails());
    };
    person.prototype.getDetails = function () {
        return "name:" + this.name + "\nage:" + this.age;
    };
    return person;
}());
var person1 = new person('sajjad', 19);
var person2 = new person('Amir', 20);
person1.name; // public
//person1.age // protected 
person1.sayHello();
person1.printPerson();
person2.printPerson();
