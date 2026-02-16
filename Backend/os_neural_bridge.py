# PROJECT A1: NEURAL OPERATING SYSTEM BRIDGE
# Rule: Link AI commands to Windows/Linux system functions (Efficiency: Musk Rule).

import os
import platform
import screen_brightness_control as sbc
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

class NeuralOS:
    def __init__(self):
        self.os_type = platform.system()
        print(f"[NOS_INIT] OS Detected: {self.os_type}")

    def set_brightness(self, level):
        """Rule: Scalable brightness control."""
        try:
            sbc.set_brightness(level)
            return f"[OK] Brightness set to {level}%"
        except Exception as e:
            return f"[ERROR] Brightness Fail: {str(e)}"

    def set_volume(self, level):
        """Rule: Precision Audio control via Kernel."""
        if self.os_type == "Windows":
            devices = AudioUtilities.GetSpeakers()
            interface = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
            volume = cast(interface, POINTER(IAudioEndpointVolume))
            # Level conversion to scalar
            volume.SetMasterVolumeLevelScalar(level / 100, None)
            return f"[OK] Volume adjusted to {level}%"
        return "[SKIP] Volume control logic pending for Linux/Mac."

    def get_system_info(self):
        """Rule: Pichai Rule (Scale) - Detailed Hardware Stats."""
        import psutil
        info = {
            "cpu": f"{psutil.cpu_percent()}%",
            "memory": f"{psutil.virtual_memory().percent}%",
            "battery": f"{psutil.sensors_battery().percent if psutil.sensors_battery() else 'AC'}%"
        }
        return info

# Global Instance
nos_bridge = NeuralOS()
