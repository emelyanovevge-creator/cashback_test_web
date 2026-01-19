// scripts.js
document.getElementById('searchInput').addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  
  // Фильтруем магазины и категории по введенному значению
  const categoryCards = document.querySelectorAll('.category-card');
  const storeCards = document.querySelectorAll('.store-card');
  
  categoryCards.forEach(card => {
    if (card.textContent.toLowerCase().includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  storeCards.forEach(card => {
    if (card.textContent.toLowerCase().includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
