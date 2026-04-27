"use strict";
// Exercise 5: Create an Enum
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
const currentDay = Day.Saturday;
console.log("=== Current Day ===");
console.log("Current day:", Day[currentDay]);
const race = {
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
//# sourceMappingURL=ex05.js.map