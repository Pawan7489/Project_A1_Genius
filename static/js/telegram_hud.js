/**
 * PROJECT A1: TELEGRAM MUD HUD
 * Displays live telegram storage usage and bot traffic.
 */

window.updateTelegramStats = function() {
    const cloudStatus = document.getElementById('tg-cloud-status');
    const botActivity = document.getElementById('tg-bot-log');

    // Simulated data from telegram_config.json
    const stats = { storage: "UNLIMITED", active_bots: 2, status: "SYNCED" };

    if (cloudStatus) {
        cloudStatus.innerHTML = `<i class="bi bi-cloud-check text-info"></i> TG_STORAGE: ${stats.storage}`;
    }

    if (botActivity) {
        let entry = document.createElement('div');
        entry.className = "text-info x-small font-monospace";
        entry.innerHTML = `[BOT] Database sync initiated at ${new Date().toLocaleTimeString()}`;
        botActivity.appendChild(entry);
    }
};

// Initial Sync
setInterval(window.updateTelegramStats, 30000);
