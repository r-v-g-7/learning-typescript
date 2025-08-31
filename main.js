// main.ts
var person = { age: 21, city: "Delhi" };
function hasAge(obj) {
    return (!!obj &&
        typeof obj === "object" &&
        "age" in obj &&
        typeof obj.age === "number");
}
if (hasAge(person)) {
    console.log("Person's age is: ".concat(person.age)); // → Person's age is: 21
}
