// Exercise 5: Create an Enum

enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const currentDay: Day = Day.Saturday;
console.log("=== Current Day ===");
console.log("Current day:", Day[currentDay]);

interface Race {
  name: string;
  participants: string[];
  first: string;
  second: string;
  third: string;
  day: Day;
}

const race: Race = {
  name: "Vancouver Marathon",
  participants: ["Alice", "Bob", "Charlie", "Diana"],
  first: "Alice",
  second: "Charlie",
  third: "Bob",
  day: Day.Saturday,
};

console.log("\n=== Race Information ===");
console.log("Race:", race.name);
console.log("Day:", Day[race.day]);
console.log("Participants:", race.participants);
console.log("1st place:", race.first);
console.log("2nd place:", race.second);
console.log("3rd place:", race.third);