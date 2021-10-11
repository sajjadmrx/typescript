"use strict";
{
    var name_1 = "sajjad"; // string 
    var age = 19; // number
    var isWomen = false; // boolean
    var address = "iran"; // any
    // --- any ---
    // address = {
    //     city: "tehran",
    //     state: "tehran"
    // }
    // --- or 
    // address = 1111
    // address = [1, 2, 3]
    // --- end any ---
    var friends = ["A", "B", "C"]; // string Array
    // friends[0] = 1 // error 
    // friends[0] = true // error
    var loved = [1, 2, 3, 5, 6, 7]; // number Array
    var inventory = ["fish", 1, true, { name: "food", price: 100 }]; // any array
    var fullAge = [age, "Nineteen"]; // tuple
    console.log(name_1, age, isWomen, address, friends, inventory, fullAge);
}
