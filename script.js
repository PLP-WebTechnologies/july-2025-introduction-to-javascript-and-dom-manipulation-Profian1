// 🎯 PART 1: Variables & Conditionals
let userName = "Student"; // Variable declaration

document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "✅ You are an adult.";
  } else if (age > 0) {
    result = "👶 You are a minor.";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
});

// ❤️ PART 2: Functions

function greet(name) {
  return "Hello, " + name + "! Welcome back!";
}

// Using the greet function with a button
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("greetResult").textContent = greet(userName);
  console.log("Square of 4 is:", square(4));
});

// 🔁 PART 3: Loops

// Loop 1: For loop to populate a list
let loopList = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Item number " + i;
  loopList.appendChild(li);
}

// Loop 2: While loop for console output
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// 🌐 PART 4: DOM Interactions

// 1. Change text when button is clicked
document.getElementById("changeBtn").addEventListener("click", function () {
  document.getElementById("message").textContent =
    "🎉 The text has been changed!";
});

// 2. Add a new element dynamically
let newItem = document.createElement("li");
newItem.textContent = "Dynamically added via DOM";
loopList.appendChild(newItem);

// 3. Counter button interaction
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
  counter++;
  document.getElementById("counter").textContent = "Counter: " + counter;
});
