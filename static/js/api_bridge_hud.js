/**
 * PROJECT A1: API BRIDGE HUD
 * Bridges the UI buttons with the Python Backend Logic. [cite: 2026-02-11]
 */

window.callA1Core = async function(intentName, payload = {}) {
    console.log(`[UI_BRIDGE] Sending Intent: ${intentName}...`);
    
    try {
        const response = await fetch('http://127.0.0.1:8000/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ intent: intentName, data: payload })
        });
        
        const result = await response.json();
        
        // Rule: Visual feedback on Terminal for the hacker aesthetic
        const terminal = document.querySelector('.terminal-output');
        if (terminal) {
            let log = document.createElement('div');
            log.className = "text-cyan-400 x-small";
            log.innerHTML = `[CORE_RESPONSE] ${result.message}`;
            terminal.appendChild(log);
        }
        
        return result;
    } catch (error) {
        console.error("[BRIDGE_ERROR] Core connection failed.", error);
    }
};
