/**
 * PROJECT A1: OMNISTAT HUD
 * Visualizes the health of all 30 Parts.
 */

window.refreshOmnistat = async function() {
    const statsContainer = document.getElementById('omnistat-status');
    if (!statsContainer) return;

    // Simulated fetch from system_snapshot.json
    const data = {
        health: 100,
        security: "ACTIVE",
        mesh: "CONNECTED",
        threat: "LOW"
    };

    statsContainer.innerHTML = `
        <div class="info-box bg-black border border-success">
            <span class="info-box-icon text-success"><i class="bi bi-activity"></i></span>
            <div class="info-box-content">
                <span class="info-box-text text-white">SYSTEM_HEALTH</span>
                <span class="info-box-number text-success">${data.health}%</span>
                <div class="progress" style="height: 2px;">
                    <div class="progress-bar bg-success" style="width: ${data.health}%"></div>
                </div>
            </div>
        </div>
    `;

    console.log("[OMNISTAT] Dashboard Pulse Synced.");
};

// Initial Sync
document.addEventListener('DOMContentLoaded', window.refreshOmnistat);
