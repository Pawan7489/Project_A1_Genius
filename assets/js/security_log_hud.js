/**
 * PROJECT A1: SECURITY LOG HUD
 * Renders the real-time Onion Layer clearance logs on the Dashboard.
 */

window.pushSecurityLog = function(layer, msg) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_SEC] Layer ${layer} reporting: ${msg}`);

    // Visual feedback for the hacker command center
    let log = document.createElement('div');
    log.className = "text-green-500 x-small animate-pulse border-l-2 border-green-900 pl-2 mb-1";
    log.innerHTML = `[ONION_L${layer}] ${msg} | CLEARANCE_CODE: A1-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    
    if (terminal) {
        terminal.appendChild(log);
        terminal.scrollTop = terminal.scrollHeight;
    }
};

// Simulation: Real-time security heartbeat
setInterval(() => {
    const layer = Math.floor(Math.random() * 4) + 1;
    window.pushSecurityLog(layer, "Integrity Check Passed.");
}, 8000);
