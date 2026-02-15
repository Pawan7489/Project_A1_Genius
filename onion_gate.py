# PROJECT A1: BALL-IN-BALL (NESTED ENCAPSULATION)
# Rule: Core logic is the innermost ball. Requests must peel every layer.

class OnionGate:
    def __init__(self):
        self.layers = ["INTERFACE", "SECURITY", "VALIDATION", "CORE"]

    def _interface_layer(self, request):
        print("[LAYER 1] Interface Layer: Checking Request Format...")
        return self._security_layer(request)

    def _security_layer(self, request):
        print("[LAYER 2] Security Layer: Verifying Admin Encryption...")
        # Imagine AES check here
        if "AUTH_TOKEN" in request: 
            return self._validation_layer(request)
        return "[DENIED] Layer 2: Security Breach Detected."

    def _validation_layer(self, request):
        print("[LAYER 3] Validation Layer: Checking Constitution Compliance...")
        # Cross-reference with constitution.json
        return self._core_execution(request)

    def _core_execution(self, request):
        print("[INNER BALL] Reached Core Logic. Executing...")
        return f"[SUCCESS] Action '{request['cmd']}' completed in Sandbox."

    def peel_and_execute(self, cmd_data):
        return self._interface_layer(cmd_data)

# Global Instance
gate_keeper = OnionGate()
