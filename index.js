// Handle form submission
document.getElementById('numberFormRange').addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault(); // prevent form submission

  // Get the values from the form
  var minRange = Number(document.getElementById('minRange').value);
  var maxRange = Number(document.getElementById('maxRange').value);
  var numGenerate = Number(document.getElementById('numGenerate').value);
  var uniqueCheckbox = document.getElementById('uniqueCheckbox').checked;

  // Validate the values

  if (minRange > maxRange) {
    alert('Min value cannot be greater than Max value');
    return;
  }

  if (numGenerate <= 0) {
    alert('Number of random values to generate must be positive');
    return;
  }

  var possibleValues = maxRange - minRange + 1;

  if (uniqueCheckbox && numGenerate > possibleValues) {
    alert(`The range between ${minRange} and ${maxRange} only has ${possibleValues} unique values. Please widen the range or reduce the number of values to generate.`);
    return;
  }

  // Generate the random numbers and display them
  var randomNumber = 0;

  if(uniqueCheckbox){
    var numbers = new Set();
    while (numbers.size < numGenerate) {
      randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      numbers.add(randomNumber);
    }
    document.getElementById('randomNumbers').textContent = Array.from(numbers).join('  ');
  }
  else{
    random_numbers = ""
    for (var i = 0; i < numGenerate; i++) {
      randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      random_numbers += randomNumber + '  ';
    }
    document.getElementById('randomNumbers').textContent = random_numbers;
  }

});