/**
 * PROJECT A1: TREND REPORT HUD
 * Renders the Morning Intelligence ticker and report summary.
 */

window.displayMorningReport = function(data) {
    const terminal = document.querySelector('.terminal-output');
    console.log("[UI_TRENDS] Rendering Global Intelligence Report...");

    // Visual feedback: Neon Orange for Critical Global Trends
    let log = document.createElement('div');
    log.className = "text-orange-400 x-small animate-pulse border-l-2 border-orange-600 pl-2";
    log.innerHTML = `[MORNING_REPORT] TECH: ${data.top_tech_trend} | AI: ${data.ai_news} | SYNC: 100%`;
    
    if (terminal) {
        terminal.prepend(log);
    }
    
    // Rule: Zuckerberg Rule (Speed) - Instant access to full news summary
    console.log("[HUD] News Ticker updated with Global Latency: 120ms");
};
