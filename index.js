const btnSubmit = document.querySelector(".submit-btn");
const rating = document.querySelector(".rating");
const ratingInput = document.querySelectorAll(".rating-input");
const ratingLabels = document.querySelectorAll(".rating-label");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRatingText = document.querySelector(".selected-rating");
const thankYouHeading = document.getElementById("thank-you-heading");

let selectedRating = null;
// for (let i = 0; i < ratingInput.length; i++)
ratingInput.forEach((input) => {
  input.addEventListener("change", function () {
    const selectedRadio = rating.querySelector('input[name="rating"]:checked');
    const selectedLabel = document.querySelector(
      `label[for="${selectedRadio.id}"]`,
    );
    ratingLabels.forEach((label) => label.classList.remove("selected"));
    selectedLabel.classList.add("selected");
  });
});

btnSubmit.addEventListener("click", function () {
  if (!rating.querySelector('input[name="rating"]:checked')) {
    alert("Please select a rating before submitting.");
    return;
  } else {
    const selectedRadio = rating.querySelector('input[name="rating"]:checked');
    const selectedLabel = document.querySelector(
      `label[for="${selectedRadio.id}"]`,
    );
    selectedRating = selectedRadio.value;
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  }
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  thankYouHeading.focus();
});
