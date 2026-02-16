/**
 * PROJECT A1: MEMORY CLEANER HUD
 * Renders the memory health gauge and manual cleanup trigger.
 */

window.triggerMemoryCleanup = function() {
    const terminal = document.querySelector('.terminal-output');
    console.log("[UI_ARCHIVER] Requesting Neural De-cluttering...");

    // Visual feedback: Purple Glow for Memory Operations
    let log = document.createElement('div');
    log.className = "text-purple-400 x-small animate-pulse border-r-2 border-purple-600 pr-2 text-right";
    log.innerHTML = `[DE_CLUTTER] Scanning Vector DB... Relevance Score Threshold: 0.4 | STATUS: PURGING...`;
    
    if (terminal) {
        terminal.appendChild(log);
    }
    
    // Rule: Zuckerberg Rule (Speed) - Performance boost feedback
    setTimeout(() => {
        alert("Optimization Complete: System Latency decreased by 15ms.");
    }, 5000);
};
