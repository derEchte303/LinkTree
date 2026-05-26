// script_servis.js

// Alle Links auswählen
const links = document.querySelectorAll("a");

// Kleine Klick-Animation
links.forEach(link => {
    link.addEventListener("click", () => {

        // Effektklasse hinzufügen
        link.classList.add("clicked");

        // Nach kurzer Zeit wieder entfernen
        setTimeout(() => {
            link.classList.remove("clicked");
        }, 200);

    });
});


// Begrüßung in der Konsole
console.log("Linktree geladen!");