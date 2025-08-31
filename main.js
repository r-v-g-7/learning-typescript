var product = { title: "HP Laptop", price: 45000 };
function hasTitle(obj) {
    return (!!obj &&
        typeof obj === "object" &&
        "title" in obj &&
        typeof obj.title === "string");
}
if (hasTitle(product)) {
    console.log("Product title is: ".concat(product.title)); // → Product title is: HP Laptop
}
