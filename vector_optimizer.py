# PROJECT A1: VECTOR DB OPTIMIZER
# Rule: Use Relevance Score to keep the AI's 'Mind' sharp and fast.

import json
import time

class VectorOptimizer:
    def __init__(self):
        self.db_file = "vector_memory.json"
        self.archive_file = "memory_archive.json"
        self.relevance_threshold = 4.0 # 1 to 10 scale

    def optimize_memory(self):
        print("[OPTIMIZER] Analyzing Local Vector DB for clutter...")
        
        try:
            with open(self.db_file, 'r') as f:
                memory = json.load(f)
            
            sharp_memory = {}
            archived_data = {}

            for key, data in memory.items():
                # Musk Rule: If not accessed in 30 days and score < threshold, archive it.
                days_since_access = (time.time() - data['last_accessed']) / 86400
                
                if data['weight'] < self.relevance_threshold or days_since_access > 30:
                    archived_data[key] = data
                    print(f"[ARCHIVE] Moving low-priority data: {key}")
                else:
                    sharp_memory[key] = data

            # Save Optimized Memory
            with open(self.db_file, 'w') as f:
                json.dump(sharp_memory, f, indent=4)
            
            # Save Archive
            with open(self.archive_file, 'a') as f:
                json.dump(archived_data, f, indent=4)

            print(f"[SUCCESS] Pruning complete. DB size reduced.")

        except FileNotFoundError:
            print("[ERROR] Vector DB not found. Skipping optimization.")

# Global Instance
optimizer = VectorOptimizer()
          
