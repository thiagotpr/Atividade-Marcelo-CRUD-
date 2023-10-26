document.addEventListener("DOMContentLoaded", function () {
    const reviewInput = document.getElementById("review");
    const submitButton = document.getElementById("submit");
    const reviewsList = document.getElementById("reviews");
    const backButton = document.getElementById("back-button");

    submitButton.addEventListener("click", function () {
        const reviewText = reviewInput.value.trim();
        if (reviewText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = reviewText;
            reviewsList.appendChild(listItem);
            reviewInput.value = "";
        }
    });

    backButton.addEventListener("click", function () {
        // Redireciona para a página inicial (index.html)
        window.location.href = "index.html";
    });
});
