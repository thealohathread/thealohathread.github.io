// Array of json objects
var statesRates = [{
	"State": "AZ",
	"Rate": 23.45
}, {
	"State": "CA",
	"Rate": 28.75
}, {
	"State": "CO",
	"Rate": 22.60
}, {
	"State": "CT",
	"Rate": 18.80
}, {
	"State": "DC",
	"Rate": 21.60
}, {
	"State": "DE",
	"Rate": 20.70
}, {
	"State": "FL",
	"Rate": 18.95
}, {
	"State": "GA",
	"Rate": 19.90
}, {
	"State": "ID",
	"Rate": 24.50
}, {
	"State": "IL",
	"Rate": 26.70
}, {
	"State": "IN",
	"Rate": 24.30
}, {
	"State": "KS",
	"Rate": 20.35
}, {
	"State": "LA",
	"Rate": 19.40
}, {
	"State": "MA",
	"Rate": 22.30
}, {
	"State": "MD",
	"Rate": 20.80
}, {
	"State": "ME",
	"Rate": 25.90
}, {
	"State": "MI",
	"Rate": 24.30
}, {
	"State": "MN",
	"Rate": 22.50
}, {
	"State": "MD",
	"Rate": 22.60
}, {
	"State": "MT",
	"Rate": 21.90
}, {
	"State": "NC",
	"Rate": 20.30
}, {
	"State": "NE",
	"Rate": 19.60
}, {
	"State": "NH",
	"Rate": 21.70
}, {
	"State": "NJ",
	"Rate": 23.60
}, {
	"State": "NV",
	"Rate": 21.50
}, {
	"State": "NY",
	"Rate": 24.35
}, {
	"State": "OH",
	"Rate": 19.20
}, {
	"State": "OR",
	"Rate": 20.40
}, {
	"State": "PA",
	"Rate": 21.00
}, {
	"State": "RI",
	"Rate": 19.60
}, {
	"State": "SC",
	"Rate": 20.70
}, {
	"State": "SD",
	"Rate": 22.60
}, {
	"State": "TN",
	"Rate": 20.70
}, {
	"State": "UT",
	"Rate": 21.30
}, {
	"State": "VA",
	"Rate": 24.90
}, {
	"State": "VT",
	"Rate": 25.20
}, {
	"State": "WA",
	"Rate": 23.60
}, {
	"State": "WI",
	"Rate": 21.65
}, {
	"State": "WV",
	"Rate": 21.60
}, {
	"State": "WY",
	"Rate": 24.75
}]

// Create the Dropdown with State Names / Values

function createList() {

	// Loop through each object in json array
	for (var i = 0; i < statesRates.length; i++) {

		// Define variables for key / value pairing
		var stateName = statesRates[i].State;
		var stateRate = statesRates[i].Rate;

		// Create <option> element with dropdown 
		$("#state").append('<option value="' + stateRate + '">' + stateName + '</option>');

	}
}



// Calculate Cost function

function calculateCost() {

	// Get Values of Inputs
	var squareFeet = $("#square-feet").val();
	var state = $("#state").val();
	var totalCost = state;

	if (squareFeet > 375) {
		$("#shipping-estimate").html("Sorry, we only allow online order estimates for one pallet product (375sq ft). Please contact us for more information.");
	} else {
		$("#shipping-estimate").html("The shipping estimate to this state is $" + totalCost);
	}
}

// Calculate Cost when button is clicked
createList();

$("#calculate").click(function() {
	calculateCost;
});