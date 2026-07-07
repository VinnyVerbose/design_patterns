// ======================================================
// Design Pattern: Service Layer
// ======================================================
//
// Prerequisites:
// - MVC Controller
// - Repository Pattern
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
//          OrderRepository   ← Repository Pattern
//                    │
//                    ▼
//             In-Memory Array
//
// The View communicates with the Controller.
//
// The Controller delegates work to the Service.
//
// The Service performs the application's business logic.
//
// The Repository handles data access.
//
// ======================================================



// ======================================================
// Model
// ------------------------------------------------------
// Represents an Order in our application.
// ======================================================

class Order {
    constructor(id, customerName, items, total) {
        this.id = id;
        this.customerName = customerName;
        this.items = items;
        this.total = total;
    }
}



// ======================================================
// Repository
// ------------------------------------------------------
// Responsible for storing and retrieving Orders.
// ======================================================

class OrderRepository {
    constructor() {
        this.orders = [];
    }

    save(order) {
        this.orders.push(order);
    }

    findAll() {
        return this.orders;
    }
}



// ======================================================
// Service Layer
// ------------------------------------------------------
// Responsible for business logic.
//
// In this example, the Service:
//
// • Validates the customer
// • Validates the order
// • Calculates the total
// • Creates an Order
// • Saves the Order using the Repository
//
// ======================================================

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
        this.nextId = 1;
    }

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

        const order = new Order(this.nextId, customerName, items, total);

        this.nextId++;

        this.orderRepository.save(order);

        return order;
    }
}



// ======================================================
// MVC Controller
// ------------------------------------------------------
// Receives the request and delegates to the Service.
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
// ======================================================

const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

const order = orderController.placeOrder("Alice", [
    { name: "Keyboard", price: 75 },
    { name: "Mouse", price: 50 }
]);

console.log("Order placed successfully.\n");

console.log(`Order ID: ${order.id}`);
console.log(`Customer: ${order.customerName}\n`);

console.log("Items:");

order.items.forEach(item => {
    console.log(`- ${item.name}: $${item.price}`);
});

console.log(`\nTotal: $${order.total}`);

console.log("\nAll saved orders:");
console.log(orderRepository.findAll());