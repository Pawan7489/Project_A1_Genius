import os
import json

class MasterRegistry:
    def __init__(self):
        self.registry_file = "registry_status.json"
        self.active_modules = []

    def scan_resources(self):
        print("[SYSTEM] Scanning Neural Mesh...")
        
        # Check for Distributed Drives
        paths_to_check = ["D:/", "E:/", "./assets/modules"]
        
        for path in paths_to_check:
            if os.path.exists(path):
                print(f"[FOUND] Drive/Path detected: {path}")
                self.active_modules.append({"resource": path, "status": "ACTIVE"})
            else:
                print(f"[MISSING] Resource offline: {path}")

        # Save to Registry File
        with open(self.registry_file, 'w') as f:
            json.dump(self.active_modules, f, indent=4)
        
        print(f"[SUCCESS] Registry updated with {len(self.active_modules)} active members.")

if __name__ == "__main__":
    registry = MasterRegistry()
    registry.scan_resources()
  
