enum Colors { // read Only
    Red = '#ff0000',
    Blue = '#0000ff',
    Green = '#00ff00',
    Yellow = '#ffff00',
    Black = '#000000',
    White = '#ffffff',
}

enum Animals {
    Dog = 'dog',
    Cat = 'cat',
    Bird = 'bird',
    Fish = "fish",
}

enum numbers {
    one = 1,
    two = 2
}

console.log(Colors.Red); // print #ff0000

let details: string = getDetails(Animals.Dog)
console.log(details)  // print dog is Cute

function getDetails(animal: Animals): string {
    return `${animal} is Cute`
}

const total: number = Total(numbers.two)
const total2: number = Total(10)

console.log(total, total2)

function Total(number: numbers | number): number {
    return number * number
}