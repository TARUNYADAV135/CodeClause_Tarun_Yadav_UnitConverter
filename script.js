var formData = [];
  
    // Get the form element
    var form = document.getElementById("myForm");
  
    // Listen for the form submission event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the input values
      var name = document.getElementById("naam").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
  
      // Create an object to hold the form data
      var data = {
        name: name,
        email: email,
        phone: phone
      };
  
      // Push the data object into the formData array
      formData.push(data);
  
      // Optional: Print the formData array to the console
      console.log(formData);
  
      // Optional: Clear the form inputs
      form.reset();
    });


  
  
function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    
    var result;
    
    if (fromUnit === "meters" && toUnit === "feet") {
      result = inputValue * 3.281;
    } else if (fromUnit === "feet" && toUnit === "meters") {
      result = inputValue / 3.281;
    } else {
      result = inputValue; // Return the same value if units are the same
    }
    
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit;
  }
// Function to convert length
function convertLength() {
    // Get input values
    const length = parseFloat(document.getElementById('length-input').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;
  
    // Define conversion factors
    const conversions = {
      meter: 1,
      kilometer: 0.001,
      mile: 0.000621371,
      millimeter: 1000,
      micrometer: 1000000,
      nanometer: 1000000000,
      yard: 1.09361,
      foot: 3.28084,
      inch: 39.3701,
      lightyear: 1.057e-16
    };
  
    // Perform conversion
    const result = length * conversions[fromUnit] / conversions[toUnit];
  
    // Display the result
    document.getElementById('length-result').innerHTML = `${length} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
  
  // Add event listener to the conversion button
  document.getElementById('length-convert').addEventListener('click', convertLength);
// Function to convert temperature
function convertTemperature() {
    // Get input values
    const temperature = parseFloat(document.getElementById('temperature-input').value);
    const fromUnit = document.getElementById('temperature-from').value;
    const toUnit = document.getElementById('temperature-to').value;
  
    // Convert to Celsius
    let celsius;
    if (fromUnit === 'celsius') {
      celsius = temperature;
    } else if (fromUnit === 'kelvin') {
      celsius = temperature - 273.15;
    } else if (fromUnit === 'fahrenheit') {
      celsius = (temperature - 32) * 5 / 9;
    }
  
    // Convert to desired unit
    let result;
    if (toUnit === 'celsius') {
      result = celsius;
    } else if (toUnit === 'kelvin') {
      result = celsius + 273.15;
    } else if (toUnit === 'fahrenheit') {
      result = (celsius * 9 / 5) + 32;
    }
  
    // Display the result
    document.getElementById('temperature-result').innerHTML = `${temperature} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
  
  // Add event listener to the conversion button
  document.getElementById('temperature-convert').addEventListener('click', convertTemperature);


  // Function to convert area
function convertArea() {
    // Get input values
    const area = parseFloat(document.getElementById('area-input').value);
    const fromUnit = document.getElementById('area-from').value;
    const toUnit = document.getElementById('area-to').value;
  
    // Define conversion factors
    const conversions = {
      'square-meter': 1,
      'square-kilometer': 0.000001,
      'square-mile': 0.000000386102,
   
    };
  
    // Perform conversion
    const result = area * conversions[fromUnit] / conversions[toUnit];
  
    // Display the result
    document.getElementById('area-result').innerHTML = `${area} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
  
  // Add event listener to the conversion button
  document.getElementById('area-convert').addEventListener('click', convertArea);
  // Function to convert volume
function convertVolume() {
    // Get input values
    const volume = parseFloat(document.getElementById('volume-input').value);
    const fromUnit = document.getElementById('volume-from').value;
    const toUnit = document.getElementById('volume-to').value;
  
    // Define conversion factors
    const conversions = {
      'cubic-meter': 1,
      'liter': 1000,
      'gallon': 264.172,
     
    };
  
    // Perform conversion
    const result = volume * conversions[fromUnit] / conversions[toUnit];
  
    // Display the result
    document.getElementById('volume-result').innerHTML = `${volume} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
  
  // Add event listener to the conversion button
  document.getElementById('volume-convert').addEventListener('click', convertVolume);
// Function to convert weight
function convertWeight() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight-input').value);
    const fromUnit = document.getElementById('weight-from').value;
    const toUnit = document.getElementById('weight-to').value;
  
    // Define conversion factors
    const conversions = {
      'kilogram': 1,
      'gram': 1000,
      'pound': 2.20462,
    
    };
  
    // Perform conversion
    const result = weight * conversions[fromUnit] / conversions[toUnit];
  
    // Display the result
    document.getElementById('weight-result').innerHTML = `${weight} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
  
  // Add event listener to the conversion button
  document.getElementById('weight-convert').addEventListener('click', convertWeight);
// Function to convert time
function convertTime() {
    // Get input values
    const time = parseFloat(document.getElementById('time-input').value);
    const fromUnit = document.getElementById('time-from').value;
    const toUnit = document.getElementById('time-to').value;
  
    // Define conversion factors
    const conversions = {
      'seconds': 1,
      'minutes': 1 / 60,
      'hours': 1 / 3600,
      
    };
  
    // Perform conversion
    const result = time * conversions[fromUnit] / conversions[toUnit];
  
    // Display the result
    document.getElementById('time-result').innerHTML = `${time} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
  
  // Add event listener to the conversion button
  document.getElementById('time-convert').addEventListener('click', convertTime);
  window.onscroll = function () {
    var scrollBtn = document.getElementById("scroll-up-btn");

    if (document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.documentElement.scrollTop = 0;}      
