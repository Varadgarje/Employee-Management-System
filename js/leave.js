document.addEventListener("DOMContentLoaded", function () {
  const leaveRequests = [
    {
      name: "Neha Sharma",
      from: "2025-07-10",
      to: "2025-07-12",
      reason: "Personal",
      status: "Pending"
    },
    {
      name: "Ravi Kumar",
      from: "2025-07-14",
      to: "2025-07-15",
      reason: "Medical",
      status: "Pending"
    }
  ];

  const tbody = document.getElementById("leaveTableBody");

  leaveRequests.forEach((req, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${req.name}</td>
      <td>${req.from}</td>
      <td>${req.to}</td>
      <td>${req.reason}</td>
      <td class="status">${req.status}</td>
      <td>
        <button class="approve-btn" data-index="${index}">Approve</button>
        <button class="reject-btn" data-index="${index}">Reject</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Event Delegation for buttons
  tbody.addEventListener("click", function (e) {
    const index = e.target.dataset.index;
    const row = tbody.rows[index];
    const statusCell = row.querySelector(".status");

    if (e.target.classList.contains("approve-btn")) {
      statusCell.textContent = "Approved";
      statusCell.style.color = "green";
    } else if (e.target.classList.contains("reject-btn")) {
      statusCell.textContent = "Rejected";
      statusCell.style.color = "red";
    }
  });
});