function addNumbers() {
    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers!";
    } else {
        // Add the numbers and display the result
        const sum = num1 + num2;
        document.getElementById('result').innerText = "Result: " + sum;
    }
}
