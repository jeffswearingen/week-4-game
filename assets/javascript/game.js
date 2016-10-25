function gameStart() {
	
	// define character data
	obiwan = {
		name: "Obi-Wan",
		health: 100,
		attack: 8,
		img: "assets/images/obi-wan.jpg"
	};

	luke = {
		name: "Luke", 
		health: 120,
		attack: 10,
		img: "assets/images/luke.jpg"
	};

	windu = {
		name: "Mace Windu",
		health: 140,
		attack: 15,
		img: "assets/images/mace-windu.jpg"
	};

	vader = {
		name: "Darth Vader",
		health: 180,
		attack: 20,
		img: "assets/images/vader.jpg"
	};

	palpatine = {
		name: "Palpatine",
		health: 240,
		attack: 40,
		img: "assets/images/Palpatine.jpg"
	};

	var characterDisplay = $("<div>");
	characterDisplay.data('health', obiwan.health);
	characterDisplay.attr('name', obiwan.name);
	$('.characters').append();

	var name = $("<p>");
	name.text(obiwan.name);
	$(characterDisplay).append(name);
};


$(document).ready(function() {
	gameStart();
});