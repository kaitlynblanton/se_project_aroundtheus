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

const editProfileModal = document.querySelector("#edit-profile-modal");
const pageOverlay = document.querySelector("#modal-background-overlay");
const editButton = document.querySelector("#profile-edit-button");
const closeModalButton = document.querySelector("#close-modal-button");

editButton.addEventListener("click", function () {
  editProfileModal.classList.remove("edit-modal_closed");
  pageOverlay.classList.remove("page__overlay_closed-modal");
});

closeModalButton.addEventListener("click", function () {
  editProfileModal.classList.add("edit-modal_closed");
  pageOverlay.classList.add("page__overlay_closed-modal");
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

  editProfileModal.classList.add("edit-modal_closed");
  pageOverlay.classList.add("page__overlay_closed-modal");
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);
