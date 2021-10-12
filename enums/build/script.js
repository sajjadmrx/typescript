"use strict";
var Colors;
(function (Colors) {
    Colors["Red"] = "#ff0000";
    Colors["Blue"] = "#0000ff";
    Colors["Green"] = "#00ff00";
    Colors["Yellow"] = "#ffff00";
    Colors["Black"] = "#000000";
    Colors["White"] = "#ffffff";
})(Colors || (Colors = {}));
var Animals;
(function (Animals) {
    Animals["Dog"] = "dog";
    Animals["Cat"] = "cat";
    Animals["Bird"] = "bird";
    Animals["Fish"] = "fish";
})(Animals || (Animals = {}));
var numbers;
(function (numbers) {
    numbers[numbers["one"] = 1] = "one";
    numbers[numbers["two"] = 2] = "two";
})(numbers || (numbers = {}));
console.log(Colors.Red); // print #ff0000
var details = getDetails(Animals.Dog);
console.log(details); // print dog is Cute
function getDetails(animal) {
    return animal + " is Cute";
}
var total = Total(numbers.two);
var total2 = Total(10);
console.log(total, total2);
function Total(number) {
    return number * number;
}
