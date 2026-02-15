# PROJECT A1: UNIVERSAL PLUGIN MANAGER
# Rule: Use 'Skeleton Keys' to auto-connect future tools.

import os
import json

class PluginManager:
    def __init__(self):
        self.config_file = "plugins_config.json"
        self.plugin_dir = "./plugins"

    def scan_and_activate(self):
        print("[PLUGIN_HUB] Scanning for new Superpowers...")
        
        with open(self.config_file, 'r') as f:
            config = json.load(f)

        for plugin_name, details in config["slots"].items():
            if details["path"] != "" and os.path.exists(details["path"]):
                print(f"[ACTIVE] Plugin Linked: {plugin_name}")
                details["status"] = "CONNECTED"
            else:
                print(f"[SKELETON] Slot Empty: {plugin_name} (Waiting for link...)")
                details["status"] = "EMPTY"

        # Update Live Registry
        with open(self.config_file, 'w') as f:
            json.dump(config, f, indent=4)

# Global Instance
plugin_hub = PluginManager()
