/**
 * PROJECT A1: CODEX VIEWER
 * Renders the system documentation directly on the dashboard.
 */

window.openCodex = function() {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    let docDiv = document.createElement('div');
    docDiv.className = "p-3 bg-dark border-start border-info mt-2";
    docDiv.innerHTML = `
        <h5 class="text-info"><i class="bi bi-book"></i> A1_TECHNICAL_CODEX</h5>
        <p class="small text-secondary">Loading Blueprint Registry...</p>
        <ul class="small font-monospace text-white">
            <li>Part 1-10: Foundation & Core Layers</li>
            <li>Part 11-20: Connectivity & Multimodal Senses</li>
            <li>Part 21-30: Security & Evolution Hub</li>
            <li>Part 31-32: Omnistat & Technical Codex</li>
        </ul>
        <button class="btn btn-xs btn-outline-info" onclick="this.parentElement.remove()">Close Codex</button>
    `;
    termOutput.appendChild(docDiv);
    termOutput.scrollTop = termOutput.scrollHeight;
};

// Console Log for Verification
console.log("Project A1: Technical Codex successfully registered in Blueprint Hub.");
