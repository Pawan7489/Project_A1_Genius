/* FILENAME: assets/js/adminlte.js
   PROJECT A1: CORE LOGIC SYSTEM
*/

document.addEventListener('DOMContentLoaded', function () {
    console.log("A1 CORE SYSTEM: ONLINE");

    // --- 1. SIDEBAR TOGGLE LOGIC ---
    const sidebarToggle = document.querySelector('[data-lte-toggle="sidebar"]');
    const body = document.body;

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function (e) {
            e.preventDefault();
            if (body.classList.contains('sidebar-collapse')) {
                body.classList.remove('sidebar-collapse');
                body.classList.add('sidebar-open');
            } else {
                body.classList.add('sidebar-collapse');
                body.classList.remove('sidebar-open');
            }
        });
    }

    // --- 2. KILL SWITCH PROTOCOL ---
    const killButtons = document.querySelectorAll('.btn-kill, .btn-kill-switch');
    
    killButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Confirm Action
            let confirmAction = confirm("⚠️ WARNING: INITIATING EMERGENCY SHUTDOWN?\n\nThis will cut all network connections.");
            
            if (confirmAction) {
                document.body.innerHTML = `
                    <div style="background:black; color:red; height:100vh; display:flex; align-items:center; justify-content:center; flex-direction:column; font-family:'Courier New'">
                        <h1 style="font-size:5rem; text-shadow: 0 0 10px red;">SYSTEM TERMINATED</h1>
                        <p>ALL CONNECTIONS SEVERED.</p>
                        <p>SAFE MODE ACTIVE.</p>
                    </div>
                `;
            }
        });
    });

    // --- 3. TERMINAL TYPING EFFECT ---
    const terminalOutput = document.querySelector('.terminal-window .output');
    if (terminalOutput) {
        const messages = [
            "[SYSTEM] Connecting to Neural Net...",
            "[SUCCESS] Link Established.",
            "[SECURITY] Firewall: ACTIVE (Level 5)",
            "[AI] Loading Ghost Modules...",
            "root@A1-Genius:~$ "
        ];

        let i = 0;
        function typeWriter() {
            if (i < messages.length) {
                let p = document.createElement('div');
                p.innerHTML = messages[i];
                terminalOutput.appendChild(p);
                i++;
                setTimeout(typeWriter, 800); // Speed of typing
            }
        }
        setTimeout(typeWriter, 1000);
    }

    // --- 4. REAL-TIME CLOCK ---
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateElement = document.getElementById('system-time');
        if (dateElement) {
            dateElement.innerText = timeString;
        }
    }
    setInterval(updateTime, 1000);
});
