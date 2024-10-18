// // Smooth scrolling for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Funktion zum Öffnen des modalen Bildes
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.textContent = captionText;
}

// Funktion zum Schließen des modalen Bildes
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// EventListener hinzufügen
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this.src, this.nextElementSibling.textContent);
    });
});

document.getElementById("modalClose").addEventListener('click', closeModal);

