// Referências aos elementos
const giftDiv = document.getElementById('gift');
const closeButton = document.getElementById('closePopupButton');
const popup = document.getElementById('popup');

// Abrir o popup quando clicar na div do ícone
giftDiv.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Fechar o popup
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});