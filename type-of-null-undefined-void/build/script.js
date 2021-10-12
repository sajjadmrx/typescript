"use strict";
var fullname = getFullname("sajjad");
console.log(fullname); // log undefined
var fullname2 = getFullname_2("sajjad");
console.log(fullname2); // log string
function getFullname(name) {
    console.log(name);
}
function getFullname_2(name) {
    return name;
}
