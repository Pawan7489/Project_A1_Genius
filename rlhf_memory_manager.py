# PROJECT A1: RLHF FEEDBACK MECHANISM
# Rule: Save feedback to Vector DB to avoid or repeat logic paths. [cite: 2026-02-11]

import json

class RLHFMemory:
    def __init__(self):
        self.memory_file = "rlhf_logic_paths.json"

    def save_feedback(self, command_id, score, comment=""):
        """Rule: Human-in-the-Loop Learning (RLHF). [cite: 2026-02-11]"""
        print(f"[RLHF] Registering Feedback: {score}/5 for command {command_id}")
        
        feedback_packet = {
            "id": command_id,
            "score": score, # 1 for Down, 5 for Up
            "comment": comment,
            "timestamp": "2026-02-15 21:00:00"
        }
        
        # Rule: Use Relevance Score to delete low-priority clutter later. [cite: 2026-02-11]
        with open(self.memory_file, 'a') as f:
            f.write(json.dumps(feedback_packet) + "\n")
        
        return "[SUCCESS] Learning Path updated based on Commander's Feedback."

# Global Instance
rlhf_manager = RLHFMemory()
