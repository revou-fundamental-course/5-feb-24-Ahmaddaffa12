// js/script.js

// Get the elements from the document
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
var convert = document.getElementById("convert");
var reset = document.getElementById("reset");
var reverse = document.getElementById("reverse");
var result = document.getElementById("result");
var formula = document.getElementById("formula");
var explanation = document.getElementById("explanation");

// Define the conversion functions
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

// Define the validation function
function validateInput() {
  // Check if both inputs are empty
  if (celsius.value === "" && fahrenheit.value === "") {
    alert("Masukkan suhu dalam salah satu kolom");
    return false;
  }
  // Check if both inputs are filled
  if (celsius.value !== "" && fahrenheit.value !== "") {
    alert("Hanya masukkan suhu dalam satu kolom saja");
    return false;
  }
  // Check if the input is a valid number
  if (isNaN(celsius.value) || isNaN(fahrenheit.value)) {
    alert("Masukkan suhu dalam bentuk angka");
    return false;
  }
  // If everything is OK, return true
  return true;
}

// Define the conversion function
function convert() {
  // Validate the input first
  if (validateInput()) {
    // If the celsius input is filled, convert it to fahrenheit
    if (celsius.value !== "") {
      var c = parseFloat(celsius.value); // Parse the input as a number
      var f = celsiusToFahrenheit(c); // Convert it to fahrenheit
      fahrenheit.value = f.toFixed(2); // Display the result with two decimal places
      // Show the formula and the explanation
      formula.innerHTML = c + "°C * (9/5) + 32 = " + f + "°F";
      explanation.innerHTML =
        "Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celsius (°C) kali 9/5 tambah 32.";
    }
    // If the fahrenheit input is filled, convert it to celsius
    if (fahrenheit.value !== "") {
      var f = parseFloat(fahrenheit.value); // Parse the input as a number
      var c = fahrenheitToCelsius(f); // Convert it to celsius
      celsius.value = c.toFixed(2); // Display the result with two decimal places
      // Show the formula and the explanation
      formula.innerHTML = "(" + f + "°F - 32) * 5/9 = " + c + "°C";
      explanation.innerHTML =
        "Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32 kali 5/9.";
    }
    // Show the result div
    result.style.display = "block";
  }
}

// Define the reverse function
function reverse() {
  // Swap the values of the inputs
  var temp = celsius.value;
  celsius.value = fahrenheit.value;
  fahrenheit.value = temp;
  // If the result div is visible, convert again
  if (result.style.display === "block") {
    convert();
  }
}
