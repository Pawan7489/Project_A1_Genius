/**
 * PROJECT A1: SETUP SPLASH SCREEN
 * Visualizes the final system assembly and boot sequence.
 */

window.runBootSequence = async function() {
    const splash = document.getElementById('a1-splash-screen');
    const statusText = document.getElementById('boot-status-text');
    if (!splash) return;

    const bootLogs = [
        "Initializing Project A1 Kernel...",
        "Peeling Onion Layer 4 (Threat Hunter)...",
        "Linking Distributed Mesh (Drive D/E)...",
        "Connecting Telegram Cloud Storage...",
        "Syncing WordPress Master Hub...",
        "System 100% Operational."
    ];

    for (let log of bootLogs) {
        if (statusText) statusText.innerText = log;
        await new Promise(r => setTimeout(r, 700));
        console.log(`[BOOT] ${log}`);
    }

    splash.style.transition = "opacity 1s ease";
    splash.style.opacity = "0";
    setTimeout(() => {
        splash.style.display = 'none';
        window.location.href = "login.html";
    }, 1000);
};
