// ======================================================
// Design Pattern: Service Layer
// ======================================================
//
// Purpose:
// The Service Layer pattern moves business logic out of
// the Controller and into a dedicated Service class.
//
// This keeps Controllers small and focused while making
// business logic easier to reuse, test, and maintain.
//
// ======================================================



// ======================================================
// Where This Fits in an MVC Application
// ======================================================
//
//                  User
//                    │
//                    ▼
//                  View
//                    │
//                    ▼
//          OrderController   ← MVC Controller
//                    │
//                    ▼
//            OrderService    ← Service Layer
//                    │
//                    ▼
//               Order (Model)
//
// The View communicates with the Controller.
//
// The Controller delegates work to the Service.
//
// The Service performs the application's business logic.
//
// The completed Model is returned to the Controller,
// which then returns it to the View.
//
// ======================================================



// ======================================================
// Model
// ------------------------------------------------------
// Represents an Order in our application.
//
// Models are responsible for representing data.
// They should not contain the application's business
// workflow.
// ======================================================

class Order {
    constructor(customerName, items, total) {
        this.customerName = customerName;
        this.items = items;
        this.total = total;
    }
}



// ======================================================
// Service Layer
// ------------------------------------------------------
// This class contains the application's business logic.
//
// Instead of putting business rules inside the MVC
// Controller, we move them here.
//
// In this example the Service:
//
// • Validates the customer
// • Validates the order
// • Calculates the total
// • Creates an Order object
//
// The Controller simply delegates to this class.
// ======================================================

class OrderService {
    placeOrder(customerName, items) {

        if (!customerName) {
            throw new Error("Customer name is required.");
        }

        if (!items || items.length === 0) {
            throw new Error("An order must contain at least one item.");
        }

        const total = items.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

        return new Order(customerName, items, total);
    }
}



// ======================================================
// MVC Controller
// ------------------------------------------------------
// This is the same Controller you would have in an MVC
// application.
//
// Without the Service Layer, all of the business logic
// would likely live here.
//
// With the Service Layer, the Controller becomes much
// smaller.
//
// Its job is simply to:
//
// 1. Receive the request.
// 2. Delegate work to the Service.
// 3. Return the result.
//
// ======================================================

class OrderController {

    constructor(orderService) {
        this.orderService = orderService;
    }

    placeOrder(customerName, items) {
        return this.orderService.placeOrder(customerName, items);
    }
}



// ======================================================
// Demo
// ------------------------------------------------------
// Imagine a user clicks a "Place Order" button.
//
// The application flow is:
//
// User
//   │
//   ▼
// View
//   │
//   ▼
// OrderController
//   │
//   ▼
// OrderService
//   │
//   ▼
// Order
//
// ======================================================

const orderService = new OrderService();
const orderController = new OrderController(orderService);

const order = orderController.placeOrder("Alice", [
    { name: "Keyboard", price: 75 },
    { name: "Mouse", price: 50 }
]);

console.log("Order placed successfully.\n");

console.log(`Customer: ${order.customerName}\n`);

console.log("Items:");

order.items.forEach(item => {
    console.log(`- ${item.name}: $${item.price}`);
});

console.log(`\nTotal: $${order.total}`);