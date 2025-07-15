document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("taskModal");
  const form = document.getElementById("taskForm");
  const taskTableBody = document.getElementById("taskTableBody");

  if (!modal || !form) return;

  const titleInput = document.getElementById("taskTitle");
  const assigneeInput = document.getElementById("taskAssignee");
  const dueDateInput = document.getElementById("taskDueDate");
  const statusInput = document.getElementById("taskStatus");
  const indexInput = document.getElementById("taskIndex");

  // Modal open/close
  document.getElementById("addTaskBtn").addEventListener("click", () => openModal());

  window.openModal = function (edit = false, row = null) {
    document.getElementById("taskModalTitle").innerText = edit ? "Edit Task" : "Add Task";
    form.reset();
    indexInput.value = "";

    if (edit && row) {
      const cells = row.getElementsByTagName("td");
      titleInput.value = cells[0].innerText;
      assigneeInput.value = cells[1].innerText;
      dueDateInput.value = cells[2].innerText;
      statusInput.value = cells[3].innerText;
      indexInput.value = row.rowIndex;
    }

    modal.style.display = "block";
  };

  window.closeTaskModal = function () {
    modal.style.display = "none";
  };

  // Form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = titleInput.value;
    const assignee = assigneeInput.value;
    const dueDate = dueDateInput.value;
    const status = statusInput.value;
    const index = indexInput.value;

    if (index) {
      const row = taskTableBody.rows[index - 1];
      row.cells[0].innerText = title;
      row.cells[1].innerText = assignee;
      row.cells[2].innerText = dueDate;
      row.cells[3].innerText = status;
    } else {
      const row = taskTableBody.insertRow();
      row.innerHTML = `
        <td>${title}</td>
        <td>${assignee}</td>
        <td>${dueDate}</td>
        <td>${status}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      addTaskRowEvents(row);
    }

    closeTaskModal();
  });

  function addTaskRowEvents(row) {
    row.querySelector(".edit-btn").addEventListener("click", () => openModal(true, row));
    row.querySelector(".delete-btn").addEventListener("click", () => row.remove());
  }

  window.onclick = function (e) {
    if (e.target === modal) closeTaskModal();
  };
});