const btnSubmit = document.querySelector(".submit-btn");
const rating = document.querySelector(".rating");
const ratingInput = document.querySelectorAll(".rating-input");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRatingText = document.querySelector(".selected-rating");
const thankYouHeading = document.getElementById("thank-you-heading");
const ratingError = document.getElementById("rating-error");

let selectedRating = null;
rating.addEventListener("change", function (event) {
  const selectedInput = event.target;

  if (!selectedInput.classList.contains("rating-input")) {
    return;
  }

  const previousSelected = rating.querySelector(".selected");

  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }
  selectedRating = selectedInput.value;
  selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  ratingError.classList.add("hidden");

  const selectedLabel = selectedInput.nextElementSibling;

  if (selectedLabel) {
    selectedLabel.classList.add("selected");
  }
});

btnSubmit.addEventListener("click", function () {
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  thankYouHeading.focus();
});
