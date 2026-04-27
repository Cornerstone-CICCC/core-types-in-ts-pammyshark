// Exercise 6: Union Types for Function Parameters

const printId = (id: number | string): number | string => {
  if (typeof id === "number") {
    console.log(`The ID is a number: ${id}`);
  } else {
    console.log(`The ID is a string: ${id}`);
  }
  return id;
};

console.log("=== Print ID ===");
printId(101);
printId("ABC-202");
printId(999);