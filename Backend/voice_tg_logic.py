# PROJECT A1: NEURAL VOICE-TO-TELEGRAM LIAISON
# Rule: Trigger Telegram Cloud actions via Voice Intent.

from telegram_cloud_bridge import tg_bridge
from voice_engine import vocalizer

class VoiceTelegramLink:
    def __init__(self):
        self.trigger_keywords = ["bhejo", "upload", "report", "telegram"]

    def process_voice_to_tg(self, voice_text, file_to_send=None):
        """Rule: Identify if the voice command is for Telegram."""
        print(f"[NEURAL_LINK] Analyzing voice command for Telegram gateway...")
        
        # Intent check: "Yeh file telegram par bhejo"
        if any(word in voice_text.lower() for word in self.trigger_keywords):
            vocalizer.speak("Hukum Commander, Telegram Cloud par transfer shuru kar rahi hoon.")
            
            # Use Part 46 Bridge to upload
            result = tg_bridge.upload_to_cloud(file_to_send, "PRIVATE_CHANNEL_ID")
            return f"[LINK_SUCCESS] Packet sent to Telegram. ID: {result.get('telegram_msg_id')}"
        
        return "[LINK_SKIP] Voice command is local-only."

# Global Instance
voice_tg_connector = VoiceTelegramLink()
