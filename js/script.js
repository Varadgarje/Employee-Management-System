document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Set hardcoded login credentials
  const validUsername = "admin@gmail.com";
  const validPassword = "admin@123";

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    alert("Invalid username or password.");
  }
});


