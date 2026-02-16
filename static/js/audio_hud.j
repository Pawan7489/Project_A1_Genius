/**
 * PROJECT A1: AUDIO HUD VISUALIZER
 * Animates a canvas-based waveform during AI speech/listening.
 */

window.toggleVoiceWave = function(isActive) {
    const waveContainer = document.getElementById('voice-wave-container');
    if (!waveContainer) return;

    if (isActive) {
        waveContainer.style.display = 'block';
        waveContainer.innerHTML = `
            <div class="d-flex align-items-end justify-content-center" style="height: 40px; gap: 3px;">
                <div class="bg-success bar-anim" style="width: 4px; height: 100%;"></div>
                <div class="bg-success bar-anim-slow" style="width: 4px; height: 60%;"></div>
                <div class="bg-success bar-anim" style="width: 4px; height: 80%;"></div>
                <div class="bg-success bar-anim-fast" style="width: 4px; height: 40%;"></div>
            </div>
            <p class="text-center text-success small mt-1 font-monospace">AI_VOCALIZING...</p>
        `;
    } else {
        waveContainer.style.display = 'none';
    }
};

// CSS for Animation
const style = document.createElement('style');
style.innerHTML = `
    .bar-anim { animation: barGrow 0.5s ease-in-out infinite alternate; }
    .bar-anim-slow { animation: barGrow 0.8s ease-in-out infinite alternate; }
    .bar-anim-fast { animation: barGrow 0.3s ease-in-out infinite alternate; }
    @keyframes barGrow { from { height: 10%; } to { height: 100%; } }
`;
document.head.appendChild(style);
