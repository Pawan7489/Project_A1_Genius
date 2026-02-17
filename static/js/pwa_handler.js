/**
 * PROJECT A1: PWA HANDLER
 * Enables 'Add to Home Screen' and manages mobile sync UI.
 */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(reg => {
            console.log('[PWA] Service Worker Active on Node:', reg.scope);
        }).catch(err => {
            console.log('[PWA] Registration Failed:', err);
        });
    });
}

window.showMobileSyncQR = function() {
    const termOutput = document.querySelector('.terminal-output');
    if (terminal) {
        let qrPlaceholder = document.createElement('div');
        qrPlaceholder.style.border = "1px solid #00ff41";
        qrPlaceholder.style.padding = "10px";
        qrPlaceholder.className = "mt-2 text-center";
        qrPlaceholder.innerHTML = `
            <div class="text-success small">[REMOTE_SYNC_INITIATED]</div>
            <div class="h6 text-white my-2">SCAN TOKEN: A1-MOB-SYNC-786</div>
            <div class="text-secondary x-small">Use this token in your mobile browser to link units.</div>
        `;
        termOutput.appendChild(qrPlaceholder);
        termOutput.scrollTop = termOutput.scrollHeight;
    }
};
