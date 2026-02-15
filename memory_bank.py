# PROJECT A1: MEMORY RELEVANCE MANAGER
# Rule: Musk Rule - Maximize output with minimum lag.

class MemoryBank:
    def __init__(self):
        self.data_store = [] # Mock Vector DB

    def add_memory(self, content, importance_score):
        # relevance_score (1-10)
        memory = {"content": content, "score": importance_score, "last_access": "now"}
        self.data_store.append(memory)
        self.optimize()

    def optimize(self):
        """ Musks's First Principle: Remove non-essential data """
        threshold = 3
        # Agar score threshold se kam hai toh archive kar do
        self.data_store = [m for m in self.data_store if m['score'] >= threshold]
        print(f"[MEMORY] Optimization Complete. Low-relevance data archived.")

memory_bank = MemoryBank()
