/**
 * PROJECT A1: MESH STATUS MONITOR
 * Visualizes the Distributed Bridge connectivity.
 */

window.checkMeshNodes = function() {
    const nodes = [
        { name: "Drive D (Logic)", status: "ONLINE", color: "#00ff41" },
        { name: "Drive E (Storage)", status: "OFFLINE", color: "#ff0000" },
        { name: "Secure Cloud", status: "LINKED", color: "#007bff" }
    ];

    const terminal = document.querySelector('.terminal-output');
    if (terminal) {
        let meshDiv = document.createElement('div');
        meshDiv.innerHTML = "<hr><div class='text-info fw-bold'>[MESH_REPORT] Node Connectivity:</div>";
        
        nodes.forEach(node => {
            let n = document.createElement('div');
            n.innerHTML = `> ${node.name}: <span style='color:${node.color}'>${node.status}</span>`;
            meshDiv.appendChild(n);
        });
        
        terminal.appendChild(meshDiv);
        terminal.scrollTop = terminal.scrollHeight;
    }
};

// Auto-sync visual status on startup
