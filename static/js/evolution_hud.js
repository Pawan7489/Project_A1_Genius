/**
 * PROJECT A1: EVOLUTION HUD
 * Visualizes the auto-update process on the dashboard.
 */

window.triggerEvolutionUI = async function(newVersion) {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    let updateDiv = document.createElement('div');
    updateDiv.className = "p-2 bg-black border border-info mt-2 animate-pulse";
    updateDiv.innerHTML = `
        <div class='text-info fw-bold small'><i class="bi bi-rocket-takeoff"></i> NEURAL_EVOLUTION_IN_PROGRESS</div>
        <div class='text-white x-small'>Downloading Core_Logic v${newVersion}...</div>
        <div class="progress mt-2" style="height: 3px; background: #050505;">
            <div class="progress-bar bg-info" id="update-bar" style="width: 0%"></div>
        </div>
    `;
    termOutput.appendChild(updateDiv);

    // Animation for update progress
    const bar = updateDiv.querySelector('#update-bar');
    for (let i = 0; i <= 100; i += 10) {
        await new Promise(r => setTimeout(r, 400));
        bar.style.width = i + "%";
    }

    updateDiv.innerHTML = `<div class='text-success small fw-bold'>[OK] Evolution Successful. System at v${newVersion}</div>`;
    termOutput.scrollTop = termOutput.scrollHeight;
    
    setTimeout(() => updateDiv.remove(), 5000);
};
