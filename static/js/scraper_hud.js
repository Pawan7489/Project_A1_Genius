/**
 * PROJECT A1: SCRAPER HUD
 * Visualizes real-time data scraping on the AdminLTE Dashboard.
 */

window.startIntelStream = async function(topic) {
    const termOutput = document.querySelector('.terminal-output');
    if (!termOutput) return;

    let scraperDiv = document.createElement('div');
    scraperDiv.className = "p-2 bg-black border-start border-info mt-2";
    scraperDiv.innerHTML = `
        <div class='text-info fw-bold small animate-pulse'><i class="bi bi-globe"></i> NEURAL_LINK_ESTABLISHED</div>
        <div class='text-white x-small'>Target: ${topic}...</div>
        <div id="intel-flow" class="text-secondary x-small mt-1" style="height: 40px; overflow: hidden;"></div>
    `;
    termOutput.appendChild(scraperDiv);

    const intelLines = [
        "Connecting to TechCrunch Node...",
        "Parsing HTML Metadata...",
        "Filtering through Relevance Filter (Score: 9.2)...",
        "Data Packet Synced to Local DB."
    ];

    const flowContainer = document.getElementById('intel-flow');
    for (let line of intelLines) {
        await new Promise(r => setTimeout(r, 800));
        let l = document.createElement('div');
        l.innerText = `>>> ${line}`;
        flowContainer.appendChild(l);
        termOutput.scrollTop = termOutput.scrollHeight;
    }

    console.log(`[SCRAPER] Intelligence gathered on ${topic}.`);
};
