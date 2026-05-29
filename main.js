const discordBtn = document.querySelector(".discord");
const feedback = document.querySelector("#feedback");

discordBtn.addEventListener("click", async () => {

    await navigator.clipboard.writeText("DEIN_NAME");

    feedback.textContent = "Discord Name kopiert!";

    setTimeout(() => {
        feedback.textContent = "";
    }, 2000);

});