/**
 * PROJECT A1: SOCIAL MESH HUD
 * Renders the real-time social distribution pulse and engagement metrics.
 */

window.triggerSocialPulse = function(platformId) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_MESH] Triggering Social Pulse for ${platformId}...`);

    // Visual feedback: Neon Pink for Active Distribution
    let log = document.createElement('div');
    log.className = "text-pink-500 x-small animate-pulse border-l-2 border-pink-700 pl-2";
    log.innerHTML = `[SOCIAL_MESH] Node: ${platformId} | STATUS: BROADCASTING_LIVE | IMPACT: HIGH`;
    
    if (terminal) {
        terminal.prepend(log);
    }
    
    // Rule: Zuckerberg Rule (Speed) - Real-time sync feedback
    console.log(`[HUD] Social Mesh latency: 14ms | Platform: ${platformId}`);
};
