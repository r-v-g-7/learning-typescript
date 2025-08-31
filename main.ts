let product: unknown = { title: "HP Laptop", price: 45000 };

function hasTitle(obj: any): obj is { title: string } {
  return (
    !!obj &&
    typeof obj === "object" &&
    "title" in obj &&
    typeof obj.title === "string"
  );
}

if (hasTitle(product)) {
  console.log(`Product title is: ${product.title}`); // → Product title is: HP Laptop
}
