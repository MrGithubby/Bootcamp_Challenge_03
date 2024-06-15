// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employeesArray = [] // Array to hold the values of responses.
let promptRunning = true // Variable to determine whether to continue running the function or not. 

// TODO: Get user input to create and return an array of employee objects

// Collect Employee Information
const collectEmployees = function() {
  let employeeInfo = { 
    firstName: "",
    lastName: "",
    salary: undefined
  };
// Define the Employee Info Object?
  employeeInfo.firstName = prompt("Enter your first name:");
  employeeInfo.lastName = prompt("Enter your last name:");
  employeeInfo.salary = prompt("Enter your salary:");
  employeesArray.push(employeeInfo)

// Prompt the User to Continue Running?
  userContinues = confirm("Do you want to add another Employee?")
  if (!userContinues){
    console.log("User clicked Cancel.");
    promptRunning = false;
  }
}; 

// while(promptRunning){
//   collectEmployees();
// } 


// Display the average salary
const displayAverageSalary = function() {
  let employeeSalary = 0;
  if (employeesArray.length === 0){
    return 0;
  } else {
    for (let i = 0; i<employeesArray.length; i++){
      employeeSalary += employeesArray[i].salary;
    }
    employeeSalary = employeeSalary / (i+1)
    return employeeSalary
  } 
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
