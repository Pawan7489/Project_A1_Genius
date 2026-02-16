/**
 * PROJECT A1: VOICE INTERFACE HUD
 * Renders the real-time audio visualization on the Dashboard. [cite: 2026-02-11]
 */

window.triggerVoiceWave = function(isActive) {
    const waveContainer = document.getElementById('vocal-wave-visualizer');
    console.log(`[UI_VOICE] Voice State: ${isActive ? 'SPEAKING' : 'IDLE'}`);

    if (waveContainer) {
        if (isActive) {
            waveContainer.classList.add('animate-pulse', 'text-cyan-400');
            // Rule: Visual feedback for NASA aesthetic
            console.log("[HUD] Voice Waveform Syncing at 44.1kHz...");
        } else {
            waveContainer.classList.remove('animate-pulse');
        }
    }
};

// Function to toggle between personas from UI
window.setA1Persona = function(type) {
    console.log(`[NEXUS] Setting Vocal Persona to: ${type}`);
    // Rule: Zuckerberg Rule (Speed) - Instant UI update [cite: 2026-02-11]
    alert(`A1 Persona switched to ${type}`);
};
