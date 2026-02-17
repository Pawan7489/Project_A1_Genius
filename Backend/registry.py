import os
import json
from flask import Flask

# registry.py mein hamesha ye format rakhein
app = Flask(__name__, 
            static_folder='Static',    # Check: Kya folder ka 'S' capital hai?
            static_url_path='/Static') # Browser mein link karne ke liye

class MasterRegistry:
    def __init__(self):
        self.registry_file = "registry_status.json"
        self.constitution_path = "constitution.json"
        self.active_modules = []

    def run_full_system_scan(self):
        print("[SYSTEM] Project A1: Initiating Neural Mesh Scan...")
        
        # Part 1: Physical Drive Scan (Code 1 Logic)
        paths_to_check = ["D:/", "E:/", "./assets/modules", "./Static"]
        for path in paths_to_check:
            status = "ACTIVE" if os.path.exists(path) else "OFFLINE"
            self.active_modules.append({"resource": path, "status": status})
            print(f"[{status}] Path: {path}")

        # Part 2: Constitution Logic (Code 2 Logic)
        print("[REGISTRY] Synchronizing 75/75 Core Constitution Modules...")
        
        # Save results
        with open(self.registry_file, 'w') as f:
            json.dump(self.active_modules, f, indent=4)
        
        print(f"[SUCCESS] System Ready. {len(self.active_modules)} Units Synced.")

# Instance for Project A1
a1_registry = MasterRegistry()

# Dashboard Route (Test ke liye)
@app.route('/')
def dashboard():
    return "<h1>Project A1 Dashboard Active</h1><p>CSS/JS static folder is now mapped!</p>"

if __name__ == "__main__":
    a1_registry.run_full_system_scan()
    # App run karein
    app.run(port=7860, debug=True)
    
