var popup = document.querySelector(".modal-form");
var openPopup = document.querySelector(".modal-form-title");
var shadowPopup = document.querySelector(".modal-form-wrapper");
      
popup.classList.add("modal-form-hidden");

shadowPopup.classList.add("modal-form-wrapper-hidden");

openPopup.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-form-visible");
  shadowPopup.classList.add("modal-form-wrapper-visible");
});