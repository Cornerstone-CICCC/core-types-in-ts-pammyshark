// Exercise 7: Using Literal Types in Function

const printDirection = (direction: "left" | "right"): void => {
  if (direction === "left") {
    console.log("Turning left!");
  } else {
    console.log("Turning right!");
  }
};

console.log("=== Print Direction ===");
printDirection("left");
printDirection("right");