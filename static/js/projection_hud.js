/**
 * PROJECT A1: VISUAL PROJECTION HUD
 * Displays synthesized videos and animations on the UI.
 */

window.launchProjection = function(videoPath, prompt) {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    // Create Projection Window
    let projDiv = document.createElement('div');
    projDiv.className = "p-3 bg-black border border-info mt-2 rounded shadow-lg";
    projDiv.innerHTML = `
        <div class='text-info fw-bold small mb-2'><i class="bi bi-projector"></i> VISUAL_PROJECTION: "${prompt}"</div>
        <div class="video-container" style="background: #111; height: 180px; display: flex; align-items: center; justify-content: center;">
            <span class="text-secondary small font-monospace">[SIMULATED_VIDEO_FEED_ACTIVE]</span>
        </div>
        <div class="mt-2 d-flex justify-content-between">
            <span class="text-success x-small font-monospace">SOURCE: ${videoPath}</span>
            <button class="btn btn-xs btn-outline-danger" onclick="this.parentElement.parentElement.remove()">CLOSE</button>
        </div>
    `;
    
    termOutput.appendChild(projDiv);
    termOutput.scrollTop = termOutput.scrollHeight;
    
    console.log(`[PROJECTION] UI rendered for prompt: ${prompt}`);
};

// Example trigger: window.launchProjection('./assets/renders/demo.mp4', 'Holographic Circuit');
