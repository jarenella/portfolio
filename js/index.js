//function for closing modal by hiding it
function closeModal() {
    modalBackground.classList.add("hidden");
    modal.classList.add("hidden");
}

//when the modal exit button is clicked, the modal is exited by being hidden
const modal = document.querySelector(".modal")
const modalBackground = document.querySelector(".modal-background");
const modalButton = document.querySelector(".modal-button");
modalButton.addEventListener("click", () => {
    closeModal();
});
//when the modal background is clicked (someone clicks outside of the modal), the modal is also closed
modalBackground.addEventListener("click", () => {
    closeModal();
})

//when the main card is clicked, the user is sent to the link
const heroCard = document.querySelector(".hero-card");
heroCard.addEventListener("click", () => {
    window.location.href = 'https://www.linkedin.com/in/james-arenella-113bab172/';
})