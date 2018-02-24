var buttonSayings = [
'On the Road Ahead is ...','Before You, You See ...','Seated nearby, is ...']

var clickCount = 0 ;

var ages = [
' nearly adult',' young',' young adult','n adult',' weathered',' young-looking',' mature',' middle-aged','n older','n elderly'
]

var manWomanOther = [
'man','woman','person','person'
]

var genders = [
'male','female','androgynous','nonbinary'
]

var hairColors = [
'light','dark','bright','shiny','black','red','brown','blond','grey','white','blue','purple','green','pink','turquoise','amber','chestnut','light brown','dark brown'
]

var hairStyles = [
'close-cut','long, wavy','shoulder length','short, messy','ponytail','slicked-back','mohawk','curly','clean, short','long, straight','braided','drawn-up','long and loose','tight bun','top-knot','short, spiky','long, tangled',
]

var clothesQualities = [
'shabby','common','fine','dirty','clean','presentable','old','new'
]

var clothesPalettes = [
'red','orange','yellow','green','blue','purple','black','white','brown','tan','mauve'
]

var heSheThey = [
'He','She','They','They'
]

var heshethey = [
'he','she','they','they'
]

var hisHerTheir = [
'His','Her','Their','Their'
]

var hishertheir = [
'his','her','their','their'
]

var himherthem = [
'him','her','them','them'
]

var isOrAre = [
' is',' is',' are',' are'
]

var physiques = [
'n overweight',' skinny','n underweight','n obese',' stocky',' muscular',' scrawny','n average','n athletic',' fit',' curvy',' blocky',' svelte',' willowy',' meaty',' chubby',' chunky','n in-shape',' big-boned',' tall',' short'
]

var races = [
'human','halfling','elf','dwarf','gnome','tiefling','half-orc','half-elf','member of a non-SRD race'
]

function newTraveler() {
	var travelerAge = ages[Math.floor(Math.random() * ages.length)];
	var travelerGenderNumber = Math.floor(Math.random() * genders.length);
	var travelerManWomanOther = manWomanOther[travelerGenderNumber];
	var travelerGender = genders[travelerGenderNumber];
	var travelerHST = heSheThey[travelerGenderNumber];
	var travelerhst = heshethey[travelerGenderNumber];
	var travelerHHT = hisHerTheir[travelerGenderNumber];
	var travelerhht = hishertheir[travelerGenderNumber];
	var travelerselfs = himherthem[travelerGenderNumber];
	var travelerIsOrAre = isOrAre[travelerGenderNumber];
	var travelerHairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
	var travelerHairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
	var travelerClothesQuality = clothesQualities[Math.floor(Math.random() * clothesQualities.length)];
	var travelerClothesPalette = clothesPalettes[Math.floor(Math.random() * clothesPalettes.length)];
	var travelerPhysique = physiques[Math.floor(Math.random() * physiques.length)];
	var travelerRace = races[Math.floor(Math.random() * races.length)];

	document.getElementById('travelerButton').innerHTML = buttonSayings[clickCount];
	clickCount++;
	if(clickCount >= buttonSayings.length){
		clickCount = 0;
	}
	
	document.getElementById('travelerLooks').innerHTML = 'A' + travelerPhysique + ' ' + travelerGender + ' ' + travelerRace + '. ' + travelerHST + travelerIsOrAre + ' a' + travelerAge + ' ' + travelerManWomanOther + ' with ' + travelerhht + ' ' + travelerHairColor + ' hair worn in a ' + travelerHairStyle + ' style. ' + travelerHST + travelerIsOrAre + ' wearing ' + travelerClothesQuality + ' clothes that are ' + travelerClothesPalette + ' in color.';
}