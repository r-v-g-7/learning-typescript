// main.ts
let person: unknown = { age: 21, city: "Delhi" };

function hasAge(obj: any): obj is { age: number } {
  return (
    !!obj &&
    typeof obj === "object" &&
    "age" in obj &&
    typeof obj.age === "number"
  );
}

if (hasAge(person)) {
  console.log(`Person's age is: ${person.age}`); // → Person's age is: 21
}
