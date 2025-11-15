// ---- GET ALL INPUT IDs ----
let suUsername   = document.getElementById("suUsername");
let suEmail      = document.getElementById("suEmail");
let suPassword   = document.getElementById("suPassword");

let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");

// ---- SIMPLE ALERT FUNCTION ----
function msg(text) { alert(text); }

// ---- SIGNUP ----
function signup(e) {
  e.preventDefault();
  if (!suUsername || !suEmail || !suPassword) return;

  let user = suUsername.value.trim();
  let email = suEmail.value.trim();
  let pass = suPassword.value.trim();

  if (!user || !email || !pass) return msg("Please fill all fields!");

  localStorage.setItem("user", JSON.stringify({ user, email, pass }));
  msg("Signup Successful!");
  location.href = "index.html"; 
}

// ---- LOGIN ----
function login(e) {
  e.preventDefault();
  if (!loginUsername || !loginPassword) return;

  let saved = JSON.parse(localStorage.getItem("user"));
  if (!saved) return msg("No user found. Please Signup first!");

  if (loginUsername.value === saved.user && loginPassword.value === saved.pass) {
    localStorage.setItem("loggedIn", "true");
    msg("Login Successful!");
    location.href = "dashboard.html";
  } else {
    msg("Incorrect Username or Password!");
  }
}

// ---- LOGOUT ----
function logout() {
  localStorage.removeItem("loggedIn");
  msg("Logged Out!");
  location.href = "index.html";
}

// ---- PROTECT DASHBOARD ----
if (location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("loggedIn") !== "true") location.href = "index.html";
}

// ---- FORM EVENT LISTENERS ----
let signupForm = document.getElementById("signupForm");
let loginForm  = document.getElementById("loginForm");
let logoutBtn  = document.getElementById("logoutBtn");

if (signupForm) signupForm.addEventListener("submit", signup);
if (loginForm)  loginForm.addEventListener("submit", login);
if (logoutBtn)  logoutBtn.addEventListener("click", logout);
