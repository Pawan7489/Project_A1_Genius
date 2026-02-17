/**
 * PROJECT A1: VOICE SIDEBAR HUD
 * Controls the AI persona selection and real-time audio visualization.
 */

window.switchVoicePersona = function(personaId) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_VOICE] Reconfiguring Neural Tone to: ${personaId}...`);

    // Visual feedback for the hacker command center
    let log = document.createElement('div');
    log.className = "text-pink-400 x-small animate-pulse";
    log.innerHTML = `[VOICE_SYNC] Persona Shifted: ${personaId} | GHOST_STUB_ACTIVE: YES`;
    
    if (terminal) {
        terminal.appendChild(log);
    }
    
    // Rule: Feedback Mechanism - ask if the tone is correct. [cite: 2026-02-11]
    console.log("[HUD] Monitoring vocal frequency alignment...");
};

window.updateVoiceVolume = function(value) {
    console.log(`[UI_VOICE] Master Gain adjusted to ${value}%`);
};
