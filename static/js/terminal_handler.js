/**
 * PROJECT A1: TERMINAL INPUT HANDLER
 * Translates UI typing to AI Actions
 */

document.addEventListener('DOMContentLoaded', () => {
    const termInput = document.querySelector('.card-footer input');
    const termOutput = document.querySelector('.terminal-output');

    if (termInput) {
        termInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const cmd = this.value;
                this.value = ''; // Clear input

                // 1. Show user command in terminal
                const userLine = document.createElement('div');
                userLine.innerHTML = `<span class="text-success">A1@Genius:~$</span> ${cmd}`;
                termOutput.appendChild(userLine);

                // 2. Process Intent (Local Logic for Demo)
                processIntentLocally(cmd);
                
                // Scroll to bottom
                termOutput.scrollTop = termOutput.scrollHeight;
            }
        });
    }

    function processIntentLocally(cmd) {
        let response = "";
        const input = cmd.toLowerCase();

        // Simple Keyword-based Intent Mapping (Frontend side)
        if (input.includes("naya folder") || input.includes("create folder")) {
            response = "[INTENT DETECTED] Creating Directory... Calling Python Sandbox...";
        } else if (input.includes("diagnosis") || input.includes("theek hai")) {
            response = "[SYSTEM] Diagnosis Triggered. All parameters within normal range.";
        } else if (input.includes("hello") || input.includes("kaise ho")) {
            response = "I am A1 Super Genius. System is 100% operational. How can I help, Commander?";
        } else {
            response = "[AI] Analyzing syntax... Intent unclear. Please use keywords like 'folder', 'diagnosis', or 'check'.";
        }

        // Display AI Response
        setTimeout(() => {
            const aiLine = document.createElement('div');
            aiLine.style.color = "#00ff41";
            aiLine.innerHTML = `> ${response}`;
            termOutput.appendChild(aiLine);
            termOutput.scrollTop = termOutput.scrollHeight;
        }, 600);
    }
});
      
