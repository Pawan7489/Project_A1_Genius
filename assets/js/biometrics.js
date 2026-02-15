/**
 * PROJECT A1: BIOMETRIC SIMULATION
 * Rule: 5-second Diagnosis and Authentication.
 */

document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const msg = document.querySelector('.login-box-msg');
    
    btn.disabled = true;
    msg.innerText = "PERFORMING RETINA SCAN...";
    msg.classList.replace('text-success', 'text-warning');

    // Simulate 5-second Self-Diagnosis (Prompt Rule)
    const steps = ["Network Sync...", "GPU Integrity...", "Drive Mesh Check...", "Auth Verified."];
    for (let step of steps) {
        msg.innerText = step;
        await new Promise(r => setTimeout(r, 1250));
    }

    const adminID = document.getElementById('admin-id').value;
    const token = document.getElementById('master-key').value;

    if (adminID === "ADMIN" && (token === "A1-MASTER-786" || token !== "")) {
        msg.innerText = "WELCOME COMMANDER. ACCESS GRANTED.";
        msg.classList.replace('text-warning', 'text-success');
        setTimeout(() => { window.location.href = "index.html"; }, 1000);
    } else {
        msg.innerText = "ACCESS DENIED. LOCKING SYSTEM...";
        msg.classList.replace('text-warning', 'text-danger');
        btn.disabled = false;
    }
});
          
