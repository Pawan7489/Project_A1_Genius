/**
 * PROJECT A1: LIVE TELEMETRY HUD
 * Simulates NASA-style real-time system monitoring.
 */

window.startTelemetry = function() {
    setInterval(() => {
        const gpuTemp = Math.floor(Math.random() * (45 - 38 + 1) + 38);
        const memLoad = (Math.random() * (15 - 5) + 5).toFixed(1);
        
        // Update AdminLTE Small Boxes
        const tempBox = document.querySelector('.gpu-temp-display');
        const memBox = document.querySelector('.mem-load-display');
        
        if(tempBox) tempBox.innerText = `${gpuTemp}°C`;
        if(memBox) memBox.innerText = `${memLoad}%`;
        
        console.log(`[TELEMETRY] GPU: ${gpuTemp}°C | Neural Load: ${memLoad}%`);
    }, 3000);
};

// Start HUD on load
document.addEventListener('DOMContentLoaded', startTelemetry);
