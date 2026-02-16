# PROJECT A1: VISUAL LOGIC WEAVER
# Rule: Connect Hosting, Domain, and AI nodes visually via drag-and-drop logic.

class LogicWeaver:
    def __init__(self):
        self.active_links = []

    def validate_connection(self, source_node, target_node):
        """Rule: Nest logic inside a Validation Layer for security."""
        print(f"[WEAVER] Verifying link: {source_node['type']} ---> {target_node['type']}")
        
        # Logic: Hosting should only point to a Domain or AI Engine
        if source_node['type'] == "HOSTING" and target_node['type'] in ["DOMAIN", "AI_ENGINE"]:
            link_id = f"LINK_{len(self.active_links) + 1}"
            self.active_links.append({"id": link_id, "from": source_node['id'], "to": target_node['id']})
            return True, link_id
        
        return False, "INVALID_CONNECTION_PATH"

# Global Instance
weaver = LogicWeaver()
