var buttonSayings = [
'On the Road Ahead is a...','Before You, You See...']

var clickCount = 0 ;

var races = [
'human','halfling','elf','dwarf','gnome','tiefling','half-orc','half-elf','goliath'
]

function newTraveler() {
	var travelerRace = races[Math.floor(Math.random() * races.length)];

	document.getElementById('travelerButton').innerHTML = buttonSayings[clickCount];
	clickCount++;
	if(clickCount >= buttonSayings.length){
		clickCount = 0;
	}
	document.getElementById('raceDisplay').innerHTML = travelerRace;
}