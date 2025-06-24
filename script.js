function showDetail(category) {
  const title = category;
  const imgUrl = {
    "Meat": "https://via.placeholder.com/200?text=Meats",
    "Vegetables & Fruits": "https://via.placeholder.com/200?text=Veg+Fruits",
    "Milk Products": "https://via.placeholder.com/200?text=Milk",
    "Groceries": "https://via.placeholder.com/200?text=Groceries"
  }[category];

  document.getElementById('detail-title').textContent = title;
  document.getElementById('detail-img').src = imgUrl;
  document.getElementById('detail-title-copy').textContent = title;
  document.getElementById('detail-card').style.display = 'block';
}
function showDetail(title, imgUrl) {
  document.getElementById('detail-title').textContent = title;
  document.getElementById('detail-img').src = imgUrl;
  document.getElementById('detail-title-copy').textContent = title;
  document.getElementById('detail-card').style.display = 'block';
}

function addToCart() {
  alert("🛒 Added to cart!");
  document.getElementById('detail-card').style.display = 'none';
}

// No need to change the window.onclick function
window.onclick = e => {
  const box = document.getElementById('detail-card');
  if (e.target === box) box.style.display = 'none';
};
