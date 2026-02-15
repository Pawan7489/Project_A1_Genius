# PROJECT A1: ONION ARCHITECTURE (Security Layer)
# Rule: Core Logic is protected by 3 outer layers.

class A1Onion:
    def __init__(self):
        self.status = "SECURED"

    def _core_logic(self, command):
        """INNER BALL: Actual Execution"""
        return f"[CORE] Executing Action: {command}"

    def _validation_layer(self, command):
        """LAYER 2: Checking if command is valid/safe"""
        forbidden = ["delete system", "hack bank", "format"]
        if any(word in command.lower() for word in forbidden):
            return "[VALIDATION] Error: Forbidden action detected."
        return self._core_logic(command)

    def _security_layer(self, command):
        """LAYER 3: Encryption & Admin Check"""
        # Imagine AES-256 check here
        return self._validation_layer(command)

    def execute(self, command):
        """OUTER BALL: Interface Entry Point"""
        print(f"[ONION] Peeling layers for command: {command}")
        return self._security_layer(command)

# Global Instance
onion_engine = A1Onion()
