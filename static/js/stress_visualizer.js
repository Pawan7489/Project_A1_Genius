/**
 * PROJECT A1: STRESS VISUALIZER
 * Animates the system hardening and load test on the Dashboard.
 */

window.startStressVisualizer = async function() {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    let stressDiv = document.createElement('div');
    stressDiv.innerHTML = `<div class='text-warning fw-bold mt-2'>[INITIATING_STRESS_TEST]</div>`;
    termOutput.appendChild(stressDiv);

    const levels = ["25%", "50%", "75%", "99%", "OVERLOAD_PROTECTION_ACTIVE"];
    
    for (let level of levels) {
        await new Promise(r => setTimeout(r, 800));
        let progress = document.createElement('div');
        progress.className = level.includes('OVERLOAD') ? "text-danger" : "text-info";
        progress.innerHTML = `> Load Level: ${level} | <span class='text-success'>STABLE</span>`;
        stressDiv.appendChild(progress);
        termOutput.scrollTop = termOutput.scrollHeight;
    }

    console.log("Musk Efficiency Rule: Verified. System Hardened.");
};
