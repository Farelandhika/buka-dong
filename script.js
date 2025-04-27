const btnNo = document.querySelector('.no');

function gerak() {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

function jawabYes() {
  document.getElementById('popup').style.display = 'block';
}

// Generate hearts
function buatLove() {
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    heartsContainer.appendChild(heart);
  }
}

buatLove();

    function jawabYes() {
  const nomor = '+6285755672948'; // ← Ganti dengan nomor kamu (awali pakai kode negara tanpa +)
  const pesan = encodeURIComponent('Haii beb, aku sayang kamu lohh 😘💕');
  window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank');
}