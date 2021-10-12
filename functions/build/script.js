"use strict";
// function sum(x: number, y: number): number {
//     return x + y
// }
// console.log(sum(2, 3)) // 5
// let sum: (x: number, y: number) => number // set Type
// sum = function (x, y) {
//     return x + y
// }
// console.log(sum(1, 2)) // 3
function sum(x) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.map(function (n) { return n + x; });
}
console.log(sum(10, 1, 2, 3, 4, 5, 6)); // [11, 12, 13, 14, 15, 16]
function loger() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data.join(','));
}
loger('A', 'B', 'C', "D", "B", "A");
loger(1, 2, 3, 4, 5, 6, 7, 8);
function logerPluse() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data);
}
logerPluse('A', 2, { name: 'Sajjad' }, [30, 40], 10, 'W');
function getUsers(userId) {
    var users = [{ name: 'sajjad', id: 10 }, { name: 'ali', id: 20 }];
    if (userId) {
        return users.filter(function (user) { return user.id == userId; });
    }
    else {
        return users;
    }
}
var users = getUsers();
var user = getUsers(10);
logerPluse(users, user);
