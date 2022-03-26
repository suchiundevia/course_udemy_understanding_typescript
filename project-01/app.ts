function add(n1: number, n2: number, printResult: boolean, resultPhrase: string) {
    const result = n1 + n2;
    if (printResult && resultPhrase) {
        console.log(resultPhrase + result);
    }
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    } else {
        throw new Error("Incorrect input!")
    }
}

// number, string and boolean
const number1 = 5;
const number2 = 2.7;
const printResult = true;
const resultPhrase = "Result is "

const result = add(number1, number2, printResult, resultPhrase)

// objects, arrays and tuples
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string],
} = {
    name: "such",
    age: 0,
    hobbies: ["reading", "something"],
    role: [2, "author"],
}

console.log(result);
console.log(person.name);

// enums
enum Role {
    ADMIN = 4,
    READ_ONLY,
    AUTHOR,
};

const author = {
    name: "such",
    year: 2022,
    role: Role.AUTHOR,
}
console.log(person.hobbies);

// union types
const canBeStringOrNumbers = "value" || 0;

// literal type
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {-*+*6
    //   return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);


// alias types
type aliasType = number | string | boolean;
let example: aliasType;

// function types
function checkResult(number: number) {
    // void return type not undefined - Typescript differenciation
    console.log("test function")
}

let subtract: Function;

// callbacks
function addAndHandle(a: number, b: number, cb: (num: number) => void) {
    const result = a + b;
    cb(result);
}

console.log(addAndHandle(20, 10, (result) => {
    console.log("inside callback")
}))

//unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "test";
// userName = userInput; - use of unknown type restricts this. Need a type check if statment to do this.
// Unknown is better than any because it does have more restrictions.

// never type
// this function returns "never" not void. Undefined won't be logged. Crashes the script. It never produces a value.
function generateError(message: string, code: number): never {
    throw{message: message, errorCode: code}
}

generateError("An error occured", 500);

