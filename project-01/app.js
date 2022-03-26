function add(n1, n2, printResult, resultPhrase) {
    var result = n1 + n2;
    if (printResult && resultPhrase) {
        console.log(resultPhrase + result);
    }
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        throw new Error("Incorrect input!");
    }
}
// number, string and boolean
var number1 = 5;
var number2 = 2.7;
var printResult = true;
var resultPhrase = "Result is ";
var result = add(number1, number2, printResult, resultPhrase);
// objects, arrays and tuples
var person = {
    name: "such",
    age: 0,
    hobbies: ["reading", "something"],
    role: [2, "author"]
};
// enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 4] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
;
var author = {
    name: "such",
    year: 2022,
    role: Role.AUTHOR
};
// union types
var canBeStringOrNumbers = "value" || 0;
// literal type
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
console.log(result);
console.log(person.name);
console.log(person.hobbies);
console.log(canBeStringOrNumbers);
