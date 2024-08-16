// Import the necessary Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDym18GePgrbjGLovjTxbw7620dkFu8Hpg",
    authDomain: "fir-practice-by-rs.firebaseapp.com",
    projectId: "fir-practice-by-rs",
    storageBucket: "fir-practice-by-rs.appspot.com",
    messagingSenderId: "1051763391975",
    appId: "1:1051763391975:web:0654d92388d6667d961142",
    measurementId: "G-63ET73JG37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get references to the input fields and buttons
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

// Signup Function
function createUserAccount() {
    const email = signupEmail.value;
    const password = signupPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("User signed up successfully:", userCredential.user);
        alert("Signup successful! You can now log in.");
    })
    .catch((error) => {
        console.error("Error during signup:", error.code, error.message);
        alert(`Signup failed: ${error.message}`);
    });
}

// Login Function
function loginUser() {
    const email = loginEmail.value;
    const password = loginPassword.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("User logged in successfully:", userCredential.user);
        alert("Login successful!");
    })
    .catch((error) => {
        console.error("Error during login:", error.code, error.message);
        alert(`Login failed: ${error.message}`);
    });
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user);
    } else {
        console.log("No user is logged in.");
    }
});

// Add event listeners to the buttons
signupBtn.addEventListener('click', createUserAccount);
loginBtn.addEventListener('click', loginUser);
