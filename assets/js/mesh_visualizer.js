/**
 * PROJECT A1: MESH DATA FLOW VISUALIZER
 * Animates data transfer between distributed units.
 */

window.visualizeDataSync = async function(file, from, to) {
    const termOutput = document.querySelector('.terminal-output');
    
    let syncDiv = document.createElement('div');
    syncDiv.className = "text-info small font-monospace";
    syncDiv.innerHTML = `[MESH_SYNC] Initiating packet transfer: <b>${file}</b>`;
    termOutput.appendChild(syncDiv);

    const animationSteps = [
        `Connecting to unit ${from}...`,
        `Packaging data for distributed transport...`,
        `Bypassing latency via Universal Bridge...`,
        `Injecting packet into unit ${to}...`
    ];

    for (let step of animationSteps) {
        await new Promise(r => setTimeout(r, 700));
        let p = document.createElement('div');
        p.innerHTML = `<span class="text-secondary">>>></span> ${step}`;
        syncDiv.appendChild(p);
        termOutput.scrollTop = termOutput.scrollHeight;
    }

    let success = document.createElement('div');
    success.className = "text-success fw-bold";
    success.innerHTML = `[SUCCESS] ${from} <---> ${to} Synchronization Complete.`;
    termOutput.appendChild(success);
};
