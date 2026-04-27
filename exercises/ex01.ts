// Exercise 1: Create a Reservation Object

interface CustomerInformation {
  name: string;
  email: string;
  phone: string;
}

interface PaymentInformation {
  cardNumber: string;
  cardHolder: string;
}

interface Reservation {
  customerInformation: CustomerInformation;
  paymentInformation: PaymentInformation;
  checkIn: Date;
  checkOut: Date;
}

const reservation: Reservation = {
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