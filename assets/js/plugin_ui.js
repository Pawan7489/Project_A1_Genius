/**
 * PROJECT A1: PLUGIN STORE UI
 * Displays active vs empty skeleton slots.
 */

window.renderPluginStore = function() {
    const storeContainer = document.getElementById('plugin-store-list');
    if (!storeContainer) return;

    // Simulated data from plugins_config.json
    const plugins = [
        { name: "Vision Core", status: "ACTIVE", icon: "bi-eye" },
        { name: "Web Search", status: "EMPTY", icon: "bi-globe" },
        { name: "File Converter", status: "EMPTY", icon: "bi-file-earmark-zip" }
    ];

    storeContainer.innerHTML = plugins.map(p => `
        <div class="d-flex justify-content-between align-items-center mb-2 p-2 border-bottom border-secondary">
            <span><i class="${p.icon} me-2"></i> ${p.name}</span>
            <span class="badge ${p.status === 'ACTIVE' ? 'bg-success' : 'bg-dark'}">${p.status}</span>
        </div>
    `).join('');
};

// Auto-render on Dashboard Load
document.addEventListener('DOMContentLoaded', window.renderPluginStore);
