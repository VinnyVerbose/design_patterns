class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// In this example the data is being stored in the repository object itself
// Normally there would be querys to a database instead

class CustomerRepository {
  constructor() {
    this.customers = [];
  }

  save(customer) {
    this.customers.push(customer);
    return customer;
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

// Demo

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