/**
 * PROJECT A1: MULTI-AGENT CHAT HUD
 * Renders the group discussion between AI experts on the Dashboard. [cite: 2026-02-11]
 */

window.renderGroupChat = function(engineData) {
    const terminal = document.querySelector('.terminal-output');
    console.log("[UI_CHAT] Syncing Multi-Agent Responses...");

    // Visual feedback: Each engine gets a unique neon border
    Object.keys(engineData).forEach(engine => {
        let bubble = document.createElement('div');
        bubble.className = "p-2 mb-2 border-l-4 border-cyan-500 bg-cyan-900/10 text-[10px]";
        bubble.innerHTML = `<span class="font-bold text-cyan-400">${engine}:</span> ${engineData[engine]}`;
        
        if (terminal) {
            terminal.appendChild(bubble);
        }
    });
    
    // Rule: Human-in-the-Loop - Thumbs up the best response [cite: 2026-02-11]
    console.log("[HUD] Awaiting Commander's Thumbs-Up for RLHF Audit.");
};
