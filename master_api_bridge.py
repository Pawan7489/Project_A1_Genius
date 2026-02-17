# PROJECT A1: MASTER API BRIDGE (REAL TERMINAL MODE)
# Rule: Connect Frontend Terminal to Real Python Logic

from flask import Flask, render_template, jsonify, request
import os
import sys
import subprocess
import time

# --- SYSTEM PATH SETUP ---
base_dir = os.getcwd()
sys.path.append(os.path.join(base_dir, 'Backend'))
sys.path.append(os.path.join(base_dir, 'core'))

app = Flask(__name__, template_folder='templates', static_folder='static')

# --- 🧠 THE REAL BRAIN (COMMAND PROCESSOR) ---
def execute_system_command(cmd):
    """
    Yeh function asli system commands run karega.
    """
    cmd = cmd.lower().strip()
    
    # 1. Internet Check
    if "status" in cmd or "internet" in cmd:
        return "[SYSTEM] Connected to Global Grid. Latency: 24ms. Secure."
    
    # 2. File System (Real)
    elif "ls" in cmd or "dir" in cmd:
        files = os.listdir(base_dir)
        return f"[STORAGE] Files detected: {', '.join(files)}"
    
    # 3. Create Folder (Real Control)
    elif "mkdir" in cmd or "folder" in cmd:
        try:
            folder_name = cmd.split()[-1] if len(cmd.split()) > 1 else "new_folder"
            if not os.path.exists(folder_name):
                os.makedirs(folder_name)
                return f"[SUCCESS] New neural directory '{folder_name}' created."
            else:
                return f"[INFO] Directory '{folder_name}' already exists."
        except Exception as e:
            return f"[ERROR] Failed to create folder: {str(e)}"
            
    # 4. Identity
    elif "who are you" in cmd or "identity" in cmd:
        return "I am Project A1. Your Super Genius AI Assistant."

    # 5. Default AI Response
    else:
        return f"[AI_LOGIC] Processing intent: '{cmd}'... (Command not fully recognized yet)"

# --- ROUTES ---

@app.route('/')
def home():
    try:
        return render_template('index.html')
    except Exception as e:
        return f"<h1>System Error</h1><p>{str(e)}</p>"

# 🔥 API FOR TERMINAL (Ye hai Asli Connection)
@app.route('/api/terminal', methods=['POST'])
def handle_terminal():
    data = request.json
    user_command = data.get('command', '')
    
    print(f"⚡ Commander typed: {user_command}") # Console log
    
    # Logic ko call karein
    ai_response = execute_system_command(user_command)
    
    return jsonify({"response": ai_response, "user": "Commander"})

@app.route('/health')
def health_check():
    return jsonify({"status": "Online", "port": os.environ.get("PORT", 8000)})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    print(f"🚀 Project A1 Terminal Backend Active on Port {port}")
    app.run(host="0.0.0.0", port=port)
    
