var KayValuePair = /** @class */ (function () {
    function KayValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KayValuePair;
}());
var pair1 = new KayValuePair(1, 'one');
var pair2 = new KayValuePair("Sajjad", 19);
var pair3 = new KayValuePair("Sajjad", new Date());
var pair4 = new KayValuePair(["Salam", 19, { key: "its", value: "Oky!" }], 1);
function test() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
}
var pair5 = new KayValuePair(test(), 1);
var pair6 = new KayValuePair({ name: "Sajjad", age: 19 }, "Sajjad");
console.log(pair6.key, pair6.value);
