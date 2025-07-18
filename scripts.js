function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // You can change this to anything you like
  const correctUsername = "me";
  const correctPassword = "supersecret";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById("auth-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Incorrect username or password.");
  }
}



const expenses = [
    { date: '2025-07-01', item: 'Delta Net WiFi', category: 'Subscriptions', amount: 2000.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: 'Carrefour Shopping', category: 'Groceries', amount: 2901.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: 'Fuel', category: 'Transportation', amount: 7842.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: 'Safaricom Data Bundle', category: 'Communication', amount: 30.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: '4 Eggs', category: 'Groceries', amount: 90.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: 'Electricity Token', category: 'Electricity', amount: 100.00, electricityUnits: 3.5, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: 'Electricity Token', category: 'Electricity', amount: 100.00, electricityUnits: 3.5, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-01', item: 'Sent to Mom', category: 'Support / Family', amount: 2000.00, electricityUnits: null, waterUnits: null, paymentMethod: 'Equity Bank' },
    { date: '2025-07-01', item: 'Sent to Dad', category: 'Support / Family', amount: 3000.00, electricityUnits: null, waterUnits: null, paymentMethod: 'Equity Bank' },
    { date: '2025-07-02', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 6.9, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-02', item: 'ChatGPT Subscription', category: 'Subscriptions', amount: 3184.66, electricityUnits: null, waterUnits: null, paymentMethod: 'Equity Card' },
    { date: '2025-07-02', item: 'Safaricom Data Bundle', category: 'Communication', amount: 20.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-02', item: 'Safaricom Data Bundle', category: 'Communication', amount: 20.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-02', item: 'Silvercrest 8L Airfryer', category: 'Household', amount: 5500.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-02', item: 'Electric Egg Boiler', category: 'Household', amount: 850.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-02', item: 'Delivery', category: 'Delivery', amount: 800.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-02', item: 'Naivas Shopping', category: 'Groceries', amount: 514.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-03', item: 'Rent', category: 'Rent', amount: 22000.00, electricityUnits: null, waterUnits: null, paymentMethod: 'I&M Bank' },
    { date: '2025-07-03', item: 'Water', category: 'Water', amount: 1050.00, electricityUnits: null, waterUnits: 7.0, paymentMethod: 'I&M Bank' },
    { date: '2025-07-03', item: 'Garbage', category: 'Garbage', amount: 200.00, electricityUnits: null, waterUnits: null, paymentMethod: 'I&M Bank' },
    { date: '2025-07-03', item: 'Watchman', category: 'Watchman', amount: 250.00, electricityUnits: null, waterUnits: null, paymentMethod: 'I&M Bank' },
    { date: '2025-07-03', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-03', item: 'Sent to Ian', category: 'Support / Family', amount: 200.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-03', item: '6 Bananas', category: 'Groceries', amount: 60.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-03', item: '4 Chapatis', category: 'Food & Eating Out', amount: 200.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-03', item: '2 Cups Porridge (shared)', category: 'Food & Eating Out', amount: 150.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-04', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-05', item: 'Safaricom Data Bundle', category: 'Communication', amount: 91.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-05', item: 'Safaricom Data Bundle', category: 'Communication', amount: 30.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-05', item: 'Safaricom Data Bundle', category: 'Communication', amount: 20.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-05', item: 'Public WiFi (1hr)', category: 'Communication', amount: 10.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-05', item: 'Public WiFi (1hr)', category: 'Communication', amount: 10.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-05', item: 'Half Pizza Bill (shared)', category: 'Food & Eating Out', amount: 1160.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-06', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-07', item: 'Safaricom Data Bundle', category: 'Communication', amount: 20.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-08', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },        
    { date: '2025-07-08', item: 'Safaricom Data Bundle', category: 'Communication', amount: 22.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },        
    { date: '2025-07-08', item: '1kg Beef Meat', category: 'Groceries', amount: 700, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },        
    { date: '2025-07-08', item: 'Chapati + Beans', category: 'Food & Eating Out', amount: 450.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },        
    { date: '2025-07-08', item: 'Naivas Shopping', category: 'Groceries', amount: 270.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },        
    { date: '2025-07-09', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 6.9, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-09', item: '12V Car Battery', category: 'Transportation', amount: 14600.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-09', item: 'Safaricom Data Bundle', category: 'Communication', amount: 50.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-10', item: '1 Mandazi', category: 'Food & Eating Out', amount: 10.00, electricityUnits: null, waterUnits: null, paymentMethod: 'Equity Bank' },
    { date: '2025-07-10', item: 'Carwash', category: 'Transportation', amount: 600.00, electricityUnits: null, waterUnits: null, paymentMethod: 'Equity Bank' },
    { date: '2025-07-10', item: 'Shared Shopping (Vivian)', category: 'Groceries', amount: 220.00, electricityUnits: null, waterUnits: null, paymentMethod: 'Equity Bank' },
    { date: '2025-07-10', item: 'Shared Shopping (Vivian)', category: 'Groceries', amount: 424.00, electricityUnits: null, waterUnits: null, paymentMethod: 'I&M Bank' },
    { date: '2025-07-11', item: 'Safaricom Data Bundle', category: 'Communication', amount: 28.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-11', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-12', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-13', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-15', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-15', item: 'Sent to Vivian', category: 'Support / Family', amount: 500.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-15', item: '4 Chapatis', category: 'Food & Eating Out', amount: 250.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-16', item: 'Safaricom Data Bundle', category: 'Communication', amount: 50.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-16', item: 'Hospital Consultation', category: 'Health', amount: 1000.00, electricityUnits: null, waterUnits: null, paymentMethod: 'I&M Bank' },
    { date: '2025-07-16', item: 'Hospital Urinalysis Test', category: 'Health', amount: 500.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-16', item: 'Hospital Medicine', category: 'Health', amount: 1210.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-16', item: 'Safaricom Data Bundle', category: 'Communication', amount: 20.00, electricityUnits: null, waterUnits: null, paymentMethod: 'M-PESA' },
    { date: '2025-07-17', item: 'Electricity Token', category: 'Electricity', amount: 200.00, electricityUnits: 7.0, waterUnits: null, paymentMethod: 'M-PESA' }
];

let budgets = {};
const tableBody = document.querySelector("#expenses-table tbody");
const totalDisplay = document.getElementById("total");
const categorySelect = document.getElementById("category");
const monthSelect = document.getElementById("month-select");
const categoryCtx = document.getElementById("categoryChart").getContext("2d");
const dailyCtx = document.getElementById("dailyChart").getContext("2d");
const utilitiesCtx = document.getElementById("utilitiesChart").getContext("2d");
let categoryChart, dailyChart, utilitiesChart;

function populateCategories() {
    const categories = [...new Set(expenses.map(e => e.category))];
    categorySelect.innerHTML = '<option value="All">All</option>';
    categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
    });

    const months = [...new Set(expenses.map(e => e.date.slice(0, 7)))];
    monthSelect.innerHTML = '<option value="All">All</option>';
    months.forEach(month => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
    });
}

function renderTable(filter = "All", customData = null) {
    tableBody.innerHTML = "";
    let total = 0;
    const data = customData ?? expenses;
    const filtered = data.filter(e => filter === "All" || e.category === filter);
    filtered.forEach(e => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${e.date}</td><td>${e.item}</td><td>${e.category}</td><td>${e.amount}</td><td>${e.electricityUnits ?? ''}</td><td>${e.waterUnits ?? ''}</td><td>${e.paymentMethod}</td>`;
    tableBody.appendChild(row);
    total += e.amount;
    });
    totalDisplay.textContent = total.toLocaleString();
    renderCategoryChart(filtered);
    renderDailyChart(filtered);
    renderUtilitiesChart(filtered);
    renderBudgetSummary(filtered);
}

function addExpense() {
    const date = document.getElementById("new-date").value;
    const item = document.getElementById("new-item").value;
    const category = document.getElementById("new-category").value;
    const amount = parseFloat(document.getElementById("new-amount").value);
    const electricityUnits = parseFloat(document.getElementById("new-electricity").value) || null;
    const waterUnits = parseFloat(document.getElementById("new-water").value) || null;
    const paymentMethod = document.getElementById("new-payment").value;

    if (!date || !item || !category || isNaN(amount)) {
    alert("Please fill in date, item, category, and amount.");
    return;
    }

    expenses.push({ date, item, category, amount, electricityUnits, waterUnits, paymentMethod });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    populateCategories();
    renderTable(categorySelect.value);

    document.getElementById("new-date").value = '';
    document.getElementById("new-item").value = '';
    document.getElementById("new-category").value = '';
    document.getElementById("new-amount").value = '';
    document.getElementById("new-electricity").value = '';
    document.getElementById("new-water").value = '';
    document.getElementById("new-payment").value = '';
}

function addBudget() {
    const cat = document.getElementById("budget-category").value;
    const amount = parseFloat(document.getElementById("budget-amount").value);
    if (!cat || isNaN(amount)) return alert("Fill in category and amount.");
    budgets[cat] = amount;
    localStorage.setItem("budgets", JSON.stringify(budgets));
    renderBudgetSummary(expenses);
    document.getElementById("budget-category").value = '';
    document.getElementById("budget-amount").value = '';
}

function renderBudgetSummary(data) {
    const summaryEl = document.getElementById("budget-summary");
    if (!Object.keys(budgets).length) return summaryEl.textContent = '';
    let html = "<h3>Budget Summary</h3><ul>";
    const spent = {};
    data.forEach(e => {
    spent[e.category] = (spent[e.category] || 0) + e.amount;
    });
    for (const [cat, limit] of Object.entries(budgets)) {
    const used = spent[cat] || 0;
    const percent = ((used / limit) * 100).toFixed(1);
    html += `<li>${cat}: KES ${used.toLocaleString()} / ${limit.toLocaleString()} (${percent}%)</li>`;
    }
    html += "</ul>";
    summaryEl.innerHTML = html;
}

function applyDateFilter() {
    const start = document.getElementById("start-date").value;
    const end = document.getElementById("end-date").value;
    if (!start || !end) return alert("Select both start and end dates.");
    const filtered = expenses.filter(e => e.date >= start && e.date <= end);
    renderTable("All", filtered);
}

function applyMonthFilter() {
    const month = monthSelect.value;
    if (month === "All") {
    renderTable(categorySelect.value);
    } else {
    const filtered = expenses.filter(e => e.date.startsWith(month));
    renderTable("All", filtered);
    }
}

function exportToCSV() {
    let csv = "Date,Item,Category,Amount,Electricity Units,Water Units,Payment Method\n";
    expenses.forEach(e => {
    csv += `${e.date},${e.item},${e.category},${e.amount},${e.electricityUnits ?? ''},${e.waterUnits ?? ''},${e.paymentMethod}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "expenses_july_2025.csv";
    link.click();
}

function renderCategoryChart(data) {
    const categoryTotals = {};
    data.forEach(e => {
    if (!categoryTotals[e.category]) categoryTotals[e.category] = 0;
    categoryTotals[e.category] += e.amount;
    });
    const labels = Object.keys(categoryTotals);
    const values = Object.values(categoryTotals);
    if (categoryChart) categoryChart.destroy();
    categoryChart = new Chart(categoryCtx, {
    type: 'pie',
    data: {
        labels,
        datasets: [{
        label: 'Spending by Category',
        data: values,
        backgroundColor: labels.map(() => `hsl(${Math.random() * 360}, 70%, 70%)`)
        }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
}

function renderDailyChart(data) {
    const dailyTotals = {};
    data.forEach(e => {
    if (!dailyTotals[e.date]) dailyTotals[e.date] = 0;
    dailyTotals[e.date] += e.amount;
    });
    const labels = Object.keys(dailyTotals).sort();
    const values = labels.map(date => dailyTotals[date]);
    if (dailyChart) dailyChart.destroy();
    dailyChart = new Chart(dailyCtx, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
        label: 'Daily Spending (KES)',
        data: values,
        backgroundColor: '#42a5f5'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
    }
    });
}

function renderUtilitiesChart(data) {
    let totalElectricity = 0, totalWater = 0;
    data.forEach(e => {
    totalElectricity += e.electricityUnits ? e.electricityUnits : 0;
    totalWater += e.waterUnits ? e.waterUnits : 0;
    });
    const electricityCost = totalElectricity * 28.57;
    const waterCost = totalWater * 150;
    if (utilitiesChart) utilitiesChart.destroy();
    utilitiesChart = new Chart(utilitiesCtx, {
    type: 'bar',
    data: {
        labels: ['Electricity (KES)', 'Water (KES)'],
        datasets: [{
        label: 'Utility Costs',
        data: [electricityCost, waterCost],
        backgroundColor: ['#ff9800', '#4caf50']
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
    }
    });
}

categorySelect.addEventListener("change", () => {
    renderTable(categorySelect.value);
});

window.onload = () => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    const savedBudgets = JSON.parse(localStorage.getItem("budgets"));
    if (savedExpenses) expenses.push(...savedExpenses);
    if (savedBudgets) budgets = savedBudgets;
    populateCategories();
    renderTable();
};
