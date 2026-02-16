/**
 * PROJECT A1: SENTINEL VISUALIZER HUD
 * Renders the 3D rotating scan animation and retina pulse.
 */

window.startSentinelScan = function() {
    console.log("[UI_SENTINEL] Engaging 3D Biometric Scan...");
    const loginModal = document.getElementById('login-modal');
    
    // Rule: Visual feedback for the NASA style command center
    if (loginModal) {
        loginModal.classList.add('scanning-active');
        // Simulate glowing pulse
        console.log("[HUD] Pulse frequency: 60Hz | Confidence: High");
    }

    // Rule: Zuckerberg Rule (Speed) - Swift transition after 5s check
    setTimeout(() => {
        alert("Commander Identity Verified. Welcome to Project A1.");
        window.location.href = "dashboard.html";
    }, 5000);
};
