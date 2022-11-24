const modal = document.querySelector(".modal")
const modalBackground = document.querySelector(".modal-background");
const modalButton = document.querySelector(".modal-button");

//when the modal exit button is clicked, the modal is exited by being hidden
modalButton.addEventListener("click", () => {
    modalBackground.classList.add("hidden");
    modal.classList.add("hidden");
});

//when the main card is clicked, the user is sent to the link
const heroCard = document.querySelector(".hero-card");
heroCard.addEventListener("click", () => {
    window.location.href = 'https://www.linkedin.com/in/james-arenella-113bab172/';
})