console.log("Welcome to FUND System!");
// This is a simple script to log a welcome message to the console

// Displaye Available FUND Balance
if(!localStorage.getItem('FUND')) {
    localStorage.setItem('FUND', 3000); // Initialize FUND if not set
}

displayFUND = () =>{
    const FUND = parseFloat(localStorage.getItem('FUND')); // Get the current FUND value
    const robin = localStorage.getItem('ROBIN') ? parseFloat(localStorage.getItem('ROBIN')) : 0; // Get Robin's value or initialize to 0
    const sujon = localStorage.getItem('SUJON') ? parseFloat(localStorage.getItem('SUJON')) : 0; // Get Sujon's value or initialize to 0
    const PIASH = localStorage.getItem('PIASH') ? parseFloat(localStorage.getItem('PIASH')) : 0; // Get Piash's value or initialize to 0
    // Display the FUND value in the HTML element
    document.getElementById('fund-display').innerHTML = `<h2>৳ ${FUND}</h2>`; // Display the FUND value in the HTML element
    document.getElementById('fund-display').style.color = 'green'; // Set the color of the display to green
    document.getElementById('ROBIN').innerHTML = `<h3>ROBIN = ৳ ${robin}</h3>`; // Display Robin's value in the HTML element
    document.getElementById('SUJON').innerHTML = `<h3>SUJON = ৳ ${sujon}</h3>`; // Display Sujon's value in the HTML element
    document.getElementById('PIASH').innerHTML = `<h3>PIASH = ৳ ${PIASH}</h3>`; // Display Piash's value in the HTML element
}
displayFUND(); // Call the function to display the initial FUND amount

// const FUND = parseFloat(localStorage.getItem('FUND')); // Initial FUND amount

// localStorage.setItem('FUND', FUND); // Store the initial FUND in localStorage

// Function to add cost to the FUND
// Add an event listener to Add Cost when a button is clicked

document.getElementById('add-cost').onclick = () =>{
    const userName = document.getElementById('cost-select').value;
    const cost = parseFloat(document.getElementById('amount-input').value);
    // Check if the user is not exit, then make sure to initialize their value in localStorage
    if(localStorage.getItem(userName) === null) {
        localStorage.setItem(userName, 0); // Initialize user value if not set
    }
    
    let currentValue = parseFloat(localStorage.getItem(userName));
    let FUND = parseFloat(localStorage.getItem('FUND')); // Get the current FUND value
    if ( cost > FUND ) {
        alert("Insufficient FUND balance!"); // Alert if the cost exceeds the available FUND
        return; // Exit the function if insufficient funds
    }
    FUND -= cost; // Deduct the cost from the FUND
    localStorage.setItem('FUND', FUND); // Store the updated FUND in localStorage
    currentValue += cost; // Update the current value
    localStorage.setItem(userName, currentValue); // Store the updated value in localStorage

    document.getElementById('amount-input').value = ''; // Clear the input field after adding cost
    displayFUND(); // Call the function to display the updated FUND amount
}

document.getElementById('add-fund').onclick = () => {
    const userName = document.getElementById('fund-select').value;
    const fund = parseFloat(document.getElementById('fund-amount-input').value);
    // Check if the user is not exit, then make sure to initialize their value in localStorage
    if(localStorage.getItem(userName) === null) {
        localStorage.setItem(userName, 0); // Initialize user value if not set
    }

    let currentValue = parseFloat(localStorage.getItem(userName));
    let FUND = parseFloat(localStorage.getItem('FUND')); // Get the current FUND value

    currentValue -= fund; // Update the current value
    FUND += fund; // Add the fund to the total FUND
    localStorage.setItem('FUND', FUND); // Store the updated FUND in localStorage
    localStorage.setItem(userName, currentValue); // Store the updated value in localStorage

    document.getElementById('fund-amount-input').value = ''; // Clear the input field after adding fund
    displayFUND(); // Call the function to display the updated FUND amount
}


let currentFUND = FUND; // Variable to track current FUND
function displayFUND() {
    console.log(`Current FUND: $${currentFUND}`);
}
