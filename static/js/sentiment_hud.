/**
 * PROJECT A1: SENTIMENT HUD
 * Dynamically updates the Dashboard CSS variables based on AI detection. [cite: 2026-02-11]
 */

window.adaptDashboardToVibe = function(vibe) {
    const root = document.documentElement;
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_SENTIMENT] Shifting to ${vibe} mode...`);

    // Rule: Visual feedback for the NASA style command center
    if (vibe === "URGENT") {
        root.style.setProperty('--neon-primary', '#FF0000'); // Alert Red
    } else if (vibe === "CALM") {
        root.style.setProperty('--neon-primary', '#00F3FF'); // Calm Cyan
    }

    let log = document.createElement('div');
    log.className = "text-sm italic opacity-70";
    log.innerHTML = `> [NEURAL_ADAPT] Mood Detected: ${vibe} | Environment Re-calibrated.`;
    
    if (terminal) {
        terminal.prepend(log);
    }
};
