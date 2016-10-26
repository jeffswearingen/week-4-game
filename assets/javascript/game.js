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

	// Obi-wan
	var obiwanBlock = $('<div>');
	$(obiwanBlock).attr('name', obiwan.name);
	$(obiwanBlock).data('hp', obiwan.health);
	$(obiwanBlock).addClass('characterToSelect');
	$(obiwanBlock).text(obiwan.name);
	$('.characters').append($(obiwanBlock));
	var obiwanImage = $('<img>');
	$(obiwanImage).attr('src', obiwan.img);
	$(obiwanBlock).append($(obiwanImage));
	var obiwanHp = $('<p>');
	$(obiwanHp).text(obiwan.health);
	$(obiwanBlock).append($(obiwanHp));

	// Luke
	var lukeBlock = $('<div>');
	$(lukeBlock).attr('name', luke.name);
	$(lukeBlock).data('hp', luke.health);
	$(lukeBlock).addClass('characterToSelect');
	$(lukeBlock).text(luke.name);
	$('.characters').append($(lukeBlock));
	var lukeImage = $('<img>');
	$(lukeImage).attr('src', luke.img);
	$(lukeBlock).append($(lukeImage));
	var lukeHp = $('<p>');
	$(lukeHp).text(luke.health);
	$(lukeBlock).append($(lukeHp));

	// Mace Windu
	var winduBlock = $('<div>');
	$(winduBlock).attr('name', windu.name);
	$(winduBlock).data('hp', windu.health);
	$(winduBlock).addClass('characterToSelect');
	$(winduBlock).text(windu.name);
	$('.characters').append($(winduBlock));
	var winduImage = $('<img>');
	$(winduImage).attr('src', windu.img);
	$(winduBlock).append($(winduImage));
	var winduHp = $('<p>');
	$(winduHp).text(windu.health);
	$(winduBlock).append($(winduHp));

	// Darth Vader
	var vaderBlock = $('<div>');
	$(vaderBlock).attr('name', vader.name);
	$(vaderBlock).data('hp', vader.health);
	$(vaderBlock).addClass('characterToSelect');
	$(vaderBlock).text(vader.name);
	$('.characters').append($(vaderBlock));
	var vaderImage = $('<img>');
	$(vaderImage).attr('src', vader.img);
	$(vaderBlock).append($(vaderImage));
	var vaderHp = $('<p>');
	$(vaderHp).text(vader.health);
	$(vaderBlock).append($(vaderHp));

	// Emperor Palpatine
	var palpatineBlock = $('<div>');
	$(palpatineBlock).attr('name', palpatine.name);
	$(palpatineBlock).data('hp', palpatine.health);
	$(palpatineBlock).addClass('characterToSelect');
	$(palpatineBlock).text(palpatine.name);
	$('.characters').append($(palpatineBlock));
	var palpatineImage = $('<img>');
	$(palpatineImage).attr('src', palpatine.img);
	$(palpatineBlock).append($(palpatineImage));
	var palpatineHp = $('<p>');
	$(palpatineHp).text(palpatine.health);
	$(palpatineBlock).append($(palpatineHp));

	$('.characterToSelect').on('click', function() {
		$(this).removeClass('.characterToSelect');
		$(this).addClass('.hero');
		$('.hero').append(this);
	});
};


$(document).ready(function() {
	gameStart();
});