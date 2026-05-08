// Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create 2 student variables
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Kigali',
};

// Store in array
const studentsList: Student[] = [student1, student2];

// Create table using Vanilla JS
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const thFirstName: HTMLTableCellElement = document.createElement('th');
thFirstName.textContent = 'First Name';

const thLocation: HTMLTableCellElement = document.createElement('th');
thLocation.textContent = 'Location';

headerRow.appendChild(thFirstName);
headerRow.appendChild(thLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const tdFirstName: HTMLTableCellElement = document.createElement('td');
  tdFirstName.textContent = student.firstName;

  const tdLocation: HTMLTableCellElement = document.createElement('td');
  tdLocation.textContent = student.location;

  row.appendChild(tdFirstName);
  row.appendChild(tdLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);