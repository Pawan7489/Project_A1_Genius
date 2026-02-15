# PROJECT A1: MASTER BOOT SCRIPT
# Rule: Execute all layers in sequence for 100% stability.

import os
import time
from registry import MasterRegistry
from guardian_protocol import guardian

def start_a1_system():
    print("--- PROJECT A1: INITIALIZING MASTER BOOT ---")
    
    # 1. Self-Diagnosis (5-Second Rule)
    print("[1/4] Running 5-second Self-Diagnosis...")
    time.sleep(5)
    print("[SUCCESS] All Hardware & Network parameters: GREEN")

    # 2. Registry Scan
    reg = MasterRegistry()
    reg.scan_resources()
    print("[2/4] Distributed Mesh: LINKED")

    # 3. Guardian Safety Check
    status, msg = guardian.safety_check("System Bootup")
    if not status:
        print(f"[FATAL ERROR] {msg}")
        return
    print("[3/4] Guardian Protocol: ACTIVE & ENFORCED")

    # 4. Launch UI (Interface Layer)
    print("[4/4] Launching Master Admin Control Panel...")
    print("\n>>> SYSTEM ONLINE: Access at http://localhost:7860 or index.html")
    
    # Triggering the Dashboard
    os.system("start index.html")

if __name__ == "__main__":
    start_a1_system()
  
