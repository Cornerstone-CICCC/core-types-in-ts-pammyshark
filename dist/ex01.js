"use strict";
// Exercise 1: Create a Reservation Object
Object.defineProperty(exports, "__esModule", { value: true });
const reservation = {
    customerInformation: {
        name: "Pam Shark",
        email: "pam@email.com",
        phone: "604-555-1234",
    },
    paymentInformation: {
        cardNumber: "1234-5678-9012-3456",
        cardHolder: "Pam Shark",
    },
    checkIn: new Date("2025-08-01"),
    checkOut: new Date("2025-08-05"),
};
console.log("=== Reservation Information ===");
console.log("Customer:", reservation.customerInformation);
console.log("Payment:", reservation.paymentInformation);
console.log("Check-in:", reservation.checkIn.toDateString());
console.log("Check-out:", reservation.checkOut.toDateString());
//# sourceMappingURL=ex01.js.map