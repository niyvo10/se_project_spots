const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {

  const profileEditBtn = document.querySelector(".profile__edit-btn");
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".modal__close-btn");
  const profileForm = document.querySelector(".modal__form");
  const nameInput = document.querySelector(".modal__input_type_name");
  const descriptionInput = document.querySelector(".modal__input_type_description");
  const profileName = document.querySelector(".profile__name");
  const profileDescription = document.querySelector(".profile__description");
  const cardsList = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template").content;

  function openModal() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  modal.classList.add("modal_opened");
   }

  function closeModal() {
    modal.classList.remove("modal_opened");
  }

   profileEditBtn.addEventListener("click", openModal);

   closeModalBtn.addEventListener("click", closeModal);
   window.addEventListener("click", (event) => {
     if (event.target === modal) {
       closeModal();
     }
   });

   function handleProfileFormSubmit(evt) {
     evt.preventDefault();
     profileName.textContent = nameInput.value;
     profileDescription.textContent = descriptionInput.value;
     closeModal();
   }

   profileForm.addEventListener("submit", handleProfileFormSubmit);

  function generateCard(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    return cardElement;
  }

  initialCards.forEach((cardData) => {
    const cardElement = generateCard(cardData);
    cardsList.appendChild(cardElement);
  });
});