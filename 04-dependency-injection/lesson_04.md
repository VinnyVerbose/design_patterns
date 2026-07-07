# Dependency Injection

## Overview

Dependency Injection is a pattern where an object receives the other objects it depends on from the outside instead of creating them internally.

A dependency is anything a class needs in order to do its job.

For example, an `OrderService` may need an `OrderRepository` so it can save orders.

Without Dependency Injection, the service creates the repository itself.

With Dependency Injection, the repository is passed into the service.

---

# The Problem

Imagine an `OrderService` that creates its own repository internally.

```text
OrderService
    └── creates OrderRepository itself
```

This creates tight coupling.

The service is now directly tied to one specific repository implementation. That makes the code harder to change and harder to test.

For example, if you want to replace the in-memory repository with a database repository, you must modify the `OrderService` class itself.

---

# The Solution

Dependency Injection moves object creation outside the class.

Instead of this:

```text
OrderService creates OrderRepository
```

You do this:

```text
OrderRepository is created elsewhere
OrderRepository is passed into OrderService
```

The service no longer controls which repository it uses. It simply receives one.

```text
Application Setup
        │
        ▼
OrderRepository
        │
        ▼
OrderService
```

This makes the class more flexible, reusable, and testable.

---

# Structure

## Client Class

The class that needs a dependency.

Example:

```text
OrderService
```

The service needs a repository to save orders.

---

## Dependency

The object being used by another class.

Example:

```text
OrderRepository
```

The repository is the dependency.

---

## Injection Point

The place where the dependency is passed in.

Most commonly, this is the constructor.

```text
constructor(orderRepository)
```

---

## Composition Root

The place where objects are created and wired together.

In a small JavaScript example, this is usually the bottom of the file.

In a real application, it may be part of application startup or framework configuration.

---

# Example Workflow

```text
Application Setup
    │
    ├── Create OrderRepository
    │
    ├── Create OrderService and pass in OrderRepository
    │
    └── Create OrderController and pass in OrderService
```

The classes do not create their own dependencies. They receive them.

---

# When to Use

Use Dependency Injection when:

* A class depends on another class.
* You want to reduce tight coupling.
* You want to make classes easier to test.
* You may swap one implementation for another.
* You want object creation separated from business logic.

---

# When Not to Use

Dependency Injection may be unnecessary when:

* The project is very small.
* The dependency is simple and unlikely to change.
* Adding injection would make the code harder to understand.
* There is no need for testing or swapping implementations.

---

# Advantages

* Reduces tight coupling.
* Makes dependencies visible.
* Makes classes easier to test.
* Makes implementations easier to replace.
* Keeps object creation separate from business logic.
* Works well with MVC, Repository, and Service Layer patterns.

---

# Disadvantages

* Adds extra setup code.
* Can feel indirect at first.
* Large applications may need a dependency injection container.
* Poorly organized dependency wiring can become confusing.

---

# Common Mistakes

## Creating the Dependency Internally

This defeats the purpose of Dependency Injection.

```text
OrderService creates OrderRepository inside itself
```

The dependency should be passed in from the outside.

---

## Injecting Too Many Dependencies

If a class needs many dependencies, it may be doing too much.

This is often a sign that the class should be split into smaller classes.

---

## Confusing Dependency Injection with a Framework

Dependency Injection does not require a framework.

A constructor parameter is enough.

---

# Key Takeaways

* Dependency Injection means passing dependencies into a class from the outside.
* It reduces coupling between classes.
* It makes code easier to test and modify.
* Constructor injection is the most common form.
* Dependency Injection separates object creation from object behavior.
