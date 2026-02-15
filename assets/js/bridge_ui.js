/**
 * PROJECT A1: CONNECTIVITY BRIDGE UI
 * Displays the current 'Brain' source in real-time.
 */

window.updateConnectivityHUD = function(source) {
    const hudElement = document.getElementById('net-stat');
    if (hudElement) {
        if (source === 'LOCAL') {
            hudElement.innerHTML = "<span class='text-success'>● LOCAL_MESH</span>";
        } else if (source === 'CLOUD') {
            hudElement.innerHTML = "<span class='text-info'>● CLOUD_LINK</span>";
        } else {
            hudElement.innerHTML = "<span class='text-danger'>● DISCONNECTED</span>";
        }
    }
};

// Auto-check connectivity every 10 seconds
setInterval(() => {
    // Simulated check: window.updateConnectivityHUD('LOCAL');
}, 10000);
