/**
 * PROJECT A1: CANVAS DRAG-DROP HUD
 * Manages the visual logic builder and node-to-node deployment.
 */

window.initiateCanvasLink = function(sourceId, targetId) {
    const terminal = document.querySelector('.terminal-output');
    console.log(`[UI_CANVAS] Establishing link between ${sourceId} and ${targetId}...`);

    // Rule: Visual feedback for the hacker command center
    let log = document.createElement('div');
    log.className = "text-yellow-400 x-small animate-pulse";
    log.innerHTML = `[NODE_WEAVER] Deployment in Progress: ${sourceId} ---> ${targetId} | STATUS: SYNCING...`;
    
    if (terminal) {
        terminal.appendChild(log);
    }
    
    // Rule: Zuckerberg Rule (Speed) - Swift data flow between nodes. [cite: 2026-02-11]
    alert(`Link Established: Node_${sourceId} is now governing Node_${targetId}.`);
};

window.onNodeDrop = function(nodeId, newPos) {
    console.log(`[CANVAS] Node ${nodeId} moved to X:${newPos.x}, Y:${newPos.y}`);
    // Update local state and registry [cite: 2026-02-11]
};
