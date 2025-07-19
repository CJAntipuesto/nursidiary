function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
function searchAccordionTerms() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const accordions = document.querySelectorAll(".accordion");
  const noResultsMessage = document.getElementById("noResultsMessage");
  let matchesFound = 0;

  accordions.forEach((accordion) => {
    const button = accordion.querySelector(".accordion-button");
    const title = button.textContent.toLowerCase();

    if (title.includes(input)) {
      accordion.style.display = "block";
      matchesFound++;
    } else {
      accordion.style.display = "none";
    }
  });

  // Show or hide "No results" message
  if (matchesFound === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}

function calculateDose() {
  const dosePerKg = parseFloat(document.getElementById('dosePerKg').value);
  const weight = parseFloat(document.getElementById('weight').value);
  if (!isNaN(dosePerKg) && !isNaN(weight)) {
    const total = dosePerKg * weight;
    document.getElementById('calcResult').textContent = `Total Dose: ${total} mg`;
  } else {
    document.getElementById('calcResult').textContent = 'Please enter valid numbers';
  }
}

function toggleDefinition(id) {
  const def = document.getElementById(id);
  if (def.style.display === 'none') {
    def.style.display = 'block';
  } else {
    def.style.display = 'none';
  }
} 

