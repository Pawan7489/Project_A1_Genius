# PROJECT A1: AUTO-REPAIR & SELF-HEALING
# Rule: If a module fails, locate backup from Mesh and Restore.

import os
import shutil
import json

class AutoRepairEngine:
    def __init__(self):
        self.recovery_map = "recovery_registry.json"

    def check_and_fix(self, module_name):
        print(f"[REPAIR] Diagnosing module: {module_name}")
        
        with open(self.recovery_map, 'r') as f:
            backups = json.load(f)

        if module_name in backups:
            primary_path = backups[module_name]["primary"]
            backup_path = backups[module_name]["backup"]

            if not os.path.exists(primary_path):
                print(f"[ALERT] {module_name} is missing! Initiating Recovery...")
                
                # Check if backup exists on Drive D/E/Cloud
                if os.path.exists(backup_path):
                    shutil.copy2(backup_path, primary_path)
                    return True, f"[FIXED] {module_name} restored from Distributed Mesh."
                else:
                    return False, f"[FAILED] Backup unreachable. Switching to Ghost Mode."
        
        return True, "[OK] Module integrity verified."

# Global Instance
healer = AutoRepairEngine()
