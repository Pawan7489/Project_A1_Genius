# PROJECT A1: VOICE-TO-HARDWARE BRIDGE
# Rule: Link Hinglish Intent to Dashboard Hardware Controls.

class HardwareVoiceBridge:
    def __init__(self):
        self.commands = {
            "mic band karo": "MIC_OFF",
            "speaker on karo": "SPEAKER_ON",
            "system freeze": "KILL_SWITCH_ACTIVATE",
            "network check": "DIAGNOSIS_RUN"
        }

    def parse_voice_intent(self, user_voice_text):
        print(f"[VOICE_HUD] Analyzing Intent: {user_voice_text}")
        
        # Intent logic: Match keywords even if syntax varies
        for key, action in self.commands.items():
            if key in user_voice_text.lower():
                return f"[ACTION_TRIGGERED] Executing: {action}"
        
        return "[UNKNOWN_INTENT] I heard you, but that hardware command is not registered."

# Global Instance
voice_bridge = HardwareVoiceBridge()
