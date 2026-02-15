# PROJECT A1: MASTER SETUP & INSTALLER
# Rule: One-click deployment for the entire Super Genius Framework.

import os
import json

def run_setup():
    print("🚀 INITIALIZING PROJECT A1 DEPLOYMENT...")
    
    # 1. Directory Verification (Pichai Rule: Scalability)
    required_folders = ['assets/css', 'assets/js', 'assets/modules', 'src/components']
    for folder in required_folders:
        os.makedirs(folder, exist_ok=True)
        print(f"[VERIFIED] Structure: {folder} is ready.")

    # 2. Constitution Protection (Rule 1)
    if os.path.exists("constitution.json"):
        os.chmod("constitution.json", 0o444) # Read-only for Everyone
        print("[LOCKED] Core Constitution is now Read-Only.")

    # 3. Registry Initialization (Master Blueprint)
    from registry import MasterRegistry
    reg = MasterRegistry()
    reg.scan_resources()

    print("\n✅ DEPLOYMENT SUCCESSFUL.")
    print("Type 'python master_boot.py' to launch the Command Center.")

if __name__ == "__main__":
    run_setup()
  
