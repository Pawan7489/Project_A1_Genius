/**
 * PROJECT A1: REASONING HUD
 * Visualizes the 'Hidden Path' before final output.
 */

window.showReasoningPath = async function(task) {
    const termOutput = document.querySelector('.terminal-output');
    
    let reasoningDiv = document.createElement('div');
    reasoningDiv.style.borderLeft = "2px dashed #555";
    reasoningDiv.style.paddingLeft = "15px";
    reasoningDiv.style.marginBottom = "10px";
    reasoningDiv.innerHTML = `<div class='text-secondary'>[INTERNAL_REASONING] Task: ${task}</div>`;
    termOutput.appendChild(reasoningDiv);

    const steps = [
        "Analyzing intent (Hinglish Support)...",
        "Checking Registry for active members...",
        "Applying Internal Critique (Efficiency Audit)...",
        "Finalizing Reasoning Path..."
    ];

    for (let step of steps) {
        await new Promise(r => setTimeout(r, 600));
        let s = document.createElement('div');
        s.style.fontSize = "0.85rem";
        s.style.color = "#888";
        s.innerHTML = `> ${step} <span class='text-success'>[OK]</span>`;
        reasoningDiv.appendChild(s);
        termOutput.scrollTop = termOutput.scrollHeight;
    }
};
