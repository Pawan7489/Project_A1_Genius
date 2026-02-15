/**
 * PROJECT A1: ONION VISUALIZER
 * Animates the security peeling process in the terminal.
 */

window.peelLayers = async function(cmd) {
    const termOutput = document.querySelector('.terminal-output');
    const layers = [
        { name: "INTERFACE", icon: "🌐", msg: "Scanning input syntax..." },
        { name: "SECURITY", icon: "🛡️", msg: "Decrypting session tokens..." },
        { name: "VALIDATION", icon: "⚖️", msg: "Checking against Constitution..." },
        { name: "CORE", icon: "🧠", msg: "Accessing Inner Ball Logic..." }
    ];

    for (let layer of layers) {
        let div = document.createElement('div');
        div.style.paddingLeft = (layers.indexOf(layer) * 10) + "px";
        div.innerHTML = `<span class='text-warning'>${layer.icon} [PEELING ${layer.name}]</span>: ${layer.msg}`;
        termOutput.appendChild(div);
        termOutput.scrollTop = termOutput.scrollHeight;
        await new Promise(r => setTimeout(r, 800)); // Peeling speed
    }

    let final = document.createElement('div');
    final.className = "text-success fw-bold";
    final.innerHTML = `>>> Layer Penetration Successful. Command '${cmd}' Executed.`;
    termOutput.appendChild(final);
};
