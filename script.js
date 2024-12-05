// Tema Değiştirme Fonksiyonu
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    let buttonText = document.body.classList.contains('dark-mode') ? 'Açık Mod' : 'Karanlık Mod';
    this.textContent = buttonText;
});

// Modal Açma ve Kapatma Fonksiyonu
function openModal(blokId) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    
    const newContent = {
        blok1: {
            title: "Blok 1 Detayları",
            text: "Bu blok hakkında daha fazla bilgi: Bu, modern ve şık bir blok tasarım örneğidir."
        },
        blok2: {
            title: "Blok 2 Detayları",
            text: "Blok 2 hakkında detaylı bilgi: Bu blok, zarif bir renk paleti ile tasarlanmıştır."
        },
        blok3: {
            title: "Blok 3 Detayları",
            text: "Blok 3 hakkında bilgi: Bu blok, minimalist bir tasarıma sahip olup kullanıcı dostudur."
        }
    };

    title.textContent = newContent[blokId].title;
    text.textContent = newContent[blokId].text;

    modal.style.display = "block";
}

// Modal Kapatma
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Sayfa Yükleniyor Animasyonu
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 1000);
};
