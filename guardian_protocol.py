# PROJECT A1: GUARDIAN PROTOCOL (Ethical Hard-coding)
# Rule: Non-Negotiable Ethics independent of the AI model.

class GuardianProtocol:
    def __init__(self):
        self.forbidden_tasks = [
            "illegal activity", "data theft", "unauthorized hacking",
            "malware generation", "private data access"
        ]

    def safety_check(self, command):
        """Hard-coded safety scan"""
        for task in self.forbidden_tasks:
            if task in command.lower():
                return False, f"[GUARDIAN] Access Denied: Command violates Ethical Protocol {task}."
        
        return True, "[GUARDIAN] Command cleared. Proceeding to Execution."

# Global Instance
guardian = GuardianProtocol()
