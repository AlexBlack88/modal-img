const newModal = document.getElementById('newModal');

const img = document.getElementById('newImg');

const modalImg = document.getElementById('img1');

const captionText = document.getElementById('caption');

function closeModal() {
  newModal.style.display = 'none';
}

img.onclick = function() {
  newModal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

window.onclick = function (e) {
  if(e.target == newModal) {
    newModal.style.display = 'none';
  }
}