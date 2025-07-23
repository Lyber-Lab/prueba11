// Lógica de paginación para la galería NFT
document.addEventListener('DOMContentLoaded', function() {
  const nftGrid = document.getElementById('nftGrid');
  const nftCards = Array.from(nftGrid.getElementsByClassName('nft-card'));
  const prevButton = document.getElementById('prevPage');
  const nextButton = document.getElementById('nextPage');
  const pageNumbersContainer = document.getElementById('pageNumbers');
  
  const cardsPerPage = 6;
  let currentPage = 1;
  const totalPages = Math.ceil(nftCards.length / cardsPerPage);

  function displayCards(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    nftCards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function updatePaginationControls() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    pageNumbersContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const pageNumberElement = document.createElement('span');
      pageNumberElement.classList.add('page-number');
      pageNumberElement.textContent = i;
      if (i === currentPage) {
        pageNumberElement.classList.add('active');
      }
      pageNumberElement.addEventListener('click', () => {
        currentPage = i;
        displayCards(currentPage);
        updatePaginationControls();
      });
      pageNumbersContainer.appendChild(pageNumberElement);
    }
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayCards(currentPage);
      updatePaginationControls();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayCards(currentPage);
      updatePaginationControls();
    }
  });

  // Inicializar la paginación al cargar la página
  displayCards(currentPage);
  updatePaginationControls();
});
