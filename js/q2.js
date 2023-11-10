// Given the following Array of employee objects
const employees = [
    {
        firstName: 'Amy',
        lastName: 'Adams',
        countries: ['Aruba', 'Austrailia', 'Argentina'],
        numberOfCountries: 3,
        numberOfTravelers: 4,
        totalCost: 32500
    },
    {
        firstName: 'Beth',
        lastName: 'Anderson',
        countries: ['Belize', 'Belgium', 'Barbados', 'Belarus'],
        numberOfCountries: 4,
        numberOfTravelers: 5,
        totalCost: 41000
    },
    {
        firstName: 'Chuck',
        lastName: 'Choi',
        countries: ['Canada', 'Cambodia', 'Cameroon'],
        numberOfCountries: 3,
        numberOfTravelers: 2,
        totalCost: 16300
    },
    {
        firstName: 'Dave',
        lastName: 'Chambers',
        countries: ['Denmark'],
        numberOfCountries: 1,
        numberOfTravelers: 1,
        totalCost: 4250
    },
    {
        firstName: 'Eric',
        lastName: 'Edelman',
        countries: ['Ecuador', 'Egypt', 'El Salvador'],
        numberOfCountries: 3,
        numberOfTravelers: 2,
        totalCost: 19750
    },
    {
        firstName: 'Fran',
        lastName: 'Edison',
        countries: ['Finland', 'France'],
        numberOfCountries: 2,
        numberOfTravelers: 3,
        totalCost: 23500
    },
    {
        firstName: 'Gina',
        lastName: 'Gonzalez',
        countries: ['Germany', 'Greece'],
        numberOfCountries: 2,
        numberOfTravelers: 4,
        totalCost: 26000
    },
    {
        firstName: 'Henry',
        lastName: 'Heart',
        countries: ['Hungary'],
        numberOfCountries: 1,
        numberOfTravelers: 1,
        totalCost: 3250
    }
];


// Given the following array of total cost options (used to populate drop down list options)
const totalCostOptions = [10000, 20000, 30000, 999999];


document.addEventListener("DOMContentLoaded", function () {
    // Populate drop down options
    const totalCostDropdown = document.getElementById("totalCost");
    totalCostOptions.forEach(cost => {
        const option = document.createElement("option");
        option.value = cost;
        option.textContent = cost;
        totalCostDropdown.appendChild(option);
    });

    // Display function
    function displayResults(array) {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        if (array.length === 0) {
            const warningDiv = document.createElement("div");
            warningDiv.style.color = "red";
            warningDiv.style.fontWeight = "bold";
            warningDiv.textContent = "No records match the criterion.";
            resultsDiv.appendChild(warningDiv);
        } else {
            const table = document.createElement("table");

            // Table borders
            table.style.border = "1px solid black";
            table.style.borderCollapse = "collapse";
            table.style.padding = "5px";

            // Create table body
            const tableBody = table.createTBody();
            array.forEach(employee => {
                const row = tableBody.insertRow();

                // Create table cells get value from array
                const cells = ["firstName", "lastName", "totalCost"];
                cells.forEach(cellName => {
                    const cell = row.insertCell();
                    cell.textContent = employee[cellName];
                    cell.style.border = "1px solid black"; //cell borders

                    // Set Total Cost background color
                    if (cellName === "totalCost") {
                        const cost = employee[cellName];
                        if (cost <= 10000) {
                            cell.style.backgroundColor = "lightgreen";
                        } else if (cost < 20000) {
                            cell.style.backgroundColor = "lightblue";
                        } else if (cost < 30000) {
                            cell.style.backgroundColor = "yellow";
                        } else if (cost < 999999) {
                            cell.style.backgroundColor = "lightcoral";
                        }
                    }
                });
            });

            resultsDiv.appendChild(table);
        }
    }

    // Display button click event
    const displayButton = document.getElementById("btnDisplay");
    displayButton.addEventListener("click", function () {
        const lastNameInput = document.getElementById("lName").value.toLowerCase();
        if (lastNameInput === '') {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = ""; // Clear previous results
            const warningDiv = document.createElement("div");
            warningDiv.style.color = "red";
            warningDiv.style.fontWeight = "bold";
            warningDiv.textContent = "Please enter a Last Name";
            resultsDiv.appendChild(warningDiv);
        } else {
            const filteredArray = employees.filter(employee => employee.lastName.toLowerCase().startsWith(lastNameInput));
            displayResults(filteredArray);
        }
    });

    // Total Cost select change event listener
    totalCostDropdown.addEventListener("change", function () {
        const selectedCost = parseInt(totalCostDropdown.value);
        if (isNaN(selectedCost)) {
            // If "Select total cost" is selected, clear the results
            displayResults([]);
        } else {
            const filteredArray = employees.filter(employee => employee.totalCost <= selectedCost);
            displayResults(filteredArray);
        }
    });
});

