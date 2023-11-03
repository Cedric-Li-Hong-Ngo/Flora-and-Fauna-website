let text = document.getElementById('text');
let ground3 = document.getElementById('ground3');
let ground2 = document.getElementById('ground2');
let ground1 = document.getElementById('ground1');
let plantt = document.getElementById('plantt');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 +'px';
    plantt.style.top = value * 0.7 + 'px';
    ground1.style.top = value * 1.1 + 'px';
    ground2.style.top = value * 1.5 + 'px';
    ground3.style.top = value * 2.5 + 'px';
});

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const volumeIcon = document.getElementById("volume-icon");
  
    // Add a click event listener to the volume control
    volumeIcon.addEventListener("click", function() {
      if (audio.paused) {
        // If the audio is paused, play it and change the icon to "volume off"
        audio.play();
        volumeIcon.className = "fas fa-volume-off";
      } else {
        // If the audio is playing, pause it and change the icon to "volume up"
        audio.pause();
        volumeIcon.className = "fas fa-volume-up";
      }
    });
  });

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 6 seconds
}