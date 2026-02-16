/**
 * PROJECT A1: BIOMETRIC HUD
 * Renders the visual scan animation and identity verification UI.
 */

window.triggerBiometricScan = function() {
    console.log("[UI_AUTH] Activating Neural Scan HUD...");
    
    // Rule: Visual feedback for the hacker command center
    const scanOverlay = document.createElement('div');
    scanOverlay.className = "biometric-scanner-active";
    scanOverlay.innerHTML = `
        <div class="scanner-line"></div>
        <div class="text-[8px] text-blue-400 font-mono mt-4">
            SCANNING_FACE_MARKERS... <br>
            RETINA_CONFIDENCE: 98.4% <br>
            IDENTITY: VERIFIED_ADMIN
        </div>
    `;
    
    document.querySelector('.login-modal').appendChild(scanOverlay);
    
    // Rule: Zuckerberg Rule (Speed) - Swift transition to dashboard [cite: 2026-02-11]
    setTimeout(() => {
        window.activateDashboard();
    }, 3000);
};

// CSS for the scanner effect
const style = document.createElement('style');
style.innerHTML = `
    .scanner-line { height: 2px; width: 100%; background: #3b82f6; position: absolute; animation: scan 2s linear infinite; }
    @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
`;
document.head.appendChild(style);
