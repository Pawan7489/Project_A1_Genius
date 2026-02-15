/**
 * PROJECT A1: E-COMMERCE HUD
 * Displays live sales data and printing status on the dashboard.
 */

window.updateRevenueStats = function() {
    const revenueDisplay = document.getElementById('total-revenue-box');
    const orderList = document.getElementById('recent-orders-list');

    // Simulated data sync from order_manifest.json
    const revenue = "₹45,000";
    const orders = [
        { id: "ORD-99", client: "Vikram", status: "Printing" },
        { id: "ORD-100", client: "Anjali", status: "Done" }
    ];

    if (revenueDisplay) revenueDisplay.innerText = revenue;

    if (orderList) {
        orderList.innerHTML = orders.map(o => `
            <div class="d-flex justify-content-between small border-bottom border-secondary p-1">
                <span>#${o.id} - ${o.client}</span>
                <span class="badge ${o.status === 'Done' ? 'bg-success' : 'bg-warning'}">${o.status}</span>
            </div>
        `).join('');
    }
    console.log("[BIZ_LOGIC] Revenue HUD Synced.");
};

// Refresh Stats every 60 seconds
setInterval(window.updateRevenueStats, 60000);
