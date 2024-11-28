// JavaScript for Image Popup
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const closePopup = document.querySelector(".close-popup");

  // Open popup when an image is clicked
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const bgImage = window.getComputedStyle(image).backgroundImage;
      const imageUrl = bgImage.slice(5, -2);
      popupImg.src = imageUrl;
      popup.classList.remove("hidden");
    });
  });

  // Close popup when the close button is clicked
  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Close popup when clicking outside the image
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const closePopup = document.querySelector(".close-popup");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  let currentImages = []; // Stores the images of the current section
  let currentIndex = 0; // Index of the currently displayed image

  // Open popup when an image is clicked
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      const sectionImages = image
        .closest(".content-wrapper")
        .querySelectorAll(".image");
      currentImages = Array.from(sectionImages); // Get all images in the section
      currentIndex = Array.from(currentImages).indexOf(image); // Set current index
      const bgImage = window.getComputedStyle(image).backgroundImage;
      const imageUrl = bgImage.slice(5, -2); // Extract the URL
      popupImg.src = imageUrl;
      popup.classList.remove("hidden");
    });
  });

  // Close popup when the close button is clicked
  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Close popup when clicking outside the image
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });

  // Navigate to the previous image
  arrowLeft.addEventListener("click", () => {
    if (currentImages.length > 0) {
      currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length; // Loop backward
      const bgImage = window.getComputedStyle(
        currentImages[currentIndex]
      ).backgroundImage;
      const imageUrl = bgImage.slice(5, -2);
      popupImg.src = imageUrl;
    }
  });

  // Navigate to the next image
  arrowRight.addEventListener("click", () => {
    if (currentImages.length > 0) {
      currentIndex = (currentIndex + 1) % currentImages.length; // Loop forward
      const bgImage = window.getComputedStyle(
        currentImages[currentIndex]
      ).backgroundImage;
      const imageUrl = bgImage.slice(5, -2);
      popupImg.src = imageUrl;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mobileNav = document.getElementById("mobile-nav");

  // Toggle menu visibility on click
  hamburgerMenu.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "block" ? "none" : "block";
  });

  // Close menu when a link is clicked
  mobileNav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      mobileNav.style.display = "none";
    }
  });
});
