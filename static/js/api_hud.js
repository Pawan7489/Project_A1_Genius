/**
 * PROJECT A1: NEURAL API HUD
 * Displays and controls the active AI Brain from the UI.
 */

window.updateBrainHUD = function() {
    const brainBadge = document.getElementById('active-brain-tag');
    // Simulated fetch from provider_configs.json
    const activeBrain = "GEMINI_PRO"; 

    if (brainBadge) {
        brainBadge.innerHTML = `<i class="bi bi-cpu"></i> ENGINE: ${activeBrain}`;
        console.log(`[UI_SYNC] Brain HUD updated to ${activeBrain}`);
    }
};

window.swapBrain = function(newProvider) {
    console.log(`[HOT_SWAP] Requesting switch to ${newProvider}...`);
    // Logic to call Python api_swapper.py
    alert(`Neural Link transitioning to ${newProvider}. Please wait...`);
};
