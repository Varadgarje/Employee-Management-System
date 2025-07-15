// backend/server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// LOGIN API (Hardcoded)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin@gmail.com' && password === 'admin@123') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// GET Employees
app.get('/employees', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/employees.json')));
  res.json(data);
});

// POST New Employee
app.post('/employees', (req, res) => {
  const employees = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/employees.json')));
  const newEmp = req.body;
  employees.push(newEmp);
  fs.writeFileSync(path.join(__dirname, 'data/employees.json'), JSON.stringify(employees, null, 2));
  res.json({ success: true });
});

// GET Tasks
app.get('/tasks', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/tasks.json')));
  res.json(data);
});

// GET Attendance
app.get('/attendance', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/attendance.json')));
  res.json(data);
});

// GET Leaves
app.get('/leaves', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/leaves.json')));
  res.json(data);
});

// POST Leave Request
app.post('/leaves', (req, res) => {
  const leaves = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/leaves.json')));
  const newLeave = req.body;
  leaves.push(newLeave);
  fs.writeFileSync(path.join(__dirname, 'data/leaves.json'), JSON.stringify(leaves, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
