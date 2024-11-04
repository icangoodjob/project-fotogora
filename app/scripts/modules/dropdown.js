function deactivateAllDropdowns() {
  const activeDropdowns = document.querySelectorAll(".custom-dropdown.active");
  [...activeDropdowns].forEach((elem) => {
    elem.classList.remove("active");
  });
}
function handleDropdownClicks(event) {
  const target = event.target;
  if (target.matches("[data-dropdown-button]")) {
    if (target.closest(".custom-dropdown").classList.contains("active")) {
      target.closest(".custom-dropdown").classList.remove("active");
    } else {
      deactivateAllDropdowns();
      target.closest(".custom-dropdown").classList.add("active");
    }
  } else {
    deactivateAllDropdowns();
  }
  if (target.closest(".select-list__item")) {
    console.log(target);
    const parent = target.closest(".custom-dropdown");
    const dropdownButton = parent.querySelector(".custom-dropdown__btn");
    const dropdownInput = parent.querySelector(".custom-dropdown__input");
    if (dropdownInput) {
      dropdownInput.value = target.dataset.value;
    }
    if (dropdownButton) {
      dropdownButton.textContent = target.dataset.value;
    }
  }
  if (target.closest(".custom-dropdown__btn-delete")) {
    const parent = target.closest(".custom-dropdown");
    const dropdownInput = parent.querySelector(".custom-dropdown__input");
    if (dropdownInput) {
      dropdownInput.value = "";
    }
    target.style.display = "none";
  }
}
document.addEventListener("click", handleDropdownClicks, false);

const dropdownInputs = document.querySelectorAll(".custom-dropdown__input");
if (dropdownInputs.length) {
  [...dropdownInputs].forEach((input) => {
    const parent = input.closest(".custom-dropdown");
    const buttonDelete = parent.querySelector(".custom-dropdown__btn-delete");
    input.addEventListener("input", (e) => {
      buttonDelete.style.display = input.value.length > 0 ? "block" : "none";
    });
  });
}
