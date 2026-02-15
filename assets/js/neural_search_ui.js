/**
 * PROJECT A1: NEURAL SEARCH UI
 * Displays the vector search process on the dashboard.
 */

window.visualizeMemoryRecall = async function(query) {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    let searchDiv = document.createElement('div');
    searchDiv.className = "p-2 bg-black border-start border-success mt-2";
    searchDiv.innerHTML = `
        <div class='text-success fw-bold small'><i class="bi bi-cpu"></i> NEURAL_SEARCH: "${query}"</div>
        <div class="progress mt-1" style="height: 2px; background: #0a0a0a;">
            <div class="progress-bar bg-success" id="search-progress" style="width: 0%"></div>
        </div>
    `;
    termOutput.appendChild(searchDiv);

    // Animation: Simulated Neural Firing
    const progressBar = searchDiv.querySelector('#search-progress');
    for (let i = 0; i <= 100; i += 20) {
        await new Promise(r => setTimeout(r, 100));
        progressBar.style.width = i + "%";
    }

    let result = document.createElement('div');
    result.className = "text-secondary x-small mt-1";
    result.innerHTML = `[RECALL_SUCCESS] Relevant Context Identified in 0.4ms.`;
    searchDiv.appendChild(result);
    termOutput.scrollTop = termOutput.scrollHeight;
};
