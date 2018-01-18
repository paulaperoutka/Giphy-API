// Giphy API key: K4gu9r6F7ZOiSnh6j5lkfVKiip1BV9zF
// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

// Create array of strings

var characters = ["Leslie Knope", "Jessica Fletcher", "Matilda Wormwood", "Margo, The Magicians", "Mary Poppins", "Professor McGonagall", "Elle Woods", "Miranda Priestley", "Poirot"];

console.log(characters);


function displayGifs () {

	var characterName = $(this).attr("data-name");

	var characterNameSearchable = characterName.split(' ').join('+');

	console.log(characterName);


	var APIKey = "K4gu9r6F7ZOiSnh6j5lkfVKiip1BV9zF";

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + characterNameSearchable + "&api_key=" + APIKey + "&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
		.done(function(response){
			console.log(queryURL);
			console.log(response);
			// console.log(JSON.stringify(response));

			var characterResults = response.data;

			for (var i = 0; i < characterResults.length; i++) {
				var characterDiv = $("<div>");

				var pGifInfo = $("<p>");

				pGifInfo.text("Gif Rating: " + characterResults[i].rating);

				var characterGif = $("<img>");

				characterGif.attr("src", characterResults[i].images.fixed_height.url);

				characterDiv.append(pGifInfo);

				characterDiv.append(characterGif);

				$("#gif-display").prepend(characterDiv);
			}

		});

}

// function printResults () {


// }

function renderCharacterButtons () {
	$("#button-display").empty();

	for(var i = 0; i < characters.length; i++) {
		var btn = $("<button>");
		btn.addClass("character");
		btn.attr("data-name", characters[i]);
		btn.text(characters[i]);
		$("#button-display").append(btn);
	}
}

	$("#add-character").on("click", function(){

	event.preventDefault();

	if ($("#character-input").val() === "") {
		alert("Please enter a name.");
	}

	else {
		var newCharacter = $("#character-input").val().trim();

		characters.push(newCharacter);

		console.log(characters);

		renderCharacterButtons();
	}

});


$(document).on("click", ".character", displayGifs);

renderCharacterButtons ();





