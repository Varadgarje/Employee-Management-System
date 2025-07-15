document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("employeeModal");
  const form = document.getElementById("employeeForm");

  if (!modal || !form) return;

  const rowIndexInput = document.getElementById("rowIndex");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const positionInput = document.getElementById("position");
  const departmentInput = document.getElementById("department");

  window.openModal = function (edit = false, row = null) {
    document.getElementById("modalTitle").innerText = edit ? "Edit Employee" : "Add Employee";
    form.reset();
    rowIndexInput.value = "";

    if (edit && row) {
      const cells = row.getElementsByTagName("td");
      nameInput.value = cells[0].innerText;
      emailInput.value = cells[1].innerText;
      positionInput.value = cells[2].innerText;
      departmentInput.value = cells[3].innerText;
      rowIndexInput.value = row.rowIndex;
    }

    modal.style.display = "block";
  };

  window.closeModal = function () {
    modal.style.display = "none";
  };

  const addBtn = document.querySelector(".add-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => openModal());
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const position = positionInput.value;
    const department = departmentInput.value;
    const index = rowIndexInput.value;

    const table = document.querySelector(".employee-table tbody");

    if (index) {
      const row = table.rows[index - 1];
      row.cells[0].innerText = name;
      row.cells[1].innerText = email;
      row.cells[2].innerText = position;
      row.cells[3].innerText = department;
    } else {
      const newRow = table.insertRow();
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${position}</td>
        <td>${department}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      addRowEvents(newRow);
    }

    closeModal();
  });

  function addRowEvents(row) {
    const editBtn = row.querySelector(".edit-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => openModal(true, row));
    deleteBtn.addEventListener("click", () => row.remove());
  }

  document.querySelectorAll(".employee-table tbody tr").forEach(addRowEvents);

  window.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
});
