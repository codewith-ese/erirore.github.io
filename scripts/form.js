
const selectField = document.getElementById('select-option');
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// loop through the array and create an option for each product
products.forEach((product) => {
  const optionElement = document.createElement('option');
  optionElement.value = product.id;
  optionElement.textContent = product.name;

  selectField.appendChild(optionElement);
});


// Getting  the form element
const form = document.getElementById('reviewForm');

// Adding an event listener to the form submission
form.addEventListener('submit', function() {
  // Get the current submission count from localStorage
  let submissionCount = localStorage.getItem('formSubmissions');

  // If the key doesn't exist, set it to 0
  if (submissionCount === null) {
    submissionCount = 0;
  }
  else{
    // Increment the submission count
    submissionCount++;
  }

  // Store the updated submission count in localStorage
  localStorage.setItem('formSubmissions', submissionCount);
});

// When the page loads, display the current submission count
window.onload = function() {
  let submissionCount = localStorage.getItem('formSubmissions');

  // If the key doesn't exist, set it to 0
  if (submissionCount === null) {
    submissionCount = 0;
  }

  // Display the submission count
  document.getElementById('submissionCount').textContent = `You have submitted this form ${submissionCount} times.`;
};
