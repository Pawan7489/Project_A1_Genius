/**
 * PROJECT A1: MIRROR HUD
 * Visualizes the real-time performance and sync status of the Mesh.
 */

window.updateMirrorStatus = function() {
    const meshMap = document.getElementById('mesh-connectivity-map');
    if (!meshMap) return;

    // Simulated sync from mirror_status.json
    const nodes = [
        { name: "RENDER_CLOUD", status: "ONLINE", icon: "bi-cloud-check" },
        { name: "DRIVE_D", status: "SYNCED", icon: "bi-hdd-network" },
        { name: "DRIVE_E", status: "SYNCED", icon: "bi-hdd-fill" }
    ];

    meshMap.innerHTML = nodes.map(node => `
        <div class="flex items-center justify-between p-2 border-b border-blue-900/20">
            <span class="text-[10px] text-blue-400 font-bold"><i class="bi ${node.icon}"></i> ${node.name}</span>
            <span class="text-[8px] px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-500/30 rounded">${node.status}</span>
        </div>
    `).join('');
    
    console.log("[MESH_UI] Visual Sync Completed.");
};

// Auto-trigger every 30 seconds
setInterval(window.updateMirrorStatus, 30000);
