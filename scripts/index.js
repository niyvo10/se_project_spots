document.addEventListener("DOMContentLoaded", () => {
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

  const profileEditBtn = document.querySelector(".profile__edit-btn");
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".modal__close-button");
  const profileForm = document.querySelector(".modal__form");
  const nameInput = document.querySelector(".modal__input_type_name");
  const descriptionInput = document.querySelector(".modal__input_type_description");
  const profileName = document.querySelector(".profile__name");
  const profileDescription = document.querySelector(".profile__description");
  const previewModal = document.querySelector("#preview-modal");
  const previewImage = previewModal.querySelector(".modal__image");
  const previewCaption = previewModal.querySelector(".modal__caption");
  const newPostModal = document.querySelector("#new-post-modal");
  const cardContainer = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template").content;
  const newPostForm = document.querySelector("#new-post-form");
  const titleInput = newPostForm.querySelector("#post-title");
  const linkInput = newPostForm.querySelector("#post-link");
  const newPostButton = document.querySelector(".profile__add-btn");

  function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true).querySelector(".card");
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });

    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this card?")) {
        cardElement.remove();
      }
    });

    cardImage.addEventListener("click", () => {
      previewImage.src = data.link;
      previewImage.alt = data.name;
      previewCaption.textContent = data.name;
      openAnyModal(previewModal);
    });

    return cardElement;
  }

  initialCards.forEach((cardData) => {
    const card = getCardElement(cardData);
    cardContainer.prepend(card);
  });

  newPostForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newCardData = {
      name: titleInput.value,
      link: linkInput.value,
    };

    const newCard = getCardElement(newCardData);
    cardContainer.prepend(newCard);

    closeAnyModal(newPostModal);
    newPostForm.reset();
  });

  function openModal() {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    modal.classList.add("modal_opened");
  }

  function closeModal() {
    modal.classList.remove("modal_opened");
  }

  function openAnyModal(modal) {
    modal.classList.add("modal_opened");
  }

  function closeAnyModal(modal) {
    modal.classList.remove("modal_opened");
  }

  profileEditBtn.addEventListener("click", openModal);

  closeModalBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    const openModals = document.querySelectorAll(".modal.modal_opened");
    openModals.forEach((openModal) => {
      if (event.target === openModal) {
        closeAnyModal(openModal);
      }
    });
  });

  const closeButtons = document.querySelectorAll(".modal__close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeAnyModal(modal);
    });
  });

  newPostButton.addEventListener("click", () => {
    openAnyModal(newPostModal);
  });

  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeModal();
  }

  profileForm.addEventListener("submit", handleProfileFormSubmit);
});
