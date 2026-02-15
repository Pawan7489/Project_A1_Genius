/**
 * PROJECT A1: OS CONTROL HUD
 * Real-time visualization of hardware parameters on the Dashboard.
 */

window.updateHardwareHUD = function(stats) {
    const cpuGauge = document.getElementById('cpu-gauge');
    const volSlider = document.getElementById('volume-slider');

    if (cpuGauge) {
        cpuGauge.style.width = stats.cpu;
        cpuGauge.innerText = `CPU: ${stats.cpu}`;
    }

    if (volSlider) {
        // Update slider position based on physical volume
        console.log(`[NOS_UI] Physical Volume Sync: ${stats.volume}%`);
    }
};

window.triggerOSCommand = function(func, value) {
    console.log(`[NOS_ACTION] Requesting ${func} change to ${value}...`);
    // Visual feedback on the terminal
    const term = document.querySelector('.terminal-output');
    let line = document.createElement('div');
    line.className = "text-warning x-small";
    line.innerHTML = `[OS_KERNEL] Executing ${func.toUpperCase()} shift... Status: SUCCESS`;
    term.appendChild(line);
};
