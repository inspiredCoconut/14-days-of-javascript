document.addEventListener("DOMContentLoaded", () => {
	document.getElementById('converter-form').addEventListener('submit', function(event) {
		event.preventDefault();
	  
		const inputValue = parseFloat(document.getElementById('input-value').value);
		const unitType = document.getElementById('unit-type').value;
		let convertedValue = 0;
	  
		if (isNaN(inputValue)) {
		  alert('Please enter a valid number!');
		  return;
		}
	  
		// Conversion logic
		switch (unitType) {
		  case 'inches': // Inches to Meters
			convertedValue = inputValue * 0.0254;
			break;
		  case 'pounds': // Pounds to Kilograms
			convertedValue = inputValue * 0.453592;
			break;
		  case 'gallons': // Gallons to Liters
			convertedValue = inputValue * 3.78541;
			break;
		  default:
			alert('Invalid unit type selected!');
			return;
		}
	  
		// Display result
		document.getElementById('converted-value').textContent = convertedValue.toFixed(4);
	  });
});