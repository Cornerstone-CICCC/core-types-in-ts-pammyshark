// Exercise 3: Manipulate a Reservations Array

interface CustomerInformation {
  name: string;
  email: string;
  phone: string;
}

interface PaymentInformation {
  isPayed: boolean;
  totalPrice: number;
}

interface Reservation {
  customerInformation: CustomerInformation;
  paymentInformation: PaymentInformation;
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;
}

const calculateTotalPrice = (checkIn: Date, checkOut: Date, pricePerDay: number): number => {
  const diffMs = checkOut.getTime() - checkIn.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays * pricePerDay;
};

const reservation1: Reservation = {
  customerInformation: { name: "Pam Shark", email: "pam@email.com", phone: "604-555-1234" },
  checkIn: new Date("2025-08-01"),
  checkOut: new Date("2025-08-05"),
  pricePerDay: 100,
  paymentInformation: {
    isPayed: true,
    totalPrice: calculateTotalPrice(new Date("2025-08-01"), new Date("2025-08-05"), 100),
  },
};

const reservation2: Reservation = {
  customerInformation: { name: "John Doe", email: "john@email.com", phone: "604-555-5678" },
  checkIn: new Date("2025-09-10"),
  checkOut: new Date("2025-09-13"),
  pricePerDay: 150,
  paymentInformation: {
    isPayed: false,
    totalPrice: calculateTotalPrice(new Date("2025-09-10"), new Date("2025-09-13"), 150),
  },
};

const reservation3: Reservation = {
  customerInformation: { name: "Jane Smith", email: "jane@email.com", phone: "604-555-9999" },
  checkIn: new Date("2025-10-01"),
  checkOut: new Date("2025-10-07"),
  pricePerDay: 200,
  paymentInformation: {
    isPayed: true,
    totalPrice: calculateTotalPrice(new Date("2025-10-01"), new Date("2025-10-07"), 200),
  },
};

const reservations: Reservation[] = [reservation1, reservation2, reservation3];

reservations.push({
  customerInformation: { name: "Bob Martin", email: "bob@email.com", phone: "604-555-0001" },
  checkIn: new Date("2025-11-01"),
  checkOut: new Date("2025-11-03"),
  pricePerDay: 120,
  paymentInformation: {
    isPayed: false,
    totalPrice: calculateTotalPrice(new Date("2025-11-01"), new Date("2025-11-03"), 120),
  },
});

console.log("=== All Reservations ===");
reservations.forEach((r, i) => {
  console.log(`\nReservation ${i + 1}:`);
  console.log("  Customer name:", r.customerInformation.name);
  console.log("  Check-in:", r.checkIn.toDateString());
  console.log("  Check-out:", r.checkOut.toDateString());
  console.log("  Price per day: CAD", r.pricePerDay);
  console.log("  Total price: CAD", r.paymentInformation.totalPrice);
  console.log("  Is payed:", r.paymentInformation.isPayed);
});