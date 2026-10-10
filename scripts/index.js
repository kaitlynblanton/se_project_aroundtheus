// add cards to webpage
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardsContainer = document.querySelector("#card-gallery");
const cardTemplate = document.querySelector("#card-template").content;

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector("#card").cloneNode(true);

  let cardImage = cardElement.querySelector("#card-image");
  let cardTitle = cardElement.querySelector("#card-title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);

  cardsContainer.prepend(cardElement);
});

// close modals
const closeModalButton = document.querySelectorAll(".button_type_close-modal");

closeModalButton.forEach((button) => {
  button.addEventListener("click", function (evt) {
    evt.target.closest(".modal").classList.add("modal_closed");
    pageOverlay.classList.add("page__overlay_closed-modal");
  });
});

// edit profile modal
const editProfileModal = document.querySelector("#edit-profile-modal");
const pageOverlay = document.querySelector("#modal-background-overlay");
const editButton = document.querySelector("#profile-edit-button");

editButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_closed");
  pageOverlay.classList.remove("page__overlay_closed-modal");
});

const editProfileForm = document.querySelector("#edit-form");
const saveButton = document.querySelector("#save-button");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const nameInput = document.querySelector("#user-name");
const descriptionInput = document.querySelector("#user-description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  editProfileModal.classList.add("modal_closed");
  pageOverlay.classList.add("page__overlay_closed-modal");
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// add new destination modal
const addDestinationModal = document.querySelector("#add-destination-modal");
const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", function () {
  addDestinationModal.classList.remove("modal_closed");
  pageOverlay.classList.remove("page__overlay_closed-modal");
});

const addDestinationForm = document.querySelector("#add-destination-form");
const createButton = document.querySelector("#create-button");
const titleInput = document.querySelector("#destination-title");
const imageInput = document.querySelector("#destination-image");

function handleDestinationFormSubmit(evt) {
  evt.preventDefault();

  let newCard = {
    link: imageInput.value,
    name: titleInput.value,
  };

  const cardElement = getCardElement(newCard);
  cardsContainer.prepend(cardElement);

  addDestinationModal.classList.add("modal_closed");
  pageOverlay.classList.add("page__overlay_closed-modal");
}

addDestinationForm.addEventListener("submit", handleDestinationFormSubmit);
