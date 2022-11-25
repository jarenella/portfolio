//function for closing modal by hiding it
function closeModal() {
    modalBackground.classList.add("hidden");
    modal.classList.add("hidden");
}
//function for opening a modal by un-hiding it
function openModal() {
    modalBackground.classList.remove("hidden");
    modal.classList.remove("hidden");
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


//when any card is clicked, its modal is opened
const allButtons = document.getElementById("other-cards");
allButtons.addEventListener("click", (element) => {
    const targetElement = element.target;

    //if any part of the card is clicked, whether the card or any of its children elements,
    //the card's id is saved
    let cardClicked;
    if (targetElement.getAttribute('id') == "card1" || targetElement.getAttribute('id') == "card2" || targetElement.getAttribute('id') == "card3" || targetElement.getAttribute('id') == "card4") {
        cardClicked = targetElement.getAttribute('id');
    }
    else if (targetElement.parentElement.getAttribute('id') == "card1" || targetElement.parentElement.getAttribute('id') == "card2" || targetElement.parentElement.getAttribute('id') == "card3" || targetElement.parentElement.getAttribute('id') == "card4") {
        cardClicked = targetElement.parentElement.getAttribute('id')
    }
    else if (targetElement.parentElement.parentElement.getAttribute('id') == "card1" || targetElement.parentElement.parentElement.getAttribute('id') == "card2" || targetElement.parentElement.parentElement.getAttribute('id') == "card3" || targetElement.parentElement.parentElement.getAttribute('id') == "card4") {
        cardClicked = targetElement.parentElement.parentElement.getAttribute('id');
    }

    const modalTitle = document.querySelector(".modal-title");
    const modalDesc = document.querySelector(".modal-desc");
    const modalImage = document.querySelector(".modal-img");

    if (cardClicked) {
        if (cardClicked == "card1") {
            modalTitle.innerHTML = "GitHelpNOW"
            modalDesc.innerHTML = "A joint effort project made with the under-utilization of NPO APIs in mind. We successfully designed a frontend application for  users to find local shelters, and more, based on their location, while also providing various non-profits' info for others to donate to. Here you can find the repo or the deployed application."
            modalImage.src = "https://raw.githubusercontent.com/Renatatims/GitHelpNOW/main/assets/logo/GitHelpNOW!LOGO.ico"
        }
        else if (cardClicked == "card2") {
            modalTitle.innerHTML = "AccountabiliBuddies"
            modalDesc.innerHTML = "An in-progress fullstack jointly developed application. Developed with Restful API structure in mind, this project allows users to keep track of their goals while also providing them a safe, public space to hold themselves accountable alongside others. Here you can find the repo or the deployed application."
            modalImage.src = "https://github.com/mrcorbo/AccountabiliBuddies/blob/main/public/html/images/ACB-logo.png?raw=true"
        }
        else if (cardClicked == "card3") {
            modalTitle.innerHTML = "Weather Tracker"
            modalDesc.innerHTML = "A frontend application to add and save cities to your list which you'd like to be able to see the most recent weather updates from, all styled conveniently alongside one another. Here you can find the repo or the deployed application."
        }
        openModal();
    }
})