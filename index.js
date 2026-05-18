const btnSubmit = document.querySelector(".submit-btn");
const rating = document.querySelector(".rating");
const ratingInput = document.querySelectorAll(".rating-input");
const ratingLabels = document.querySelectorAll(".rating-label");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRatingText = document.querySelector(".selected-rating");
const thankYouHeading = document.getElementById("thank-you-heading");
const ratingError = document.getElementById("rating-error");

let selectedRating = null;
ratingInput.forEach((input) => {
  input.addEventListener("change", function (event) {
    ratingLabels.forEach((label) => label.classList.remove("selected"));

    const selectedLabel = event.target.nextElementSibling;
    ratingError.classList.add("hidden");
    selectedLabel.classList.add("selected");
  });
});

btnSubmit.addEventListener("click", function () {
  const selectedRadio = rating.querySelector('input[name="rating"]:checked');
  if (!selectedRadio) {
    ratingError.classList.remove("hidden");
    return;
  }
  selectedRating = selectedRadio.value;
  selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;

  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  thankYouHeading.focus();
});
