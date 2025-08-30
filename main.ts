// main.ts
let myVariable: unknown = { name: "Alice" };   // now an object

function hasName(obj: any): obj is { name: string } {
  return !!obj &&
    typeof obj === "object" &&
    "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);     // → Alice
}
