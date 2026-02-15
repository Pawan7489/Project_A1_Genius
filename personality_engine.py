# PROJECT A1: NEURAL PERSONALITY ENGINE
# Rule: Adaptive Wit based on User Intent and Speed.

import random
import json

class PersonalityEngine:
    def __init__(self):
        self.moods = ["PROFESSIONAL", "WITTY", "URGENT", "EMPATHETIC"]
        self.current_mood = "PROFESSIONAL"

    def set_tone(self, user_input):
        """Analyze input length and keywords to set AI mood."""
        if len(user_input.split()) < 3:
            self.current_mood = "URGENT" # Chote commands matlab jaldi hai
        elif "please" in user_input.lower() or "shukriya" in user_input.lower():
            self.current_mood = "EMPATHETIC"
        elif "mazak" in user_input.lower() or "joke" in user_input.lower():
            self.current_mood = "WITTY"
        else:
            self.current_mood = "PROFESSIONAL"
        
        return self.current_mood

    def generate_response(self, text, mood):
        responses = {
            "URGENT": f"Done. {text}",
            "WITTY": f"Hukum mere aaka! {text}. Aur kuch, ya itna kafi hai?",
            "EMPATHETIC": f"Bilkul Commander, {text}. Aapki madad karke khushi hui.",
            "PROFESSIONAL": f"[A1_SYSTEM_LOG]: {text}. Systems 100% operational."
        }
        return responses.get(mood, text)

# Global Instance
personality = PersonalityEngine()
