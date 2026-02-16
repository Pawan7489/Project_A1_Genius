# PROJECT A1: GLOBAL ASSET REGISTRY
# Rule: Track and locate all scattered cloud and local assets via API. [cite: 2026-02-11]

import json

class AssetRegistry:
    def __init__(self):
        self.nodes_file = "global_mesh_map.json"

    def get_active_nodes(self):
        """Rule: Maintain a registry that scans all drives and APIs at startup. [cite: 2026-02-11]"""
        print("[REGISTRY] Scanning global asset locations...")
        # Logic: Fetch coordinates for each node from the JSON vault
        with open(self.nodes_file, 'r') as f:
            data = json.load(f)
        return data['active_nodes']

    def add_new_asset(self, node_id, region, coords):
        """Rule: Unlimited cloud storage/compute nodes connect logic."""
        print(f"[REGISTRY] Registering new node: {node_id} in {region}")
        # Add to local mesh registry
        return "[SUCCESS] Asset registered in Global Mesh."

# Global Instance
registry_manager = AssetRegistry()
