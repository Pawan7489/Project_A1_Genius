/**
 * PROJECT A1: PERSONALITY HUD
 * Displays the current 'Mental State' of the AI on the Dashboard.
 */

window.updateAIMood = function(mood) {
    const moodBadge = document.getElementById('ai-mood-indicator');
    const colors = {
        'URGENT': 'bg-danger',
        'WITTY': 'bg-warning',
        'EMPATHETIC': 'bg-info',
        'PROFESSIONAL': 'bg-success'
    };

    if (moodBadge) {
        moodBadge.className = `badge ${colors[mood] || 'bg-secondary'}`;
        moodBadge.innerText = `AI_MOOD: ${mood}`;
    }

    console.log(`[PERSONALITY] Switching to ${mood} mode.`);
};

// Example trigger: window.updateAIMood('WITTY');
