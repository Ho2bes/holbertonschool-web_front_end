// Define a global variable
const globalVariable = "Welcome";

// Define the outer function
function outer() {
    alert(globalVariable);

    // Define a variable local to outer
    const course = "Holberton";

    // Define the inner function
    function inner() {
        alert(`${globalVariable} ${course}`);

        // Define a variable local to inner
        const exclamation = "!";

        // Define the inception function
        function inception() {
            alert(`${globalVariable} ${course}${exclamation}`);
        }

        // Call inception inside inner
        inception();
    }

    // Call inner inside outer
    inner();
}

// Call outer in the main code
outer(); // Should display three alerts with "Welcome", "Welcome Holberton", and "Welcome Holberton!"
