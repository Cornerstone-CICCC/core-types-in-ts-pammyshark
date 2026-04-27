// Exercise 9: Using the "Never" Type in a Function

// never: function always throws, never returns
const throwError = (message: string): never => {
  throw new Error(message);
};

// void: function returns nothing (undefined)
const logMessage = (message: string): void => {
  console.log(`Log: ${message}`);
  // If you try to return something here, TypeScript will throw an error:
  // return "something"; // ❌ Error: Type 'string' is not assignable to type 'void'
};

console.log("=== Never vs Void ===");

// void example
logMessage("This function returns void");

// never example - wrapped in try/catch so the program doesn't crash
try {
  throwError("Something went wrong!");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught error:", error.message);
  }
}

console.log("Program continues after catching the never error!");