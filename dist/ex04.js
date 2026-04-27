"use strict";
// Exercise 4: Create a Tuple
Object.defineProperty(exports, "__esModule", { value: true });
const coordinate = [49.2827, -123.1207];
const location = {
    description: "Vancouver, BC, Canada",
    coordinate,
};
console.log("=== Location Information ===");
console.log("Description:", location.description);
console.log("Coordinates:", location.coordinate);
console.log("X (Latitude):", location.coordinate[0]);
console.log("Y (Longitude):", location.coordinate[1]);
//# sourceMappingURL=ex04.js.map