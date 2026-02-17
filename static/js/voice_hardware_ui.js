/**
 * PROJECT A1: VOICE HARDWARE UI
 * Animates hardware buttons based on voice commands.
 */

window.triggerHardwareUI = function(action) {
    const actionMap = {
        'MIC_OFF': 'btn-mic',
        'SPEAKER_ON': 'btn-spk',
        'KILL_SWITCH_ACTIVATE': 'btn-kill',
        'DIAGNOSIS_RUN': 'btn-net'
    };

    const elementId = actionMap[action];
    const element = document.getElementById(elementId);

    if (element) {
        // Visual Feedback: Button Glow & Press
        element.classList.add('btn-pulse-active');
        console.log(`[UI_HARDWARE] Visualizing action: ${action}`);
        
        setTimeout(() => {
            element.classList.remove('btn-pulse-active');
        }, 2000);
    }
};

// CSS for Hardware Glow
const style = document.createElement('style');
style.innerHTML = `
    .btn-pulse-active { 
        box-shadow: 0 0 15px #ff003c; 
        transform: scale(0.95);
        transition: all 0.2s ease;
    }
`;
document.head.appendChild(style);
