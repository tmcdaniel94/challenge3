// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const fname = prompt("Enter the first name of the employee");
  const lname = prompt('Enter the last name of the employee');
  const salary1 = prompt("Enter the salary of the employee");
  let parsedSalary = parseFloat(salary1);

  if (isNaN(parsedSalary)) {
    parsedSalary = 0;
  };

  const employee = {
    firstName: fname,
    lastName: lname,
    salary: parsedSalary
  };

  employeesArray.push(employee);

  const confirmAdd = confirm("Would you like to add another employee?");

  if (confirmAdd === true) {
    collectEmployees();
  }
  else {
  }
  return employeesArray;
};

console.log(employeesArray);

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  let employees = employeesArray.length
  // TODO: Calculate and display the average salary
  //1. record salaries from arrays
  //2. add salaries
  //3. divide salaries by length
  //4. record final number
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary
  }
  let avgSalary = totalSalary / employees
  console.log('The average employee salary between our ' + employees + ' employee(s) is ' + parseInt(avgSalary));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const random1 = employeesArray[(Math.floor(Math.random() * (employeesArray.length)))];
  let winnerfirst = random1.firstName + ' ' + random1.lastName;
  console.log(random1);
  console.log('Congratulations to ' + winnerfirst + ', our random drawing winner!');
};


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
 console.log(employees);
 console.log(typeof employees);

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
