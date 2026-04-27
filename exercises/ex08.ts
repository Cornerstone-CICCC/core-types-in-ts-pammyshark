// Exercise 8: Guarding Against "Unknown" Type

const displayValue = (value: unknown): void => {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  } else {
    console.log(`Unknown type: ${typeof value}`);
  }
};

console.log("=== Display Value ===");
displayValue("Hello TypeScript");
displayValue(42);
displayValue(true);

// Function that loops through chars if string, skips other types
const loopIfString = (value: unknown): void => {
  if (typeof value === "string") {
    console.log("\nLooping through each character:");
    for (const char of value) {
      console.log(char);
    }
  } else {
    console.log("\nValue is not a string, skipping loop.");
  }
};

console.log("\n=== Loop If String ===");
loopIfString("Hello");
loopIfString(123);