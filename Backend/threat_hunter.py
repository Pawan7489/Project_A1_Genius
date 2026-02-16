# PROJECT A1: NEURAL THREAT HUNTER
# Rule: Onion Layer 4 - Block hacking attempts and unauthorized API calls.

import time
import json

class ThreatHunter:
    def __init__(self):
        self.log_file = "threat_logs.json"
        self.danger_zone = 0.85 # Threshold for P(Threat)

    def scan_request(self, origin, payload):
        """Rule: Analyze threat level using Neural Integrity Check."""
        print(f"[GUARD] Scanning packet from {origin}...")
        
        # Simulated Threat Calculation (LaTeX Formula implementation)
        threat_score = 0.12 # Mock safe score
        
        if "sql_inject" in payload or "exec(" in payload:
            threat_score = 0.95
            
        if threat_score > self.danger_zone:
            print(f"[CRITICAL] Threat Detected! Initiating Lockdown for {origin}.")
            self._log_threat(origin, "CODE_INJECTION_ATTEMPT")
            return False, "ACCESS_DENIED_BY_GUARDIAN"
        
        return True, "CLEAR"

    def _log_threat(self, origin, threat_type):
        entry = {"timestamp": time.time(), "origin": origin, "type": threat_type}
        with open(self.log_file, "a") as f:
            json.dump(entry, f)
            f.write("\n")

# Global Instance
guardian = ThreatHunter()
