var suUsername   = document.getElementById("suUsername");
var suEmail      = document.getElementById("suEmail");
var suPassword   = document.getElementById("suPassword");
var loginUsername = document.getElementById("loginUsername");
var loginPassword = document.getElementById("loginPassword");

function signup(e) {
  e.preventDefault();
  if (!suUsername || !suEmail || !suPassword) 
    return;

  var user = suUsername.value.trim();
  var email = suEmail.value.trim();
  var pass = suPassword.value.trim();

  if (!user || !email || !pass) 
    return alert("Please fill all fields!");

  localStorage.setItem("user", JSON.stringify({ user, email, pass }));
  alert("Signup Successful!");
  location.href = "login.html"; 
}

function login(e) {
  e.preventDefault();
  if (!loginUsername || !loginPassword) 
    return;

  var saved = JSON.parse(localStorage.getItem("user"));
  if (!saved)
     return alert("No user found. Please Signup first!");

  if (loginUsername.value === saved.email && loginPassword.value === saved.pass)
 {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful!");
    location.href = "index.html";
  } else {
    alert("Incorrect Username or Password!");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged Out!");
  location.href = "login.html";
}

if (location.pathname === "/index.html") {
  if (localStorage.getItem("loggedIn") !== "true") location.href = "login.html";
}

var signupForm = document.getElementById("signupForm");
var loginForm  = document.getElementById("loginForm");
var logoutBtn  = document.getElementById("logoutBtn");

if (signupForm)
  signupForm.addEventListener("submit", signup);
if (loginForm)
  loginForm.addEventListener("submit", login);
if (logoutBtn)
  logoutBtn.addEventListener("click", logout);
