/**
 * PROJECT A1: PERSONA & WP UI
 * Manages WordPress status and Voice Profile switching visually.
 */

window.setAIVoiceProfile = function(ageGroup) {
    const statusLabel = document.getElementById('persona-status');
    const colorMap = { 'KID': 'bg-pink', 'COLLEGE': 'bg-info', 'SENIOR': 'bg-secondary' };
    
    if (statusLabel) {
        statusLabel.className = `badge ${colorMap[ageGroup] || 'bg-success'}`;
        statusLabel.innerText = `MODE: ${ageGroup}`;
    }
    console.log(`[UI_PERSONA] System logic adapted for ${ageGroup} audience.`);
};

window.wpQuickDeploy = function(slug) {
    const terminal = document.querySelector('.terminal-output');
    let log = document.createElement('div');
    log.className = "text-warning small font-monospace";
    log.innerHTML = `[WP_MASTER] Deploying Theme/Plugin: <b>${slug}</b>...`;
    terminal.appendChild(log);
    // Trigger Python wp_master_bridge logic here
};
