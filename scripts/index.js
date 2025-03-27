document.addEventListener('DOMContentLoaded', () => {
  const profileEditBtn = document.querySelector('.profile__edit-btn');
  const editProfileModal = document.getElementById('editProfileModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const nameInput = document.getElementById('name');
  const descriptionInput = document.getElementById('description');
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const cardsList = document.querySelector('.cards__list');
  const cardTemplate = document.getElementById('card-template').content;

  const initialCards = [
    { title: 'Val Thorens', image: './images/1-photo-by-moritz-feldmann-from-pexels.jpg' },
    { title: 'Restaurant terrace', image: './images/2-photo-by-ceiline-from-pexels.jpg' },
    { title: 'An outdoor cafe', image: './images/3-photo-by-tubanur-dogan-from-pexels.jpg' },
    { title: 'A very long bridge, over the forest', image: './images/4-photo-by-maurice-laschet-from-pexels.jpg' },
    { title: 'Tunnel with morning light', image: './images/5-photo-by-van-anh-nguyen-from-pexels.jpg' },
    { title: 'Mountain house', image: './images/6-photo-by-moritz-feldmann-from-pexels.jpg' },
  ];

  function renderCards(cards) {
    cards.forEach(({ title, image }) => {
      const cardElement = cardTemplate.cloneNode(true);
      const cardImage = cardElement.querySelector('.card__image');
      const cardTitle = cardElement.querySelector('.card__title');
      cardImage.src = image;
      cardImage.alt = title;
      cardTitle.textContent = title;
      cardsList.appendChild(cardElement);
    });
  }

  profileEditBtn.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    editProfileModal.style.display = 'block'; // Ensure modal is displayed
  });

  closeModalBtn.addEventListener('click', () => {
    editProfileModal.style.display = 'none'; // Ensure modal is hidden
  });

  renderCards(initialCards);
});