/**
 * PROJECT A1: SEARCH HUD
 * Manages the visual data-streaming effect during knowledge crawls.
 */

window.displayCrawlStream = function(query, source) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_CRAWL] Streaming data from ${source}...`);

    // Visual feedback for the hacker command center
    let log = document.createElement('div');
    log.className = "text-cyan-400 x-small animate-pulse";
    log.innerHTML = `[HARVESTING] Query: ${query} | Source: ${source} | Status: SHADOW_COPYING...`;
    terminal.appendChild(log);

    // Rule: Council of Experts Audit visual trigger [cite: 2026-02-11]
    console.log("[CRAWL] Knowledge package sent to Council for auditing.");
};
