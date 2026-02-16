# PROJECT A1: UNIVERSAL BRIDGE SCRIPT
# Rule: Enable Distributed Execution. Scatter files, Unified Brain.

import os
import json

class DistributedBridge:
    def __init__(self):
        self.mesh_map = "mesh_registry.json"
        self.drives = ["D:/A1_Brain", "E:/A1_Storage", "./assets/modules"]

    def sync_mesh(self):
        print("[BRIDGE] Synchronizing Distributed Mesh...")
        unified_index = {}

        for drive in self.drives:
            if os.path.exists(drive):
                print(f"[LINKED] Drive detected: {drive}")
                for root, dirs, files in os.walk(drive):
                    for file in files:
                        # Logic: Map file name to its physical location
                        unified_index[file] = os.path.join(root, file)
            else:
                print(f"[OFFLINE] Skipping missing node: {drive}")

        with open(self.mesh_map, 'w') as f:
            json.dump(unified_index, f, indent=4)
        
        return f"[SUCCESS] Mesh Synced: {len(unified_index)} nodes mapped."

    def locate_file(self, filename):
        """AI instantly finds where the file is stored, regardless of the drive."""
        with open(self.mesh_map, 'r') as f:
            index = json.load(f)
        return index.get(filename, "FILE_NOT_FOUND")

# Global Instance
bridge_engine = DistributedBridge()
