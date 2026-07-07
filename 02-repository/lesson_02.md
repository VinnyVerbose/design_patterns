# Repository Pattern

## Overview

The Repository pattern separates an application's business logic from its data access logic. Rather than allowing other parts of the application to read from or write to a database directly, they interact with a repository.

A repository provides a simple interface for storing and retrieving objects while hiding the details of where and how the data is stored.

This separation makes applications easier to maintain, test, and modify.

---

# The Problem

Imagine you're building an application that stores customer information.

Without a Repository, every class that needs customer data is responsible for accessing the database itself.

For example, a controller might:

* Open a database connection.
* Execute a SQL query.
* Convert the database rows into objects.
* Return the results.

```text
CustomerController
    ├── Connect to database
    ├── Execute SQL query
    ├── Create Customer objects
    └── Return results
```

If another controller also needs customer data, it often repeats the same process.

Now your application has database code scattered throughout multiple classes.

This creates several problems:

* Code is duplicated.
* Database queries become difficult to maintain.
* Switching to a different database requires changes in many places.
* Testing becomes more difficult because business logic depends directly on the database.

---

# The Solution

The Repository pattern moves all data access into a dedicated repository class.

Instead of communicating with the database directly, other parts of the application ask the repository to perform data operations.

```text
CustomerController
        │
        ▼
CustomerRepository
        │
        ▼
Database
```

Now the controller doesn't need to know anything about SQL, files, APIs, or database connections.

It simply asks the repository for the data it needs.

---

# Structure

A typical Repository pattern consists of three primary components.

## Model

Represents the application's data.

Example:

```text
Customer
```

The model contains the information being stored.

---

## Repository

Responsible for all data access.

Typical responsibilities include:

* Saving objects
* Finding objects
* Updating objects
* Deleting objects

The repository hides the implementation details of the data source.

---

## Client

The client is any class that uses the repository.

Examples include:

* Controllers
* Services
* Background jobs
* Command-line applications

The client knows how to use the repository but does not know how the repository stores data.

---

# Example Workflow

Suppose a controller needs to retrieve every customer.

```text
User
    │
    ▼
CustomerController
    │
    ▼
CustomerRepository
    │
    ▼
Database
```

The controller simply requests the customers.

The repository performs the database operation and returns the results.

---

# When to Use

Use the Repository pattern when:

* Multiple parts of the application access the same data.
* You want to separate business logic from data access.
* Your application may change data sources in the future.
* You want to make your code easier to test.
* Your application is growing in complexity.

---

# When Not to Use

A Repository may be unnecessary when:

* Writing a very small script.
* Building a short-lived prototype.
* The application stores only a small amount of temporary data.
* Separating data access would add unnecessary complexity.

---

# Advantages

* Centralizes data access.
* Reduces duplicated database code.
* Hides implementation details.
* Makes code easier to test.
* Makes changing data sources simpler.
* Encourages separation of responsibilities.

---

# Disadvantages

* Introduces additional classes.
* Can feel like unnecessary abstraction in very small applications.
* Poorly designed repositories can become large if they manage unrelated data.

---

# Common Mistakes

## Putting Business Logic in the Repository

Repositories should retrieve and store data.

Business decisions belong elsewhere, typically in a Service Layer.

---

## Exposing Database Details

Clients should not need to know whether data comes from:

* SQL
* NoSQL
* A JSON file
* An external API
* An in-memory collection

The repository hides these implementation details.

---

## Creating One Repository for Everything

Repositories should be organized around a specific type of data.

Examples:

* CustomerRepository
* OrderRepository
* ProductRepository

Avoid creating a single repository responsible for every object in the application.

---

# Key Takeaways

* The Repository pattern centralizes data access.
* Clients communicate with repositories instead of directly accessing the data source.
* Repositories hide storage implementation details.
* Separating data access improves maintainability, testability, and flexibility.
* A repository manages persistence, not business rules.
