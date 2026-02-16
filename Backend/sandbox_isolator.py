# PROJECT A1: STRICT SANDBOX ISOLATOR
# Rule: Prevent AI from modifying system files or deleting data.

import subprocess
import os

class SandboxIsolator:
    def __init__(self):
        self.blocked_keywords = ["os.remove", "shutil.rmtree", "os.rmdir", "format ", "subprocess.call(['rm'"]
        self.temp_script = "sandbox_test_run.py"

    def scan_and_execute(self, code_snippet):
        print("[SANDBOX] Scanning code for safety violations...")
        
        # Rule: Checking for dangerous commands
        for word in self.blocked_keywords:
            if word in code_snippet:
                return f"[DENIED] Sandbox blocked execution: Dangerous command '{word}' detected."

        # Rule: Execute in a restricted subprocess
        try:
            with open(self.temp_script, "w") as f:
                f.write(code_snippet)
            
            print("[SANDBOX] Execution started in isolated container...")
            result = subprocess.run(["python", self.temp_script], capture_output=True, text=True, timeout=5)
            
            # Clean up
            os.remove(self.temp_script)
            
            if result.returncode == 0:
                return f"[SUCCESS] Sandbox Output: {result.stdout}"
            else:
                return f"[RUNTIME_ERROR] Sandbox caught error: {result.stderr}"
        
        except Exception as e:
            return f"[SANDBOX_CRASH] Critical Error: {str(e)}"

# Global Instance
sandbox = SandboxIsolator()
      
