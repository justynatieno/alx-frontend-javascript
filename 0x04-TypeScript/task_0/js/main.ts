/** Renders table based on a list of objects */

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: 'Justine',
  lastName: 'Atieno',
  age: 25,
  location: 'Kisumu',
}

const studentB: Student = {
  firstName: 'Lilian',
  lastName: 'OMwandho',
  age: 26,
  location: 'Nairobi',
}

const studentList = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
