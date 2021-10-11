{

    const name: string = "sajjad" // string 
    const age: number = 19 // number
    const isWomen: boolean = false // boolean
    let address: any = "iran" // any
    // --- any ---
    // address = {
    //     city: "tehran",
    //     state: "tehran"
    // }
    // --- or 
    // address = 1111
    // address = [1, 2, 3]
    // --- end any ---
    const friends: string[] = ["A", "B", "C"] // string Array
    // friends[0] = 1 // error 
    // friends[0] = true // error
    const loved: number[] = [1, 2, 3, 5, 6, 7] // number Array
    const inventory: any[] = ["fish", 1, true, { name: "food", price: 100 }] // any array
    const fullAge: [number, string] = [age, "Nineteen"] // tuple



    console.log(name, age, isWomen, address, friends, inventory, fullAge)

}