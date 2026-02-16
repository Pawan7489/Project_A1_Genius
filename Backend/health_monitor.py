# PROJECT A1: GLOBAL HEALTH MONITOR
# Rule: Real-time status tracking of all 30 system modules.

import os
import json
import time

class HealthMonitor:
    def __init__(self):
        self.modules = {
            "UI_LAYER": "index.html",
            "SECURITY": "onion_gate.py",
            "BRAIN": "interpreter.py",
            "MESH": "distributed_bridge.py",
            "VOICE": "voice_engine.py",
            "SANDBOX": "sandbox_isolator.py"
        }
        self.snapshot_file = "system_snapshot.json"

    def perform_full_scan(self):
        print("[OMNISTAT] Scanning System Pulse...")
        report = {"timestamp": time.time(), "modules": {}}
        
        for name, file in self.modules.items():
            status = "ONLINE" if os.path.exists(file) else "OFFLINE"
            report["modules"][name] = status
            
        # Overall Health Calculation
        online_count = list(report["modules"].values()).count("ONLINE")
        report["health_score"] = (online_count / len(self.modules)) * 100
        
        with open(self.snapshot_file, 'w') as f:
            json.dump(report, f, indent=4)
        
        return report

# Global Instance
pulse_scanner = HealthMonitor()
      
