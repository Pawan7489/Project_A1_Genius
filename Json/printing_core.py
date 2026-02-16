# PROJECT A1: ADVANCED PRINTING ENGINE
# Rule: Control front-end orders from the back-end Admin Panel.

import json
import os

class PrintingEngine:
    def __init__(self):
        self.order_log = "order_manifest.json"
        self.raw_cost_factor = 0.45 # 45% of price is material cost

    def process_new_order(self, order_id, client_name, print_type, quantity):
        """Rule: AI calculates pricing and profit in real-time."""
        print(f"[PRINT_ENGINE] New order received: {order_id} for {client_name}")
        
        # Simulated Pricing Logic
        base_price = 150 # Base price in currency
        total_value = base_price * quantity
        estimated_profit = total_value * (1 - self.raw_cost_factor)

        order_packet = {
            "order_id": order_id,
            "client": client_name,
            "type": print_type,
            "value": total_value,
            "profit": estimated_profit,
            "status": "PROCESSING"
        }

        self._save_order(order_packet)
        return f"[SUCCESS] Order {order_id} queued for printing. Profit Margin: {estimated_profit}"

    def _save_order(self, data):
        with open(self.order_log, "a") as f:
            json.dump(data, f)
            f.write("\n")

# Global Instance
print_master = PrintingEngine()
