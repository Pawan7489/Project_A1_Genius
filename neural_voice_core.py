# PROJECT A1: NEURAL VOICE CORE
# Rule: Fill the Ghost Body - Replacing stubs with real vocal logic.

import pyttsx3
import json

class NeuralVoiceCore:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.config = "voice_manifest.json"

    def speak(self, text, persona="ADULT"):
        """Rule: Before AI speaks, run a quick hardware check."""
        print(f"[VOICE] Synthesizing speech for Persona: {persona}...")
        
        # Rule: Musk Rule (Efficiency) - Load settings only when needed.
        with open(self.config, 'r') as f:
            settings = json.load(f)
            voice_config = settings['personas'].get(persona, settings['personas']['ADULT'])

        self.engine.setProperty('rate', voice_config['speed'])
        self.engine.setProperty('pitch', voice_config['pitch'])
        
        # Rule: Solo Mode - If audio device fails, log it but don't crash.
        try:
            self.engine.say(text)
            self.engine.runAndWait()
        except Exception as e:
            print(f"[ERROR] Audio device unavailable, skipping... {e}")

# Global Instance
a1_voice = NeuralVoiceCore()
