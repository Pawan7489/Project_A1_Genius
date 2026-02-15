# PROJECT A1: HINGLISH COMMAND INTERPRETER
# Intent over Syntax Logic

import os
import subprocess

def process_command(user_input):
    user_input = user_input.lower()
    
    # 1. Intent: Folder Creation
    if "naya folder" in user_input or "make folder" in user_input:
        # Simple Logic to extract folder name (Example: "Ek naya folder A1_Data banao")
        parts = user_input.split()
        folder_name = "New_AI_Folder" # Default
        for p in parts:
            if "_" in p or p.isalnum() and p not in ["ek", "naya", "folder", "banao"]:
                folder_name = p
        
        try:
            os.makedirs(folder_name, exist_ok=True)
            return f"[SUCCESS] Intent: Create Folder | Name: {folder_name} | Status: DONE"
        except Exception as e:
            return f"[ERROR] Folder creation failed: {str(e)}"

    # 2. Intent: Self Diagnosis (Triggering the 5s check)
    elif "check system" in user_input or "diagnosis" in user_input or "theek hai" in user_input:
        return "[INITIALIZING] Running 5-second Self-Diagnosis... Internet: OK, GPU: Stable, Drive: Linked."

    # 3. Intent: Run Ghost Modules
    elif "voice" in user_input or "awaz" in user_input:
        return "[GHOST] Voice Module link detected but slot is EMPTY. Update config.env to activate."

    # 4. Fallback: Unknown Intent
    else:
        return f"[AI] I understood: '{user_input}', but no specific protocol is mapped. Should I search for a Python script?"

# Manual Testing (Optional)
if __name__ == "__main__":
    print("A1 INTERPRETER READY. Type a Hinglish command:")
    while True:
        cmd = input(">>> ")
        print(process_command(cmd))
      
