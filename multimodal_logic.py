# PROJECT A1: MULTIMODAL DATA LINKING
# Rule: Link different data types automatically (e.g., Image triggers Text + Voice).

class MultimodalBridge:
    def __init__(self):
        self.active_senses = ["VISION", "TEXT", "VOICE"]

    def process_input(self, input_type, data):
        print(f"[MULTIMODAL] Input detected: {input_type}")
        
        if input_type == "IMAGE":
            # Rule: If AI sees an image, explain it and narrate it.
            explanation = self._trigger_text_module(data)
            self._trigger_voice_module(explanation)
            return explanation
            
        elif input_type == "VOICE":
            return self._trigger_text_module(data)

    def _trigger_text_module(self, data):
        print("[TEXT_ENGINE] Analyzing and generating explanation...")
        return "Explanation: This is a high-performance AI circuit diagram."

    def _trigger_voice_module(self, text):
        print(f"[VOICE_ENGINE] Narrating: {text}")
        # Linking to Part 5 Ghost Module
        return True

# Global Instance
multi_sense = MultimodalBridge()
