//*-----------------------------------------> Photo Gallery Section

window.onload = function () {
  /// Get the select element
  const selectElement = document.getElementById("photoYearGallery");
  console.log(selectElement);

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Add options for all years since 2000 to the current year
  for (let year = 2000; year <= currentYear; year++) {
    // Create a new option element
    const optionElement = document.createElement("option");

    // Set the value and text of the option
    optionElement.value = year;
    optionElement.textContent = year;

    // Add the option to the select element
    selectElement.appendChild(optionElement);
  }

  // Set the default option to the current year
  selectElement.value = currentYear;

  nav.classList.remove("open");
};
