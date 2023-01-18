const student1 = {
    firstName: "Becky",
    lastName: "Jones",
    age: 20,
    location: "Spain"
};
const student2 = {
    firstName: "Miles",
    lastName: "Bush",
    age: 21,
    location: "France"
};
const studentsList = [student1, student2];
const body = document.querySelector('body');
const table = document.createElement('table');
const row = document.createElement('tr');
row.innerHTML = `<tr><th>Firstname</th><th>Location</th></tr>`;
table.appendChild(row);
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
});
body.appendChild(table);
