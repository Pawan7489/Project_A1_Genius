/**
 * PROJECT A1: MULTIMODAL HUD
 * Shows which 'Senses' are currently processing data.
 */

window.updateSensingHUD = function(sense, isActive) {
    const termOutput = document.querySelector('.terminal-output');
    
    if (isActive) {
        let status = document.createElement('div');
        status.className = "badge bg-info me-1";
        status.innerHTML = `<i class="bi bi-eye"></i> ${sense}_ACTIVE`;
        
        // Show in Terminal
        let log = document.createElement('div');
        log.className = "text-info small";
        log.innerHTML = `[HUD] ${sense} module triggered cross-linking protocol.`;
        termOutput.appendChild(log);
        termOutput.scrollTop = termOutput.scrollHeight;
    }
};

// Simulated trigger for testing:
// window.updateSensingHUD('VISION', true);
