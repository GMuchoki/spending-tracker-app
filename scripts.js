/* scripts.js - Shared logic for all pages */

// Loads expenses from a JSON file and initializes the app
async function loadExpenses() {
  try {
    const response = await fetch('data/expenses.json');
    if (!response.ok) throw new Error('Failed to load JSON');

    expenses = await response.json();
    localStorage.setItem("expenses", JSON.stringify(expenses));
    initializeApp();
  } catch (error) {
    console.error("Error loading expenses:", error);
  }
}

let budgets = {}; // Stores budget limits for each category

// Handles user login logic
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const correctUsername = "me";
  const correctPassword = "supersecret";

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("loggedIn", "true");
    showApp();
  } else {
    alert("Incorrect username or password.");
  }
}

// Shows the main app and hides the login screen
function showApp() {
  document.getElementById("auth-screen").style.display = "none";
  document.getElementById("app").style.display = "block";
}

// Adds a new expense from form inputs
function addExpense() {
  const date = document.getElementById("new-date").value;
  const item = document.getElementById("new-item").value;
  const category = document.getElementById("new-category").value;
  const amount = parseFloat(document.getElementById("new-amount").value);
  const electricityUnits = parseFloat(document.getElementById("new-electricity").value) || null;
  const waterUnits = parseFloat(document.getElementById("new-water").value) || null;
  const paymentMethod = document.getElementById("new-payment").value;

  // Validate required fields
  if (!date || !item || !category || isNaN(amount)) {
    alert("Please fill in date, item, category, and amount.");
    return;
  }

  // Add new expense to the array and update localStorage
  expenses.push({ date, item, category, amount, electricityUnits, waterUnits, paymentMethod });
  localStorage.setItem("expenses", JSON.stringify(expenses));
  if (document.getElementById("expenses-table")) renderTable();
}

// Renders the expenses table and updates the total
function renderTable() {
  const categoryFilter = document.getElementById("category").value;
  const tableBody = document.querySelector("#expenses-table tbody");
  tableBody.innerHTML = "";
  let total = 0;

  // Filter expenses by selected category
  const filtered = expenses.filter(e => categoryFilter === "All" || e.category === categoryFilter);

  // Add each expense as a row in the table
  filtered.forEach(e => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${e.date}</td><td>${e.item}</td><td>${e.category}</td><td>${e.amount}</td><td>${e.electricityUnits ?? ''}</td><td>${e.waterUnits ?? ''}</td><td>${e.paymentMethod}</td>`;
    tableBody.appendChild(row);
    total += e.amount;
  });
  const totalDisplay = document.getElementById("total");
  if (totalDisplay) totalDisplay.textContent = total.toLocaleString();
}

// Adds a new budget for a category
function addBudget() {
  const cat = document.getElementById("budget-category").value.trim();
  const amount = parseFloat(document.getElementById("budget-amount").value);
  if (!cat || isNaN(amount)) {
    alert("Please fill in both category and budget amount.");
    return;
  }
  budgets[cat] = amount;
  localStorage.setItem("budgets", JSON.stringify(budgets));
  renderBudgetSummary(expenses);
  document.getElementById("budget-category").value = '';
  document.getElementById("budget-amount").value = '';
}

// Renders the budget summary list
function renderBudgetSummary(data) {
  const budgetList = document.getElementById("budget-list");
  if (!budgetList) return;
  budgetList.innerHTML = "";
  const spent = {};
  // Calculate total spent per category
  data.forEach(e => spent[e.category] = (spent[e.category] || 0) + e.amount);
  for (const [cat, limit] of Object.entries(budgets)) {
    const used = spent[cat] || 0;
    const percent = ((used / limit) * 100).toFixed(1);
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${cat}</strong>: KES ${used.toLocaleString()} / ${limit.toLocaleString()} (${percent}%)
      <button onclick="editBudget('${cat}')">✏️ Edit</button>
      <button onclick="deleteBudget('${cat}')">🗑️ Delete</button>
    `;
    budgetList.appendChild(li);
  }
}

// Fills the budget form with the selected category for editing
function editBudget(category) {
  document.getElementById("budget-category").value = category;
  document.getElementById("budget-amount").value = budgets[category];
}

// Deletes a budget for a category
function deleteBudget(category) {
  if (confirm(`Delete budget for "${category}"?`)) {
    delete budgets[category];
    localStorage.setItem("budgets", JSON.stringify(budgets));
    renderBudgetSummary(expenses);
  }
}

// Renders a doughnut chart for spending by category
function renderCategoryChart(data) {
  const ctx = document.getElementById("categoryChart")?.getContext("2d");
  if (!ctx) return;
  const totals = {};
  data.forEach(e => totals[e.category] = (totals[e.category] || 0) + e.amount);
  const labels = Object.keys(totals);
  const values = Object.values(totals);
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        label: 'Spending by Category',
        data: values,
        backgroundColor: labels.map(() => `hsl(${Math.random()*360}, 70%, 70%)`)
      }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
  });
}

// Renders a bar chart for daily spending
function renderDailyChart(data) {
  const ctx = document.getElementById("dailyChart")?.getContext("2d");
  if (!ctx) return;
  const totals = {};
  data.forEach(e => totals[e.date] = (totals[e.date] || 0) + e.amount);
  const labels = Object.keys(totals).sort();
  const values = labels.map(date => totals[date]);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{ label: 'Daily Spending (KES)', data: values, backgroundColor: '#42a5f5' }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });
}

// Renders a bar chart for utility costs (electricity and water)
function renderUtilitiesChart(data) {
  const ctx = document.getElementById("utilitiesChart")?.getContext("2d");
  if (!ctx) return;
  let totalElectricity = 0, totalWater = 0;
  data.forEach(e => {
    totalElectricity += e.electricityUnits || 0;
    totalWater += e.waterUnits || 0;
  });
  const electricityCost = totalElectricity * 28.57;
  const waterCost = totalWater * 150;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Electricity (KES)', 'Water (KES)'],
      datasets: [{
        label: 'Utility Costs',
        data: [electricityCost, waterCost],
        backgroundColor: ['#ff9800', '#4caf50']
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });
}

// Runs on page load: checks login, loads budgets, and expenses
window.onload = () => {

  if (localStorage.getItem("loggedIn") === "true") {
    showApp();
  }

  //expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  budgets = JSON.parse(localStorage.getItem("budgets")) || {};

  loadExpenses(); // this will fetch and call initializeApp() when ready

};

// Initializes dropdowns, tables, charts, and dashboard total
function initializeApp() {
  if (document.getElementById("category")) {
    const categorySelect = document.getElementById("category");
    const categories = [...new Set(expenses.map(e => e.category))];
    categorySelect.innerHTML = '<option value="All">All</option>';
    categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });
    categorySelect.addEventListener("change", renderTable);
  }

  if (document.getElementById("expenses-table")) renderTable();
  if (document.getElementById("budget-list")) renderBudgetSummary(expenses);
  if (document.getElementById("categoryChart")) renderCategoryChart(expenses);
  if (document.getElementById("dailyChart")) renderDailyChart(expenses);
  if (document.getElementById("utilitiesChart")) renderUtilitiesChart(expenses);

  // ✅ Add this block to support total on dashboard
  if (document.getElementById("dashboard-total")) {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    document.getElementById("dashboard-total").textContent = total.toLocaleString();
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload(); // Reload to show login screen again
}