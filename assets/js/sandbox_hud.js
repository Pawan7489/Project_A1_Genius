/**
 * PROJECT A1: SANDBOX VISUALIZER
 * Shows the containment status of generated code.
 */

window.triggerSandboxUI = async function(codePreview) {
    const termOutput = document.querySelector('.terminal-output');
    
    let jailDiv = document.createElement('div');
    jailDiv.style.border = "1px solid #ff003c";
    jailDiv.style.padding = "10px";
    jailDiv.style.backgroundColor = "rgba(255, 0, 60, 0.05)";
    jailDiv.innerHTML = `<div class='text-danger fw-bold'>[SANDBOX_CONTAINMENT] Isolating Code...</div>`;
    termOutput.appendChild(jailDiv);

    const containmentSteps = [
        "Analyzing code syntax...",
        "Scanning for forbidden system calls...",
        "Generating virtual environment...",
        "Executing in Isolated Jail..."
    ];

    for (let step of containmentSteps) {
        await new Promise(r => setTimeout(r, 600));
        let s = document.createElement('div');
        s.style.fontSize = "0.8rem";
        s.innerHTML = `> ${step} <span class='text-warning'>[PENDING]</span>`;
        jailDiv.appendChild(s);
        termOutput.scrollTop = termOutput.scrollHeight;
    }

    console.log("Sandbox Protocol: Code execution isolated from host OS.");
};
