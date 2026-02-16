# PROJECT A1: STRICT SANDBOX ENVIRONMENT
# Rule: Prevent AI from modifying system files accidentally.

import subprocess

class A1Sandbox:
    def execute_safely(self, code_snippet):
        print("[SANDBOX] Initializing isolated environment...")
        
        # In a real scenario, this would trigger a Docker container or Restricted VM.
        # Here we simulate the validation before execution.
        
        if "os.remove" in code_snippet or "shutil.rmtree" in code_snippet:
            return "[SANDBOX ERROR] Destructive command detected. Execution Blocked."
        
        return "[SANDBOX] Code verified. Executing in protected space..."

sandbox = A1Sandbox()
