// ======================================================
// Design Pattern: Repository
// ======================================================
//
// Purpose:
// The Repository pattern moves data access logic into a
// dedicated Repository class.
//
// Instead of allowing Controllers, Services, or other
// parts of the application to directly manage storage,
// they ask the Repository to save, find, update, or delete
// data.
//
// This keeps data access logic centralized and easier to
// change, test, and maintain.
//
// ======================================================



// ======================================================
// Where This Fits in an Application
// ======================================================
//
//                  Application Code
//                         │
//                         ▼
//                CustomerRepository   ← Repository Pattern
//                         │
//                         ▼
//                  In-Memory Array
//
// In a real application, the Repository might communicate
// with:
//
// - A database
// - A JSON file
// - An external API
// - Browser localStorage
//
// For this example, we use an in-memory array so the focus
// stays on the Repository pattern itself.
//
// ======================================================



// ======================================================
// Model
// ------------------------------------------------------
// Represents a Customer in our application.
//
// The Model is responsible for holding customer data.
// It does not know how it is stored.
// ======================================================

class Customer {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}



// ======================================================
// Repository
// ------------------------------------------------------
// This class is responsible for data access.
//
// It hides the details of how customers are stored.
//
// The rest of the application does not need to know
// whether customers are stored in an array, database,
// file, or external API.
//
// In this example, the Repository:
//
// • Saves customers
// • Finds one customer by ID
// • Returns all customers
// • Deletes customers by ID
//
// ======================================================

class CustomerRepository {
    constructor() {
        this.customers = [];
    }

    save(customer) {
        this.customers.push(customer);
    }

    findById(id) {
        return this.customers.find(customer => customer.id === id);
    }

    findAll() {
        return this.customers;
    }

    deleteById(id) {
        this.customers = this.customers.filter(customer => customer.id !== id);
    }
}



// ======================================================
// Demo
// ------------------------------------------------------
// Imagine some part of the application needs to store and
// retrieve customers.
//
// Instead of directly working with the storage mechanism,
// it uses CustomerRepository.
//
// Application Code
//        │
//        ▼
// CustomerRepository
//        │
//        ▼
// In-Memory Array
//
// ======================================================

const customerRepository = new CustomerRepository();

const customer1 = new Customer(1, "Alice", "alice@example.com");
const customer2 = new Customer(2, "Bob", "bob@example.com");

customerRepository.save(customer1);
customerRepository.save(customer2);

console.log("All customers:");
console.log(customerRepository.findAll());

console.log("\nFind customer by ID:");
console.log(customerRepository.findById(1));

customerRepository.deleteById(2);

console.log("\nAfter deleting Bob:");
console.log(customerRepository.findAll());