# JavaScript Advanced

## Project Overview
This project delves into advanced JavaScript concepts under the guidance of Johann Kerbrat, Engineering Manager at Uber Works. The goal is to explore topics like lexical scoping, closures, callbacks, and execution stack, while creating practical code implementations.

### Instructor: Johann Kerbrat
### Weight: 1
### Manual QA Review: Required (Request it upon project completion)

---

## Learning Objectives
By the end of this project, you will be able to:
- Understand lexical scoping in JavaScript.
- Define and use closures effectively.
- Chain different closures.
- Simulate private methods using closures.
- Understand the execution stack order.
- Use binding in JavaScript.
- Work with callbacks for asynchronous programming.

---

## Requirements
- **Editors Allowed**: vi, vim, emacs, Visual Studio Code.
- **Code Standards**:
  - All files must end with a new line.
  - JavaScript files should use the `.js` extension.
  - A `README.md` file at the root of the project is mandatory.
- **Tools**: Use vanilla JavaScript. Frameworks like jQuery are not allowed.

---

## Tasks Overview

### Task 0: Lexical Scoping and Welcome Message
- Create a function `welcome` that takes two arguments (`firstName`, `lastName`) and displays a welcome alert.
- Use lexical scoping to handle a variable `fullName`.

### Task 1: Closure Scope Chain
- Implement nested functions (`outer`, `inner`, `inception`) to showcase closure and scope chaining.
- Alert messages include variables defined at different scopes.

### Task 2: Closure
- Use closures to create personalized welcome messages with variables `guillaume`, `alex`, and `fred`.

### Task 3: Closure and Loops
- Write a function `createClassRoom` that uses closures to manage student seat assignments.

### Task 4: Complex Closure
- Create `divideBy` and `addBy` functions, and use them to generate closures like `addBy100`, `divideBy10`, etc.

### Task 5: Changing DOM with Closure
- Write a function `changeMode` to style a webpage dynamically using closures.
- Create buttons for different themes (`Spooky`, `Dark Mode`, `Scream Mode`).

### Task 6: Private Methods with Closure
- Implement a `studentHogwarts` class with private methods and variables.
- Manage student scores using public methods.

### Task 7: Stack Order and setTimeout
- Explore JavaScript’s execution stack and event loop by logging events with `setTimeout`.

### Task 8: Stack Order in Functions
- Write `processPayment` and `processOrder` to demonstrate function execution order.

### Task 9: Prime Numbers and Timing Execution
- Implement `countPrimeNumbers` and measure execution time using the `performance` API.

### Task 10: Execution Stack and Timing Execution
- Enhance the prime number function to execute multiple times and measure its performance.

### Task 11: Changing Stack Order Using setTimeout
- Modify the prime number calculation to execute at the end of the stack using `setTimeout`.

### Task 12: Binding
- Use the `bind` method to calculate and return the area of a room.

### Task 13: Binding + Closure
- Bind a function to an object and log personalized welcome messages.

### Task 14: Simple Callback
- Fetch data from Wikipedia’s API using `XMLHttpRequest` and process it with a callback function.

---

## Repository Structure
```plaintext
holbertonschool-web_front_end
├── Javascript_advanced
    ├── 0-welcome.js
    ├── 1-nested_functions.js
    ├── 2-function_me.js
    ├── 3-classrooms.js
    ├── 4-math.js
    ├── 5-mode.js
    ├── 6-hogwarts.js
    ├── 7-timeout.js
    ├── 8-payments.js
    ├── 9-prime.js
    ├── 10-prime.js
    ├── 11-prime.js
    ├── 12-room_area.js
    ├── 13-bind_user.js
    └── 14-wikipedia.js
```

---

## How to Test
- Open the developer console in your browser to test tasks interactively.
- Run JavaScript files by pasting the code into the console or linking them to an HTML file.

---

## Resources
- **Lexical Scoping**: Learn how JavaScript determines variable accessibility.
- **Closure**: Understand the concept and practical use cases.
- **Call Stack**: Explore how JavaScript executes functions.
- **Binding**: Learn about `this` and binding functions to objects.
- **Callbacks**: Master asynchronous programming using callbacks.
