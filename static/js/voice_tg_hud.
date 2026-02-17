/**
 * PROJECT A1: VOICE-TO-TG VISUALIZER
 * Animates the data flow between Voice Input and Telegram Cloud.
 */

window.animateVoiceToCloud = async function() {
    const micIcon = document.getElementById('btn-mic');
    const tgIcon = document.getElementById('tg-cloud-status');

    if (micIcon && tgIcon) {
        // Visual Pulse on Mic
        micIcon.classList.add('animate-pulse-success');
        
        // Show Data Packets flying across terminal
        const terminal = document.querySelector('.terminal-output');
        let packet = document.createElement('div');
        packet.className = "text-info x-small";
        packet.innerHTML = `[SYNC] Voice Packet >>> [BRIDGE] >>> [TELEGRAM_CLOUD]`;
        terminal.appendChild(packet);

        setTimeout(() => {
            micIcon.classList.remove('animate-pulse-success');
            tgIcon.style.color = "#0088cc"; // Telegram Blue glow
        }, 1500);
    }
};

// CSS for the link effect
const style = document.createElement('style');
style.innerHTML = `
    .animate-pulse-success { animation: pulseGreen 1s infinite; }
    @keyframes pulseGreen { 0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); } 100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); } }
`;
document.head.appendChild(style);
