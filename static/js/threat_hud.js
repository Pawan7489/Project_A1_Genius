/**
 * PROJECT A1: THREAT HUD
 * Visualizes cyber-defense alerts and blocked attempts.
 */

window.flashBreachAlert = function(origin, type) {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    // Create Red Alert Overlay
    let alertDiv = document.createElement('div');
    alertDiv.className = "p-2 bg-danger text-white fw-bold mb-2 animate-pulse";
    alertDiv.style.borderLeft = "5px solid #ffcc00";
    alertDiv.innerHTML = `
        <i class="bi bi-shield-slash"></i> BREACH_ATTEMPT_BLOCKED
        <div style="font-size: 0.7rem;">ORIGIN: ${origin} | TYPE: ${type}</div>
    `;
    
    termOutput.prepend(alertDiv);
    
    // Play Alert Sound Simulation
    console.warn(`[DEFENSE_HUD] Neutralized ${type} from ${origin}.`);
    
    setTimeout(() => {
        alertDiv.style.opacity = '0.5';
    }, 5000);
};

// Simulated Test: window.flashBreachAlert('8.8.8.8', 'BRUTE_FORCE');
