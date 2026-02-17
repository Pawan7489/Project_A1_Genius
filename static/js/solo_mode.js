/**
 * PROJECT A1: SOLO MODE PROTOCOL
 * Rule: If a module is missing, skip and continue.
 */

window.checkModuleAvailability = function(moduleName) {
    const registry = ["Core_Brain", "Terminal", "Admin_Panel"]; // Active modules
    
    if (registry.includes(moduleName)) {
        return true;
    } else {
        // Solo Mode Message
        const termOutput = document.querySelector('.terminal-output');
        if (termOutput) {
            let msg = document.createElement('div');
            msg.style.color = "#ff8c00"; // Alert Orange
            msg.innerHTML = `[SOLO MODE] ${moduleName} not detected. Skipping to maintain stability...`;
            termOutput.appendChild(msg);
            termOutput.scrollTop = termOutput.scrollHeight;
        }
        return false;
    }
};

// Example Usage:
// if (checkModuleAvailability("Video_Model")) { runVideo(); }
