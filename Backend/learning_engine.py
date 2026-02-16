# PROJECT A1: RLHF LEARNING ENGINE
# Rule: Save feedback to Vector DB and avoid "Bad" logic paths.

import json

class RLHFEngine:
    def __init__(self):
        self.knowledge_base = "vector_memory.json"

    def update_logic_score(self, logic_id, feedback):
        """Feedback: 'up' (Good Job) or 'down' (Bad)"""
        try:
            with open(self.knowledge_base, 'r+') as f:
                memory = json.load(f)
                
                if logic_id in memory:
                    if feedback == 'up':
                        memory[logic_id]['weight'] += 0.1
                        print(f"[RLHF] Logic {logic_id} strengthened.")
                    else:
                        memory[logic_id]['weight'] -= 0.2
                        print(f"[RLHF] Logic {logic_id} penalized. Avoiding in future.")
                
                f.seek(0)
                json.dump(memory, f, indent=4)
        except FileNotFoundError:
            # Initialize Memory if missing
            with open(self.knowledge_base, 'w') as f:
                json.dump({logic_id: {"weight": 1.0}}, f)

# Global Instance
learning_engine = RLHFEngine()
              
