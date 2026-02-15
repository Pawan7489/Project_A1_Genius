# PROJECT A1: CLOUD SHIM (Solo Mode Rule)
# Rule: If hardware is missing, skip and continue working with text/web only.

import os

class CloudAdaptor:
    def __init__(self):
        # Render set an environment variable 'RENDER' by default
        self.is_cloud = os.getenv('RENDER', 'false').lower() == 'true'

    def bypass_hardware_logic(self):
        """Rule: Activate Solo Mode if on Cloud."""
        if self.is_cloud:
            print("[CLOUD_SHIM] Render detected. Activating SOLO MODE...")
            # Disable hardware-specific modules
            return True
        return False

    def get_port(self):
        """Rule: Render needs to bind to a specific port."""
        return int(os.environ.get("PORT", 7860))

# Global Instance
cloud_shim = CloudAdaptor()
