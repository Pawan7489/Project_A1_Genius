# PROJECT A1: SEMANTIC VERSIONING FOR LOGIC
# Rule: Store prompts and logic paths for successful tasks.

import json
import datetime

class LogicVersioner:
    def __init__(self):
        self.history_file = "mental_states.json"

    def save_mental_state(self, version, prompt, logic_path, result):
        state = {
            "timestamp": str(datetime.datetime.now()),
            "version": version,
            "prompt": prompt,
            "logic_path": logic_path,
            "status": "SUCCESS" if result else "FAILED"
        }
        
        try:
            with open(self.history_file, 'r+') as f:
                data = json.load(f)
                data.append(state)
                f.seek(0)
                json.dump(data, f, indent=4)
        except (FileNotFoundError, json.JSONDecodeError):
            with open(self.history_file, 'w') as f:
                json.dump([state], f, indent=4)
        
        print(f"[VERSIONING] Logic State {version} archived successfully.")

    def rollback(self, target_version):
        print(f"[TIME TRAVEL] Rolling back AI Thinking to State: {target_version}")
        # Logic to restore previous prompt templates
      
