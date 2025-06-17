console.log("Welcome to FUND System!");
// This is a simple script to log a welcome message to the console

const FUND = 3000; // Initial FUND amount

localStorage.setItem('FUND', FUND); // Store the initial FUND in localStorage

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
    
    currentValue += cost; // Update the current value
    localStorage.setItem(userName, currentValue); // Store the updated value in localStorage

}

document.getElementById('add-fund').onclick = () => {
    const userName = document.getElementById('fund-select').value;
    const fund = parseFloat(document.getElementById('fund-amount-input').value);
    // Check if the user is not exit, then make sure to initialize their value in localStorage
    if(localStorage.getItem(userName) === null) {
        localStorage.setItem(userName, 0); // Initialize user value if not set
    }

    let currentValue = parseFloat(localStorage.getItem(userName));

    currentValue -= fund; // Update the current value
    localStorage.setItem(userName, currentValue); // Store the updated value in localStorage

}

let currentFUND = FUND; // Variable to track current FUND
function displayFUND() {
    console.log(`Current FUND: $${currentFUND}`);
}

displayFUND(); // Display the initial FUND amount