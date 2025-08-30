// main.ts
var myVariable = { name: "Alice" }; // now an object
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name); // → Alice
}
