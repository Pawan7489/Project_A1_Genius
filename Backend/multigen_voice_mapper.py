# PROJECT A1: MULTIGENERATIONAL VOICE ARCHITECT
# Rule: Different voices/logic for Kids, College, Adults, and Seniors.

class VoicePersonaArchitect:
    def __init__(self):
        self.personas = {
            "KID": {"pitch": 1.5, "speed": 1.2, "style": "Simple/Fun", "vocab": "Basic"},
            "COLLEGE": {"pitch": 1.0, "speed": 1.1, "style": "Trendy/Fast", "vocab": "Technical/Slang"},
            "ADULT": {"pitch": 0.9, "speed": 1.0, "style": "Professional", "vocab": "Standard"},
            "SENIOR": {"pitch": 0.8, "speed": 0.8, "style": "Respectful/Slow", "vocab": "Formal"}
        }

    def adapt_voice(self, age_input, gender="MALE"):
        """Rule: Switch logic and voice based on Age/Gender identity."""
        if age_input < 13: persona = "KID"
        elif 13 <= age_input <= 25: persona = "COLLEGE"
        elif 25 < age_input < 60: persona = "ADULT"
        else: persona = "SENIOR"

        config = self.personas[persona]
        print(f"[PERSONA_ACTIVATE] Switching to {persona} ({gender}) profile.")
        return config

# Global Instance
persona_engine = VoicePersonaArchitect()
