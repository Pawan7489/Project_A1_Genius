/**
 * PROJECT A1: SYSTEM AUDIT HUD
 * Renders NASA-style scrolling logs and pulsing hardware indicators. [cite: 2026-02-11]
 */

window.refreshAuditUI = function() {
    const footerLogs = document.getElementById('audit-scrolling-logs');
    console.log("[UI_AUDIT] Fetching Hardware Vitals...");

    // Rule: Visual feedback for the hacker command center
    let logEntry = document.createElement('div');
    logEntry.className = "text-[9px] text-green-500 font-mono";
    logEntry.innerHTML = `> [HEALTH_CHECK] CPU_STABLE | RAM_OK | GPU_42C | ${new Date().toLocaleTimeString()}`;
    
    if (footerLogs) {
        footerLogs.prepend(logEntry);
        // Keep only last 10 logs for performance
        if (footerLogs.children.length > 10) footerLogs.lastChild.remove();
    }
};

// Simulation: 5-second heartbeat as per instruction [cite: 2026-02-11]
setInterval(window.refreshAuditUI, 5000);
