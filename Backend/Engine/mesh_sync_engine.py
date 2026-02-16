# PROJECT A1: DISTRIBUTED MESH SYNC ENGINE
# Rule: Drive D, E, and Cloud act as one unified genius brain.

import os
import shutil

class MeshSyncEngine:
    def __init__(self):
        self.nodes = {
            "DRIVE_D": "D:/A1_Project_Data",
            "DRIVE_E": "E:/A1_Project_Backups",
            "CLOUD_STAGING": "./assets/cloud_cache"
        }

    def sync_critical_data(self, filename, source_node, target_node):
        source_path = os.path.join(self.nodes[source_node], filename)
        target_path = os.path.join(self.nodes[target_node], filename)

        if os.path.exists(source_path):
            print(f"[SYNC] Moving data packet from {source_node} to {target_node}...")
            shutil.copy2(source_path, target_path)
            return True
        else:
            print(f"[ERROR] Source node {source_node} is unreachable or file missing.")
            return False

    def check_unit_health(self):
        """Pichai Rule: Scalable health checks for all units."""
        report = {}
        for name, path in self.nodes.items():
            report[name] = "ONLINE" if os.path.exists(path) else "OFFLINE"
        return report

# Global Instance
sync_controller = MeshSyncEngine()
          
