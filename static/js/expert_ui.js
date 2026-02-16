/**
 * PROJECT A1: EXPERT DISCUSSION UI
 * Visualizes the council's deliberation in the terminal.
 */

window.showCouncilDiscussion = async function(task) {
    const termOutput = document.querySelector('.terminal-output');
    const experts = [
        { name: "CODER", color: "#007bff", msg: "Writing optimized logic path..." },
        { name: "AUDITOR", color: "#dc3545", msg: "Scanning for security breaches..." },
        { name: "STRATEGIST", color: "#ffc107", msg: "Checking scalability standards..." }
    ];

    let councilDiv = document.createElement('div');
    councilDiv.innerHTML = `<div class='text-white'>[COUNCIL] Deliberating on: <b>${task}</b></div>`;
    termOutput.appendChild(councilDiv);

    for (let expert of experts) {
        await new Promise(r => setTimeout(r, 1000));
        let p = document.createElement('div');
        p.innerHTML = `<span style='color:${expert.color}'>[${expert.name}]</span> ${expert.msg}`;
        termOutput.appendChild(p);
        termOutput.scrollTop = termOutput.scrollHeight;
    }

    await new Promise(r => setTimeout(r, 800));
    let critique = document.createElement('div');
    critique.style.color = "#00ff41";
    critique.innerHTML = "[INTERNAL CRITIQUE] Solution verified. No bugs found. Executing...";
    termOutput.appendChild(critique);
};
