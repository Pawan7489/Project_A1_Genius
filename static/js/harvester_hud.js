/**
 * PROJECT A1: HARVESTER HUD
 * Renders the real-time knowledge acquisition flow on the Dashboard. [cite: 2026-02-14]
 */

window.displayHarvestStream = function(source, insight) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_HARVEST] Visualizing data flow from ${source}...`);

    // Visual feedback for the hacker command center [cite: 2026-02-14]
    let log = document.createElement('div');
    log.className = "text-yellow-400 x-small animate-pulse border-b border-yellow-900 mb-1";
    log.innerHTML = `[HARVESTED] Source: ${source} | Insight: ${insight} | RELEVANCE: 92%`;
    
    if (terminal) {
        terminal.prepend(log);
    }
};

// Simulation: Syncing with Backend Bridge
setInterval(() => {
    window.displayHarvestStream("GITHUB", "New Python Optimization Script Found.");
}, 15000);
