// A1 Super Genius - Core Interface Logic
document.addEventListener('DOMContentLoaded', function() {
    console.log("A1 Intelligence System: Menu Logic Activated.");

    // Sabhi buttons aur menu links ko select karein
    const menuLinks = document.querySelectorAll('.nav-link, .menu-item, button');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            let text = this.innerText.toLowerCase().trim();
            console.log("Detecting Click on:", text);

            // Website Security aur baaki modules ke liye logic
            if (text.includes("security") || text.includes("website security")) {
                e.preventDefault();
                openSecurityModule();
            }
            // Is tarah baaki menus ke liye bhi logic add karein
        });
    });
});

function openSecurityModule() {
    // Yahan wo URL ya Div load hoga jo Website Security ke liye hai
    alert("Website Security Module Loading...");
    // window.location.href = "/security-panel"; // Agar alag page hai toh
}
