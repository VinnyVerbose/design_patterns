# MVC Architecture (Model–View–Controller)

## Goal

Understand what MVC is, why it exists, and how it helps organize web applications using Object-Oriented Programming.

---

# The Problem MVC Solves

Imagine building an application without any structure.

A button click:

- Reads data
- Updates data
- Generates HTML
- Talks to the database
- Handles validation

All inside one giant file.

As applications grow, this becomes difficult to:

- Maintain
- Debug
- Test
- Extend

MVC solves this by separating responsibilities.

---

# What MVC Stands For

MVC =

- Model
- View
- Controller

Each part has a single responsibility.

---

# Model

The **Model** represents the application's data and business rules.

The Model is responsible for:

- Storing data
- Retrieving data
- Updating data
- Validation
- Business logic

The Model does **not** know anything about:

- HTML
- CSS
- User interfaces

### Examples

User

Product

Order

Project

Todo

---

### Think Of The Model As

> "The source of truth."

If an application stores projects, the Project model would know:

- project name
- status
- last modified date
- archived date

---

# View

The **View** is what the user sees.

Responsibilities:

- Display data
- Render UI
- Show forms
- Show pages

The View should not contain business logic.

---

### Examples

Project List Page

Project Details Page

Login Page

Dashboard

---

### Think Of The View As

> "The presentation layer."

Its job is simply:

"Here is the data. Show it."

---

# Controller

The **Controller** acts as the middleman.

Responsibilities:

- Receive user requests
- Talk to Models
- Choose which View to render
- Coordinate application flow

The Controller does not store data itself.

---

### Think Of The Controller As

> "The traffic cop."

It tells everything where to go.

---

# MVC Request Flow

When a user visits a page:

```text
User
  |
  v
Controller
  |
  v
Model
  |
  v
Controller
  |
  v
View
  |
  v
User
```

---

# Example Flow

User visits:

```text
/projects
```

### Step 1

Request reaches:

```text
ProjectController
```

### Step 2

Controller asks:

```text
ProjectModel
```

for all projects.

### Step 3

Model returns:

```text
[
  Project A,
  Project B,
  Project C
]
```

### Step 4

Controller passes data to:

```text
ProjectListView
```

### Step 5

View generates HTML.

### Step 6

User sees page.

---

# Folder Structure

A typical MVC application might look like:

```text
src/
|
├── models/
│   ├── Project.js
│   └── User.js
|
├── views/
│   ├── ProjectListView.js
│   └── ProjectDetailsView.js
|
├── controllers/
│   ├── ProjectController.js
│   └── UserController.js
|
└── app.js
```

---

# MVC and OOP

MVC works extremely well with OOP.

Each major concept becomes a class.

Example:

```text
Project
```

becomes:

```text
ProjectModel
```

A page handler becomes:

```text
ProjectController
```

A rendered page becomes:

```text
ProjectView
```

Each object has one responsibility.

This follows the SOLID principles you've already learned, especially:

### Single Responsibility Principle

Model:
- Data

View:
- Presentation

Controller:
- Application flow

---

# Benefits of MVC

### Separation of Concerns

Everything has a clear job.

### Easier Maintenance

You know exactly where code belongs.

### Easier Testing

Models and Controllers can be tested independently.

### Scalability

Applications can grow without becoming chaotic.

### Team Friendly

Frontend developers can focus on Views.

Backend developers can focus on Models and Controllers.

---

# Common Beginner Mistakes

## 1. Putting Business Logic in Views

Bad:

```text
View decides whether a project is archived.
```

Good:

```text
Model determines archive status.
View displays result.
```

---

## 2. Fat Controllers

Bad:

```text
Controller contains hundreds of lines of business logic.
```

Good:

```text
Controller coordinates.
Models perform work.
```

---

## 3. Models Generating HTML

Bad:

```text
ProjectModel builds HTML.
```

Good:

```text
ProjectModel returns data.
View builds HTML.
```

---

# Mental Model

When you are unsure where code belongs:

Ask:

### Is it data or business rules?

→ Model

### Is it displaying information?

→ View

### Is it handling a request and coordinating work?

→ Controller

---

# MVC Cheat Sheet

| Component | Responsibility |
|------------|----------------|
| Model | Data and business logic |
| View | User interface |
| Controller | Coordinates requests and responses |

---

# Interview Definition

> MVC (Model-View-Controller) is an architectural pattern that separates an application into three components: Models manage data and business logic, Views handle presentation, and Controllers coordinate user requests and application flow. This separation improves maintainability, scalability, and testability.

---

# What To Learn Next

Before building MVC applications, make sure you can identify:

1. What is a Model?
2. What is a View?
3. What is a Controller?
4. Why does each exist?
5. Where should code belong?

Once those are clear, the next step is designing a small MVC application from scratch and identifying each layer before writing any code.