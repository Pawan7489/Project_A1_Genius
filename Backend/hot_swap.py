# PROJECT A1: UNIVERSAL HOT-SWAP ENGINE
# Rule: Detect connection type and switch without crashing.

import json
import os

class HotSwapManager:
    def __init__(self):
        self.settings_file = "settings.json"

    def get_active_connection(self):
        with open(self.settings_file, 'r') as f:
            settings = json.load(f)
        
        active_key = settings['active_brain']
        config = settings['brains'][active_key]
        
        print(f"[HOT-SWAP] Current Strategy: {active_key} ({config['type']})")
        
        if config['type'] == "FILE_PATH":
            if os.path.exists(config['path']):
                return f"EXEC_LOCAL:{config['path']}"
        elif config['type'] == "API_KEY":
            return f"EXEC_CLOUD:{config['url']}"
        
        # Fallback Logic (Universal Bridge Rule)
        print("[ALERT] Primary Brain offline. Switching to Cloud Fallback...")
        return "FALLBACK_TO_HUGGINGFACE"

# Global Instance
hot_swapper = HotSwapManager()
