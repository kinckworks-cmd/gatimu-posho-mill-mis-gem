const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// Source Data: Company Overview [cite: 47]
const companyData = {
    name: "Gatimu Posho Mill",
    location: "Kutus Town, Kirinyaga County",
    owner: "Mr. Peter Gatimu",
    established: 2015,
    employees: 11,
    dailyCustomers: "150-200"
};

// Source Data: Problem Identification [cite: 95]
const problemData = [
    { id: 1, area: "Data-Driven Decisions", description: "Reliance on intuition rather than data analysis", impact: "High" },
    { id: 2, area: "Information Access", description: "Scattered records, no centralized system", impact: "High" },
    { id: 3, area: "Inventory Management", description: "Frequent stockouts and overstocking", impact: "High" },
    { id: 4, area: "Customer Insights", description: "Limited understanding of customer needs", impact: "Medium" },
    { id: 5, area: "Manual Processes", description: "Time-consuming, error-prone operations", impact: "Medium" }
];

// Source Data: Budget Recommendations [cite: 173]
const budgetData = [
    { id: 'rec-1', item: "Digital Record Keeping", phase: "Short-Term", cost: 30000, priority: "High", selected: true },
    { id: 'rec-2', item: "KPI Dashboard", phase: "Short-Term", cost: 15000, priority: "High", selected: true },
    { id: 'rec-3', item: "POS System", phase: "Medium-Term", cost: 80000, priority: "High", selected: false },
    { id: 'rec-4', item: "CRM System", phase: "Medium-Term", cost: 50000, priority: "Medium", selected: false },
    { id: 'rec-5', item: "Data Warehouse", phase: "Long-Term", cost: 150000, priority: "Medium", selected: false },
    { id: 'rec-6', item: "BI Platform", phase: "Long-Term", cost: 100000, priority: "Low", selected: false },
    { id: 'rec-7', item: "DSS Modules", phase: "Long-Term", cost: 25000, priority: "Low", selected: false }
];

app.get('/api/company', (req, res) => res.json(companyData));
app.get('/api/problems', (req, res) => res.json(problemData));
app.get('/api/budget', (req, res) => res.json(budgetData));

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
