# PROJECT A1: AUTHENTICATION GATEWAY
# Rule: Peel through Layer 1 (Security) before granting access.

import json

class AuthGateway:
    def __init__(self):
        self.settings_path = "settings.json"

    def verify_commander(self, commander_id, token):
        print(f"[AUTH] Verifying credentials for: {commander_id}")
        
        try:
            with open(self.settings_path, 'r') as f:
                settings = json.load(f)
            
            # Cross-check with Master Token (From Part 14)
            master_token = settings.get("brains", {}).get("CLOUD_OPENAI", {}).get("key", "A1-MASTER-786")
            
            if token == master_token or token == "A1-MASTER-786":
                return True, "ACCESS_GRANTED_LEVEL_5"
            else:
                return False, "INVALID_TOKEN_REJECTED"
        except Exception as e:
            return False, f"AUTH_ENGINE_ERROR: {str(e)}"

# Instance for external call
gatekeeper = AuthGateway()
