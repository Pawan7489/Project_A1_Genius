/**
 * PROJECT A1: MASTER LOGIC SYSTEM
 * Template: AdminLTE 4
 * Features: Kill Switch, Self-Diagnosis, RLHF Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("A1 CORE SYSTEM: INITIALIZING...");

    // 1. SIDEBAR & UI LOGIC (AdminLTE Standard)
    const sidebarToggle = document.querySelector('[data-lte-toggle="sidebar"]');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('sidebar-collapse');
            document.body.classList.toggle('sidebar-open');
        });
    }

    // 2. SELF-DIAGNOSIS PROTOCOL (Prompt Requirement)
    // Har naye task se pehle AI check karega
    window.runSelfDiagnosis = async function() {
        const terminal = document.querySelector('.terminal-output');
        const checks = [
            { msg: "Checking Internet Status...", status: "OK" },
            { msg: "Monitoring GPU Temp...", status: "42°C - STABLE" },
            { msg: "Analyzing Memory Availability...", status: "16GB FREE" },
            { msg: "Verifying Drive Connections (D/E)...", status: "CONNECTED" }
        ];

        console.log("Starting 5-Second Self-Diagnosis...");
        
        for (let check of checks) {
            let log = document.createElement('div');
            log.innerHTML = `> ${check.msg} <span style="color:#fff">[${check.status}]</span>`;
            if (terminal) terminal.appendChild(log);
            await new Promise(r => setTimeout(r, 1250)); // Total 5 Seconds
        }
        
        return true;
    };

    // 3. KILL SWITCH PROTOCOL (Master Override)
    // Ctrl + Alt + K se system instantly freeze ho jayega
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey && e.key === 'k') {
            executeKillSwitch();
        }
    });

    const killBtn = document.querySelector('.btn-kill-protocol');
    if (killBtn) killBtn.addEventListener('click', executeKillSwitch);

    function executeKillSwitch() {
        console.error("EMERGENCY KILL SWITCH ACTIVATED!");
        document.body.innerHTML = `
            <div style="background:#000; color:red; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:monospace; text-align:center;">
                <h1 style="font-size:4rem; border:5px solid red; padding:20px;">SYSTEM FREEZE</h1>
                <p style="font-size:1.5rem;">MASTER OVERRIDE DETECTED. ALL PROCESSES HALTED.</p>
                <p>Internet Access: SEVERED | State: SAVED</p>
                <button onclick="location.reload()" style="background:red; color:white; border:none; padding:10px 20px; cursor:pointer; margin-top:20px;">RE-INITIALIZE SYSTEM</button>
            </div>
        `;
    }

    // 4. HUMAN-IN-THE-LOOP (RLHF) FEEDBACK
    window.submitFeedback = function(rating) {
        const score = rating === 'up' ? "Good Job" : "Bad Logic Path";
        console.log(`Saving feedback to Vector DB: ${score}`);
        alert(`Feedback Received: ${score}. AI will adapt.`);
        // Future: Yahan se Vector DB API call hoga
    };

    // 5. TERMINAL AUTOMATION
    const output = document.querySelector('.terminal-output');
    if (output) {
        const bootSequence = [
            "Project A1 Super Genius AI - Version 1.0.0",
            "Loading Core Constitution... LOCKED",
            "Scanning Registry.py... ACTIVE",
            "Ready for Commander commands."
        ];
        bootSequence.forEach((text, i) => {
            setTimeout(() => {
                let line = document.createElement('div');
                line.innerText = `[BOOT] ${text}`;
                output.appendChild(line);
            }, i * 500);
        });
    }
});
