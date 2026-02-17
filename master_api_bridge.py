# PROJECT A1: MASTER API BRIDGE (UNIVERSAL CONNECTOR)
# Rule: Automatically detect Backend, Core, and Modules folders.

from flask import Flask, render_template, jsonify
import os
import sys

# --- SYSTEM PATH SETUP ---
# 1. Get current path
base_dir = os.getcwd()

# 2. Add new folders to System Path (Taaki imports fail na hon)
# Hum yeh ensure kar rahe hain ki Python in folders ko dhund sake
sys.path.append(os.path.join(base_dir, 'Backend'))
sys.path.append(os.path.join(base_dir, 'Backend', 'Cloud'))
sys.path.append(os.path.join(base_dir, 'Backend', 'Engine'))
sys.path.append(os.path.join(base_dir, 'Backend', 'Logic'))
sys.path.append(os.path.join(base_dir, 'core'))
sys.path.append(os.path.join(base_dir, 'modules'))

# --- APP INITIALIZATION ---
# Rule: Flask defaults to 'static' folder. 
# CRITICAL: Aapka folder naam 'static' hona chahiye, 'assets' nahi.
app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def home():
    # Rule: index.html ab 'templates' folder se load hoga
    try:
        return render_template('index.html')
    except Exception as e:
        return f"<h1>System Error: Template Not Found</h1><p>{str(e)}</p><p>Check if 'index.html' is inside 'templates' folder.</p>"

@app.route('/health')
def health_check():
    # Rule: Simple check to see if server is running
    return jsonify({"status": "Online", "system": "Project A1 Super Genius", "port": os.environ.get("PORT", 8000)})

if __name__ == "__main__":
    # Render Port Logic
    port = int(os.environ.get("PORT", 8000))
    print(f"🚀 Project A1 System Online on Port {port}")
    app.run(host="0.0.0.0", port=port)
    
