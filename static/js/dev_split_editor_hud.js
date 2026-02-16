/**
 * PROJECT A1: DEV SPLIT-PANEL HUD
 * Manages the side-by-side JS/Java panels and VS Code auto-install UI.
 */

window.executeNexusScript = function(panelType) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_DEV] Compiling code from ${panelType}...`);

    // Visual feedback for the hacker command center
    let log = document.createElement('div');
    log.className = "text-orange-500 x-small animate-pulse";
    log.innerHTML = `[NEXUS_EXEC] Pushing ${panelType} code to Sandbox... Checking VS_CODE_SYNC... [OK]`;
    
    if (terminal) {
        terminal.appendChild(log);
    }
};

window.onVSCodeAutoInstall = function() {
    // Rule: Visual Logic Builder - dragging hosting node simulation.
    console.log("[HUD] Deploying VS Code via A1 Terminal...");
    alert("VS Code Auto-Installation Initiated. Check Terminal for Progress.");
};
