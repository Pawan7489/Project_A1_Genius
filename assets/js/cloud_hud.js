/**
 * PROJECT A1: CLOUD HUD MONITOR
 * Displays real-time GPU/CPU load from remote nodes.
 */

window.syncCloudStatus = function() {
    // Simulated fetch from remote_tasks.json
    const cloudStats = { platform: 'Google Colab', gpu: '78%', status: 'ACTIVE' };
    
    const terminal = document.querySelector('.terminal-output');
    if (terminal) {
        let log = document.createElement('div');
        log.style.color = "#00d4ff"; // Cloud Blue
        log.innerHTML = `[CLOUD_BRIDGE] Node: ${cloudStats.platform} | GPU_Load: ${cloudStats.gpu} | Status: ${cloudStats.status}`;
        terminal.appendChild(log);
        terminal.scrollTop = terminal.scrollHeight;
    }
    
    // Update Sidebar Widget (if exists)
    const cloudWidget = document.getElementById('cloud-node-status');
    if(cloudWidget) cloudWidget.innerHTML = `Colab: ${cloudStats.gpu}`;
};

// Start cloud monitoring
setInterval(window.syncCloudStatus, 15000);
