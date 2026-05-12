// Mobil cihazlar için açılır menü (Hamburger Menu) işlevselliği
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){
    hamburger.addEventListener("click", () => {
        // Menüyü aç/kapat
        navLinks.classList.toggle("active");
        
        // Çarpı animasyonu için class ekle/çıkar
        hamburger.classList.toggle("toggle");
    });
}

// Menüdeki bir linke tıklandığında menüyü otomatik kapat
const links = document.querySelectorAll(".nav-links > li > a");
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("toggle");
    });
});
// --- OTOMATİK SLIDER İŞLEVSİLLİĞİ ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Mevcut slayttan aktifliği kaldır
    slides[currentSlide].classList.remove('active');
    
    // Bir sonraki slayta geç, eğer son slaytsa başa dön
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Yeni slaytı aktif yap
    slides[currentSlide].classList.add('active');
}

// Slaytları 4000 milisaniyede (4 saniyede) bir otomatik değiştir
if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}