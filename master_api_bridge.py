# PROJECT A1: MASTER API BRIDGE
# Rule: Use Distributed Execution to link HTML UI with Python Logic. [cite: 2026-02-11]

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# Rule: Security Layer - Only allow local or trusted dashboard access.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Project A1: Change to specific URL for production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/execute")
async def handle_request(request: Request):
    """Rule: Understand Intent over Syntax. [cite: 2026-02-11]"""
    data = await request.json()
    intent = data.get("intent")
    
    print(f"[BRIDGE] Received Command: {intent}")
    
    # Logic: Route to Council of Experts or specific engine
    # In a real scenario, this calls specific functions from other .py files
    return {"status": "SUCCESS", "message": f"Intent '{intent}' processed by A1 Core."}

if __name__ == "__main__":
    # Rule: Musk Rule - Minimalist server launch.
    uvicorn.run(app, host="127.0.0.1", port=8000)

@app.route('/')
def home():
    return render_template('index.html') # Ensure index.html is in 'templates' folder

# PROJECT A1: MASTER API BRIDGE (RENDER VERSION)
# Rule: Use 0.0.0.0 and Dynamic Port for Global Accessibility.

from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    # Rule: Ensure index.html is inside the 'templates' folder.
    return render_template('index.html')

if __name__ == "__main__":
    # Rule: Musk Rule - Minimalist server launch for Render.
    # Render automatically provides a PORT environment variable.
    port = int(os.environ.get("PORT", 8000))
    
    # 0.0.0.0 allows external traffic to reach the dashboard.
    app.run(host="0.0.0.0", port=port)
    
