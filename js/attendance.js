document.addEventListener("DOMContentLoaded", function () {
  const employees = [
    { name: "Neha Sharma", present: 20, absent: 2 },
    { name: "Rohan Verma", present: 18, absent: 4 },
    { name: "Sanya Mehta", present: 21, absent: 1 }
  ];

  const tbody = document.getElementById("attendanceSummaryBody");

  employees.forEach(emp => {
    const total = emp.present + emp.absent;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.present}</td>
      <td>${emp.absent}</td>
      <td>${total}</td>
    `;
    tbody.appendChild(row);
  });
});