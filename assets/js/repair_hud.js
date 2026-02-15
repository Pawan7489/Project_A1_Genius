/**
 * PROJECT A1: REPAIR HUD
 * Visualizes the self-healing process in the Command Center.
 */

window.triggerSelfHealing = async function(moduleName) {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    let repairDiv = document.createElement('div');
    repairDiv.className = "p-2 bg-black border border-warning mt-2";
    repairDiv.innerHTML = `
        <div class='text-warning fw-bold small'><i class="bi bi-heart-pulse"></i> SELF_HEALING_ACTIVE</div>
        <div class='text-white x-small'>Repairing: ${moduleName}...</div>
        <div class="progress mt-1" style="height: 4px; background: #1a1a1a;">
            <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width: 100%"></div>
        </div>
    `;
    termOutput.appendChild(repairDiv);

    // Simulate recovery time
    await new Promise(r => setTimeout(r, 2000));
    
    repairDiv.innerHTML = `<div class='text-success small'><i class="bi bi-check-circle"></i> MODULE_${moduleName}_RESTORED</div>`;
    termOutput.scrollTop = termOutput.scrollHeight;
    
    setTimeout(() => repairDiv.remove(), 3000);
};
