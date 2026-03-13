const API_URL = 'http://localhost:3000/api';
let budgetItems = [];

async function init() {
    try {
        const [comp, probs, budg] = await Promise.all([
            fetch(`${API_URL}/company`).then(res => res.json()),
            fetch(`${API_URL}/problems`).then(res => res.json()),
            fetch(`${API_URL}/budget`).then(res => res.json())
        ]);

        // Render Header [cite: 34, 47]
        document.getElementById('company-name').innerText = comp.name;
        document.getElementById('company-meta').innerText = `${comp.location} | Established ${comp.established}`;

        // Render Cards [cite: 95]
        const probContainer = document.getElementById('problems-container');
        probs.forEach(p => {
            const card = document.createElement('div');
            card.className = 'research-card';
            card.innerHTML = `<h3>${p.area}</h3><p>${p.description}</p><span class="badge badge--${p.impact.toLowerCase()}">${p.impact} Impact</span>`;
            probContainer.appendChild(card);
        });

        // Render Budget [cite: 173]
        budgetItems = budg;
        renderBudget();

    } catch (err) { console.error("Initialization failed:", err); }
}

function renderBudget() {
    const container = document.getElementById('budget-items-container');
    container.innerHTML = '';
    let total = 0;

    budgetItems.forEach((item, i) => {
        if (item.selected) total += item.cost;
        const div = document.createElement('div');
        div.className = 'budget-item';
        div.innerHTML = `<div><strong>${item.item}</strong><br><small>${item.phase}</small></div>
                         <div>KES ${item.cost.toLocaleString()} <input type="checkbox" ${item.selected ? 'checked' : ''} onchange="toggleItem(${i})"></div>`;
        container.appendChild(div);
    });

    document.getElementById('total-cost').innerText = `KES ${total.toLocaleString()}`;
    document.getElementById('budget-progress').style.width = `${(total / 450000) * 100}%`;
}

window.toggleItem = (index) => {
    budgetItems[index].selected = !budgetItems[index].selected;
    renderBudget();
};

document.addEventListener('DOMContentLoaded', init);
