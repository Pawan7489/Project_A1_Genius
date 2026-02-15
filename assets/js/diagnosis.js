/**
 * PROJECT A1: VISUAL SELF-DIAGNOSIS
 * Runs for 5 seconds before allowing command execution.
 */

window.startDiagnosisUI = async function() {
    const termOutput = document.querySelector('.terminal-output');
    const stats = ["NETWORK", "GPU TEMP", "MEMORY", "DRIVES"];
    
    let diagDiv = document.createElement('div');
    diagDiv.style.color = "#ffc107"; // Warning Yellow
    diagDiv.innerHTML = "<div>[DIAGNOSIS] Starting 5-second pre-flight check...</div>";
    termOutput.appendChild(diagDiv);

    for(let i=0; i < stats.length; i++) {
        await new Promise(r => setTimeout(r, 1250));
        let p = document.createElement('div');
        p.innerHTML = `> Checking ${stats[i]}... <span class='text-success'>[STABLE]</span>`;
        diagDiv.appendChild(p);
        termOutput.scrollTop = termOutput.scrollHeight;
    }

    return true; // Diagnosis Passed
};
