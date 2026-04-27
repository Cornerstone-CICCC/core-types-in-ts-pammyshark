// Exercise 4: Create a Tuple

type Coordinate = [number, number];

interface Location {
  description: string;
  coordinate: Coordinate;
}

const coordinate: Coordinate = [49.2827, -123.1207];

const location: Location = {
  description: "Vancouver, BC, Canada",
  coordinate,
};

console.log("=== Location Information ===");
console.log("Description:", location.description);
console.log("Coordinates:", location.coordinate);
console.log("X (Latitude):", location.coordinate[0]);
console.log("Y (Longitude):", location.coordinate[1]);