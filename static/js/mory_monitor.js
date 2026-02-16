/**
 * PROJECT A1: MEMORY MONITOR UI
 * Visualizes the clutter and optimization level.
 */

window.updateMemoryHealth = function() {
    // Simulated data fetch from memory_health.json
    const health = { clutter: 12, status: 'SHARP' };
    
    const terminal = document.querySelector('.terminal-output');
    if (terminal) {
        let stats = document.createElement('div');
        stats.style.color = health.clutter > 50 ? "#ff0000" : "#00ff41";
        stats.innerHTML = `[STATS] Memory Health: ${health.status} | Clutter Level: ${health.clutter}%`;
        terminal.appendChild(stats);
        terminal.scrollTop = terminal.scrollHeight;
    }
    
    console.log("Memory HUD Updated: Musk Efficiency Rule Active.");
};

// Auto-run every time a complex task is finished
