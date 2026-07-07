// ======================================================
// Design Pattern: Dependency Injection
// ======================================================
//
// Prerequisites:
// - Repository Pattern
// - Service Layer
// - MVC Controller
//
// Purpose:
// Dependency Injection means giving a class the objects it
// depends on instead of having the class create them itself.
//
// This reduces tight coupling and makes code easier to
// test, change, and reuse.
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
//          OrderController
//                    │
//                    ▼
//            OrderService
//                    │
//                    ▼
//          OrderRepository
//
// Dependency Injection happens when we create these objects:
//
// const repository = new OrderRepository();
// const service = new OrderService(repository);
// const controller = new OrderController(service);
//
// The Service receives the Repository.
// The Controller receives the Service.
//
// Neither class creates its own dependency internally.
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
// Stores and retrieves Orders.
//
// In a larger application, this could be replaced with a
// database repository without changing OrderService.
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
// Contains business logic.
//
// Dependency Injection appears in the constructor:
//
// constructor(orderRepository)
//
// OrderService does NOT create OrderRepository itself.
// It receives an OrderRepository from the outside.
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
// Receives requests and delegates work to the Service.
//
// Dependency Injection appears in the constructor:
//
// constructor(orderService)
//
// OrderController does NOT create OrderService itself.
// It receives an OrderService from the outside.
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
// Demo / Composition Root
// ------------------------------------------------------
// The "composition root" is where objects are created and
// wired together.
//
// In this small example, it is the bottom of the file.
//
// In a larger application, this might happen during app
// startup or inside framework configuration.
//
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