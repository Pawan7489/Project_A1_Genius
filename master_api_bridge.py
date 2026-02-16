# PROJECT A1: MASTER API BRIDGE (UNIVERSAL CONNECTOR)
# Rule: Automatically detect Backend, Core, and Modules folders.

from flask import Flask, render_template
import os
import sys

# 1. Get current path
base_dir = os.getcwd()

# 2. Add new folders to System Path (Taaki imports fail na hon)
sys.path.append(os.path.join(base_dir, 'Backend'))
sys.path.append(os.path.join(base_dir, 'Backend', 'Cloud'))
sys.path.append(os.path.join(base_dir, 'Backend', 'Engine'))
sys.path.append(os.path.join(base_dir, 'Backend', 'Logic'))
sys.path.append(os.path.join(base_dir, 'core'))
sys.path.append(os.path.join(base_dir, 'modules'))

app = Flask(__name__, template_folder='templates', static_folder='assets')

@app.route('/')
def home():
    # Rule: index.html ab 'templates' folder se load hoga
    return render_template('index.html')

if __name__ == "__main__":
    # Render Port Logic
    port = int(os.environ.get("PORT", 8000))
    print(f"🚀 Project A1 System Online on Port {port}")
    app.run(host="0.0.0.0", port=port)
    
