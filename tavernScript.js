var buttonSayings = ['Hit Another Bar','Check Out the Next Inn','Head to the Next Pub','Continue the Crawl','Time for Another Drink','One More!','And Another!','Maybe You\'ve Had Enough','I\'m Gonna Have to Cut You Off','Eh, One More Couldn\'t Hurt','You Feeling Okay?','Maybe Sleep It Off','Maybe Rent a Room','A New Day, a New Bar','Visit a Tavern']
var clickCount = 0;
var prefixes = [
'Abyssal','Acidic','Angry','Anxious','Arcane',
'Babbling','Bear and','Bell and','Bitter','Black','Blackened','Blade and','Blind','Block and','Bloodied','Bloodstained','Bloody','Bludgeoning','Blue','Blushing','Bony','Book and','Boot and','Brass','Brave','Broken','Bronze','Brown','Bubbly','Bull and','Burnt',
'Carnelian','Carved','Cat and','Celestial','Chalk','Chaotic','Charging','Charmed','Charming','Cloth','Concussive','Copper','Cowardly','Crimson','Crying','Crystal',
'Dancing','Dark','Deadly','Deaf','Demonic','Depressed','Devilish','Diamond','Dire','Dirty','Disfigured','Dog and','Draconic','Dragon\'s','Drunken','Dueling','Dull',
'Ecstatic','Electric','Electrum','Emerald','Energetic','Excited','Exhausted',
'Fevered','Fiendish','Fighting','Filthy','Fish and','Flaming','Flirty','Flying','Forceful','Forged','Forgotten','Fractured','Frightened','Frightening','Fuchsia',
'Gambling','Giant','Gilded','Glass','Gnarled','Goat and','Gold','Golden','Grappled','Green','Grey',
'Hammered','Happy','Hawk and','Hidden','Hollow','Holy','Hook and','Hoppy','Horrific','Horse and','Hungry',
'Icy','Impatient','Incapacitated','Indigo','Infernal','Invisible','Iron',
'Jade','Jagged','Joyful','Jumping',
'Keen','Knotted',
'Laughing','Lavender','Lawful','Lawless','Leaping','Little','Lonely','Lost','Loveless','Lovely','Lucky',
'Maimed','Marroon','Mauve','Meady','Metal','Miniature','Misshapen','Moldy','Monstrous','Moose and','Mossy','Mug and','Musty','Mutated',
'Necrotic','Nervous',
'Old','One-Eyed','Orange','Orderly','Overgrown','Overweight',
'Paralyzed','Petrified','Piercing','Pink','Pious','Platinum','Poisoned','Poisonous','Polished','Priceless','Prone','Psychic','Puce','Purple',
'Radiant','Raging','Rancid','Red','Rested','Restless','Restrained','Rogue','Rose and','Ruby','Rusty',
'Sad','Sapphire','Screaming','Sculpted','Shattered','Shining','Sickly','Silk','Silver','Skinny','Slashing','Sleeping','Smallest','Smiling','Soiled','Sour','Spotless','Spotted','Staff and','Steel','Stick and','Struggling','Stuffy','Stumbling','Stunned','Stunning','Sultry','Surly','Sweet',
'Tangled','Tangy','Teal','Thirsty','Tiny','Toasted','Tooth and','Toothless','Tranquil','Turquoise','Twisted',
'Unconscious','Unholy','Unlucky','Unsoiled',
'Vampiric','Velvet','Verdant','Violent','Violet',
'Wand and','White','Wicked','Winged','Wise','Wolf and','Wooden','Woodland','Wounded',
'Yawning','Yellow',
'Zombified'
]
var suffixes = [
'Abacus','Aboleth','Alligator','Angel','Ankheg','Anvil','Ape','Apple','Archon','Arrow','Artichoke','Axe',
'Baboon','Badger','Balor','Banshee','Barbarian','Bard','Barrel','Basilisk','Basket','Bat','Battleaxe','Beacon','Bear','Beech','Behir','Bell','Birch','Blade','Blanket','Blowgun','Boar','Boat','Bolt','Book','Boot','Bottle','Bow','Bucket','Bugbear','Bulette','Bull',
'Camel','Candle','Cardinal','Carrot','Cart','Cat','Centaur','Chain','Cherry','Chest','Chimera','Circle','Claw','Cleric','Cloak','Cloaker','Clover','Club','Coat','Cockatrice','Coin','Couatl','Cow','Crab','Crocodile','Crossbow','Crow','Crowbar','Crown','Crystal','Cube','Cup','Cyclops',
'Dagger','Dart','Deer','Demon','Devil','Dog','Donkey','Door','Doppelganger','Dove','Dragon','Drider','Drow','Druid','Drum','Dryad','Duergar','Dulcimer','Dwarf',
'Eagle','Edge','Elemental','Elephant','Elf','Elk','Ettercap','Ettin','Eye',
'Fiend','Fighter','Fish','Fist','Flail','Flask','Flower','Flute','Foot','Forest','Frog','Fungus',
'Gargoyle','Gauntlet','Genie','Ghost','Ghoul','Giant','Glaive','Glass','Glove','Gnoll','Gnome','Goat','Goblin','Golem','Goliath','Gorgon','Grape','Grick','Griffon','Grove',
'Hag','Halberd','Halfling','Hammer','Handaxe','Harpy','Hawk','Head','Heart','Hex','Hippogriff','Hoard','Hobgoblin','Homunculus','Horn','Horse','Hound','Hourglass','Human','Hydra','Hyena',
'Imp','Incubus','Island','Ivy',
'Jackal','Jackdaw','Jacket','Javelin','Jay','Jelly','Jug',
'King','Kobold','Kraken',
'Ladder','Lamia','Lamp','Lance','Lantern','Lemon','Lich','Line','Lion','Lizard','Lizardfolk','Lock','Lute','Lycanthrope','Lyre',
'Mace','Mage','Magmin','Magpie','Mammoth','Manticore','Map','Maple','Mare','Maul','Maw','Medusa','Melon','Mephit','Mermaid','Mimic','Minotaur','Monk','Moose','Morningstar','Mouth','Mug','Mule','Mummy','Mystic',
'Naga','Nail','Net','Nightmare','Nose','Noose',
'Oak','Octopus','Ogre','Ooze','Orb','Orc','Otyugh','Owl','Owlbear',
'Paladin','Panther','Pear','Pegasus','Pen','Pick','Pigeon','Pike','Pit','Pitcher','Pixie','Plate','Polyhedral','Pomegranate','Pony','Pot','Pouch','Pseudodragon','Pudding',
'Queen','Quill','Quiver',
'Rakshasa','Ram','Ranger','Rapier','Rat','Raven','Remorhaz','Reprieve','Respite','Rest','Revenant','Rhinoceros','Ring','Robe','Robin','Roc','Rogue','Rope','Rose','Rust Monster',
'Sack','Sahuagin','Sailor','Salamander','Sanctuary','Sanctum','Satyr','Scabbard','Scimitar','Scorpion','Scroll','Scythe','Sea','Serpent','Shadow','Shark','Shawm','Ship','Shovel','Sickle','Sledge','Sling','Slumber','Snake','Sorcerer','Spear','Specter','Spellbook','Sphere','Sphinx','Spider','Sprite','Square','Squirrel','Staff','Stallion','Stirge','Stone','Succubus','Sword',
'Tackle','Tail','Tankard','Tarrasque','Tent','Thicket','Tiefling','Tiger','Tome','Tooth','Torch','Totem','Trap','Trapezoid','Treant','Tree','Triangle','Trident','Troll','Trombone','Trumpet','Turtle',
'Unicorn',
'Vampire','Vulture',
'Wagon','Wand','Warhammer','Warlock','Warrior','Weasel','Werewolf','Whale','Whip','Whistle','Wight','Will-o\'-Wisp','Wizard','Wolf','Worm','Wraith','Wyrm','Wyvern',
'Yak','Yeti',
'Zombie'
]
var maritalStatuses = ['n unmarried',' widowed',' divorced',' married']
var ownerOneType = ['man','woman','androgynous person','nonbinary person']
var tenderAges = [' nearly adult',' young',' young adult','n adult',' weathered',' young-looking',' mature',' middle-aged','n older','n elderly']
var tenderGenders = ['male','female','androgynous','nonbinary']
var tenderRaces = ['dwarf','elf','halfling','human','dragonborn','gnome','half-elf','half-orc','tiefling']
var tenderDispositions = ['humorous','flamboyant','approachable','flirtatious','jovial','friendly','light-hearted','energetic','ostentatious','affable','approachable','friendly','loud','surly','curmudgeonly','stubborn','obnoxious','devious','rude','abrasive','boastful','lazy','humorless','reserved','soft-spoken','quiet']
var tenderLooks = ['ugly','attractive','average looking']
var tenderPhysiques = ['overweight','skinny','underweight','obese','stocky','muscular','scrawny','average','athletic','fit','curvy','blocky','svelte','willowy','meaty','chubby','chunky','in shape','big-boned','tall','short']
var tenderDegrees = ['unmistakably','somewhat','absolutely','acutely','almost','astonishingly','awfully','certainly','considerably','conspicuously','decidedly','disturbingly','eminently','excessively','extremely','impressively','incredibly','kind of','not quite','notably','noticeably','particularly','positively','powerfully','pretty','profoundly','quite','rather','remarkably','sort of','surprisingly','terribly','truly','uncommonly','unsettlingly','unusually','very','wonderfully','','','','','','','','','','','','','','','','','']
var tenderSkinColors = ['pale','tan','bronzed','mid-toned','dark','brown','coppery','light','sun-kissed','freckled']
var dragonBornColors = ['black','blue','brass','bronze','copper','gold','green','red','silver','white']
var tieflingColors = ['red','cobalt blue','light blue','crimson','lavender','light red','pinkish','dark red','purplish','dark blue','vibrant red']
var tieflingHorns = ['goat-like','large, curved','small, pointed','spiraled','bull-like','short, blunt','long, thin']
var horcColors = ['greenish','greyish','light green','brownish','deep green','mottled green','light grey','tan']
var horcTusks = ['pronounced','subdued','barely noticeable','large','small','uneven','broken','cracked','yellowed','sharpened','dull']
var tenderHairColors = ['light','dark','bright','shiny','black','red','brown','blond','grey','white','blue','purple','green','pink','turquoise','amber','chestnut','light brown','dark brown']
var tenderHairStyles = ['close-cut','long, wavy','shoulder length','short, messy','ponytail','slicked-back','mohawk','curly','clean, short','long, straight','braided','drawn-up','long and loose','tight bun','top-knot','short, spiky','long, tangled',]
var heSheThey = ['He','She','They','They']
var heshethey = ['he','she','they','they']
var hisHerTheir = ['His','Her','Their','Their']
var hishertheir = ['his','her','their','their']
var himherthem = ['him','her','them','them']
var ownerTwoMale = ['son','brother','grandson','boyfriend','male business partner','male friend']
var ownerTwoFemale = ['daughter','sister','granddaughter','girlfriend','female business partner','female friend']
var ownerTwoNeutral = ['androgynous child','androgynous sibling','androgynous grandchild','androgynous lover','androgynous business partner','androgynous friend']
var ownerTwoNonbinary = ['nonbinary child','nonbinary sibling','nonbinary grandchild','nonbinary lover','nonbinary business partner','nonbinary friend']
var raceTypes = ['common','uncommon','exotic','distrusted']
var ownerSecrets = [
'is openly involved in criminal activities',//0
'is secretly involved in local organized crime',//1
'is a cannibal who preys on the lonely travelers passing through the inn',//2
'used to perform in the circus and doesn\'t like talking about what happened there',//3
'secretly runs an underground fight club in the basement of the tavern',//4
'is in hiding here due to being wanted for murder in a neighboring community',//5
'kidnaps lone travelers to perform twisted arcane experiments on them in the dead of night',//6
'is secretly cursed with lycanthropy',//7
'secretly worships an evil deity',//8
'suffers from an old injury',//9
'has a fear of spiders',//10
'is secretly a vampire who feeds on the patrons of the inn during the night',//11
'keeps a collection of stolen trinkets from previous guests',//12
'dabbles in dark magic',//13
'has a rare medical condition',//14
'suffers from mental illness',//15
'is actually a doppelganger',//16
'is extremely racist/classist/sexist',//17
'is being mind-controlled by a powerful entity',//18
'is secretly the head of the local crime syndicate',//19
'is actually an ancient dragon in disguise',//20
'is secretly a powerful archfey'//21
]
var thingsThatGoBumpSingle = [
'they may overhear a "business" deal occurring in the main room of the tavern through the thin walls of their room.',
'guests come and go throughout the night—each one speaking directly to the owner in private for several minutes.',
'the cannibalistic owner attempts to lure one of the party away from the rest of them and into the cooking pot.',
'strange dreams trouble them in the night. When they wake the next morning, the sound of carnival music echoes in their heads.',
'sounds of cheering, shouting, and struggling echo from the basement of the tavern.',
'the party might be visited by the ghost of the person killed by the murderous owner.',
'shrieks of pain can be heard over the low hum of magic that permeates the vicinity throughout the night.',
'roars/howls and the rattle of chains can be heard faintly coming from below the tavern.',
'strange whispers and soft chanting disturbs their sleep throughout the night.',
'the owner has an accident in the kitchen when their old injury flairs up again.',
'the tavern is invaded by giant spiders.',
'the vampiric owner attempts to charm one of the party members to be their thrall.',
'the owner sneaks into the party\'s rooms to try to steal a small item from each of them.',
'the owner accidentally summons a more powerful demon/devil than they intended and all hell breaks loose. Literally.',
'the owner\'s constant moaning and complaining keeps the party from getting a good night\'s rest.',
'the owner takes a shine to one of the party members, and keeps them up into the late hours of the night talking to them.',
'the owner attempts to murder and take the place of one of the party members.',
'a member of the party is attacked/kidnapped by an angry mob gathered by the bigoted owner.',
'the mind-controlled owner tells the party of a vast treasure hidden in a nearby cave/dungeon. There is no treasure however; the owner is sending them to a trap—the lair of a powerful mind-controlling entity.',
'several people come into the tavern throughout the night—dressed in black and speaking in code.',
'the city is attacked, but an enormous dragon shows up out of nowhere and saves the town.',
'the party enjoys the best night\'s rest they\'ve had in a long time, feeling like they slept enough for days.'
]
var thingsThatGoBumpOneOf = [
'they may overhear a "business" deal occurring in the main room of the tavern through the thin walls of their room.',
'guests come and go throughout the night—each one speaking directly to one of the owners in private for several minutes.',
'the cannibalistic owner attempts to lure one of the party away from the rest of them and into the cooking pot.',
'strange dreams trouble them in the night. When they wake the next morning, the sound of carnival music echoes in their heads.',
'sounds of cheering, shouting, and struggling echo from the basement of the tavern.',
'the party might be visited by the ghost of the person killed by one of the owners.',
'shrieks of pain can be heard over the low hum of magic that permeates the vicinity throughout the night.',
'roars/howls and the rattle of chains can be heard faintly coming from below the tavern.',
'strange whispers and soft chanting disturbs their sleep throughout the night.',
'the owner who suffers from an old injury has an accident in the kitchen when it flairs up again.',
'the tavern is invaded by giant spiders.',
'the vampiric owner attempts to charm one of the party members to be their thrall.',
'one of the owners sneaks into the party\'s rooms to try to steal a small item from each of them.',
'the owner who dabbles in dark magic accidentally summons a more powerful demon/devil than they intended and all hell breaks loose. Literally.',
'the ill owner\'s constant moaning and complaining keeps the party from getting a good night\'s rest.',
'one of the owners takes a shine to one of the party members, and keeps them up into the late hours of the night talking to them.',
'the owner who is actually a doppelganger attempts to murder and take the place of one of the party members.',
'a member of the party is attacked/kidnapped by an angry mob gathered by the bigoted owner.',
'the mind-controlled owner tells the party of a vast treasure hidden in a nearby cave/dungeon. There is no treasure however; the owner is sending them to a trap—the lair of a powerful mind-controlling entity.',
'several people come into the tavern throughout the night—dressed in black and speaking in code.',
'the city is attacked, but an enormous dragon shows up out of nowhere and saves the town.',
'the party enjoys the best night\'s rest they\'ve had in a long time, feeling like they slept enough for days.'
]
var thingsThatGoBumpDouble = [
'they may overhear a "business" deal occurring in the main room of the tavern through the thin walls of their room.',
'guests come and go throughout the night—each one speaking directly to one of the owners in private for several minutes.',
'the cannibalistic owners attempt to lure one of the party away from the rest of them and into the cooking pot.',
'strange dreams trouble them in the night. When they wake the next morning, the sound of carnival music echoes in their heads.',
'sounds of cheering, shouting, and struggling echo from the basement of the tavern.',
'the party might be visited by the ghost of the person killed by the owners.',
'shrieks of pain can be heard over the low hum of magic that permeates the vicinity throughout the night.',
'roars/howls and the rattle of chains can be heard faintly coming from below the tavern.',
'strange whispers and soft chanting disturbs their sleep throughout the night.',
'the owners have an accident in the kitchen when their old injuries flair up again.',
'the tavern is invaded by giant spiders.',
'the vampiric owners attempt to charm one of the party members to be their thrall.',
'the owners sneak into the party\'s rooms to try to steal a small item from each of them.',
'the owners accidentally summon a more powerful demon/devil than they intended and all hell breaks loose. Literally.',
'constant moaning and complaining by the owners keeps the party from getting a good night\'s rest.',
'the owners take a shine to one of the party members, and keep them up into the late hours of the night talking to them.',
'the doppelganger-owners attempt to murder and take the place of two of the party members.',
'a member of the party is attacked/kidnapped by an angry mob gathered by the bigoted owners.',
'the mind-controlled owners tell the party of a vast treasure hidden in a nearby cave/dungeon. There is no treasure however; the owners are sending them to a trap—the lair of a powerful mind-controlling entity.',
'several people come into the tavern throughout the night—dressed in black and speaking in code.',
'the city is attacked, but two enormous dragons shows up out of nowhere and save the town.',
'the party enjoys the best night\'s rest they\'ve had in a long time, feeling like they slept enough for days.'
]
var ownerJointSecret = [
'are openly involved in criminal activities',
'are secretly involved in local organized crime',
'are cannibals who prey on the lonely travelers passing through their inn',
'used to perform in the circus, and don\'t like talking about what happened there',
'play a part in the operation of a secret underground fight club run out of the basement of the tavern',
'are hiding out here due to being wanted for murder in a neighboring community',
'kidnap lone travelers to perform twisted arcane experiments on them in the dead of night',
'are secretly cursed with lycanthropy',
'secretly worship an evil deity',
'have problems that stem from old injuries',
'are deathly afraid of spiders',
'are secretly vampires who feed on the patrons of the inn during the night',
'steal small items and trinkets from the tavern patrons to add to their collections',
'are practitioners of the dark arts',
'suffer from a rare medical condition',
'suffer from a mental illness',
'are really doppelgangers',
'are extremely racist/classist/sexist',
'are under the mental command of a powerful entity',
'are involved at the top level of organized crime in the region',
'are actually ancient dragons in disguise',
'are secretly powerful archfey'
]
var singleBackgrounds = [
'grew up on the streets, alone and poor',
'grew up in the wilds as part of a tribe of hunter-gatherers',
'yearned for a life of adventure, but wasn\'t cut out for it',
'made a living as a common thug',
'lived a life of seclusion far away from civilization',
'led a life of adventure',
'lived a boring life',
'was born into poverty but saved up enough money to buy into a tavern',
'tried to earn a living as an artist',
'studied to be a wizard, but couldn\'t make it',
'gambled compulsively and won the deed to the tavern in a bet',
'had a job as an entertainer',
'served as a soldier in service to the nation',
'studied religion at a monastery',
'made a living as a writer',
'pored over tomes at the library',
'lived a life of crime',
'traveled the countryside as a merchant\'s guard',
'fought as a gladiator in a famous arena',
'sailed around the world',
'performed minor magic tricks for fun and profit',
'trained to become a crafter of some sort',
'enjoyed fame as a world-renowned adventurer',
'lived as a noble in a faraway land'
]
var jointBackgrounds = [
'grew up together on the streets, fighting over scraps',
'grew up together in the same tribe in the wilds',
'yearned for lives of adventure, but weren\'t cut out for it',
'were common thugs',
'lived together in the woods, far away from the city',
'adventured together',
'lived boring lives',
'started with nothing and worked their way up',
'were starving artists',
'studied to be wizards, but couldn\'t make it',
'went in together on a bet and won the deed to the tavern',
'were employed as entertainers',
'served together in the same army',
'studied religion at a monastery',
'wrote a book together',
'pored over tomes at the library',
'made their livings on the wrong side of the law',
'traveled the countryside as a merchant\'s guards',
'fought as gladiators in a famous arena',
'sailed around the world',
'worked together doing street magic',
'were in training to become crafters',
'were world-renowned adventurers',
'lived as nobles in a faraway land'
]
var inspirations = ['an attempt at humor or irony','a local legend','a story from the owner\'s past','an inside joke','free association. It was the first thing the owner thought of when asked for a name','the owner\'s nickname','a misinterpretation of another famous tavern\'s name']
var gimmicks = [
'nothing. This isn\'t a very popular tavern',//0
'its comfortable seating',//1
'the cheap booze',//2
'a nautical theme regardless of the tavern\'s proximity to any body of water',//3
'the extensive adventuring paraphernalia adorning the walls',//4
'the fact that it\'s one of the only bars in town',//5
'the surprisingly good quality of the food',//6
'its rough-and-tumble anything goes atmosphere',//7
'the cheap food',//8
'the generous portions of food',//9
'the quality of the drinks',//10
'its warm and welcoming atmosphere',//11
'its surprisingly clandestine atmosphere',//12
'the band that plays every other night',//13
'its spacious seating area',//14
'the hilarious bartender',//15
'the attractive waitstaff',//16
'their convenient location',//17
'an eating challenge—if you can eat it all, you don\'t have to pay',//18
'a local legend that says the tavern was built on holy/unholy/magical ground',//19
'its connection to the criminal underworld',//20
'its famously rude and abrasive waitstaff',//21
'the statue of its namesake out front',//22
'their selection of wines imported from several far away places',//23
'a petting zoo out back for the kids',//24
'its extensive drink menu',//25
'the bartender who remembers every regular\'s drink order',//26
'its amateur open-stage night',//27
'the varied cuisine prepared by a talented chef',//28
'the fact that it\'s always a comfortable temperature inside no matter what the weather is like outside',//29
'a fountain that flows freely with alcohol',//30
'the dedicated hookah area',//31
'an enchanted bandstand that plays music at all times',//32
'the owner\'s exotic pet'//33
]
var lifestyles = ['squalid','poor','modest','comfortable','wealthy','aristocratic']
var clienteles = [
'violent',//0, raucous start rough-and-tumble start
'raucous',//1
'boisterous',//2
'loud',//3
'rambunctious',//4 rough-and-tumble end
'obnoxious',//5
'rude',//6 raucous end
'unfriendly',//7 average start
'friendly',//8 warm start
'amicable',//9
'welcoming',//10 average end warm end
'secretive',//11 clandestine start subdued start
'subdued',//12
'clandestine',//13 clandestine end
'peaceful',//14
'elitist',//15
'snobbish'//16 subdued end
]
var shadyQuests = [
'They are running a scam to trick adventurers out of their hard-earned treasure.',
'They are looking for a group to help recover an artifact.',
'They are in search of able-bodied adventurers to assist in the recovery of a kidnapped relative.',
'They have a lead on the location of a priceless treasure, but they can\'t get there on their own',
'They are selling discounted magical items and potions—around a third of which actually work.',
'They are on the run from the law for a crime they didn\'t commit and they need help clearing their name.',
'They recently lost their home in a fire and are trying to find the arsonist responsible.',
'They lost their prize-winning pet, and need help recovering it from a dangerous location.',
'They know of a dragon who is currently away from its hoard, but they don\'t know for how long the dragon will be gone.',
'Their family was murdered by bandits/goblins/kobolds or some CR-appropriate threat, and they need help getting their revenge.',
'Their child/parent/spouse has gone missing without any signs of dissatisfaction or foul play. They need help figuring out what happened.',
'They were cursed by a hag many years ago to always be approached by random people in taverns and quite frankly they\'re getting sick of it.',
'They are suffering from a strange illness, hence why they were situated in an area away from other people. They are highly contagious.',
'They just like to be left alone to their drink.',
'They are trying to sell a map which they claim leads to a hidden treasure.',
'They are actually a powerful fey creature, who will just have fun messing with the party and telling them all sorts of crazy things.',
'They ran away from home as a child, but now that they\'re grown they are trying to find their way back home to apologize to their parents. They\'re a bit lost though.'
]
var shadyLocations = ['Seated alone near the bar,','At a table almost hidden in shadow,','Sitting at a secluded table,','Leaning against the far wall,','Nearly hidden in the corner,']
var shadyDescriptions = [' jittery',' paranoid','n anxious',' nervous',' deceptively calm',' tough',' depressed',' upset','n imposing']
var patronActivities = ['trying to start a fight','throwing things at another table','harassing the waitstaff','mocking the bartender','arguing with the bartender','engaged in a heated debate','drinking heavily','participating in a drinking contest','arguing over how to split the bill','discussing religious or political matters','singing a drinking song','playing a game of dice','playing a card game','sharing tales of past adventures—successes and failures','playing a game of darts','consumed in a philosophical conversation','playing some kind of guessing game','entranced by a dancer on the stage','listening to a singer','speaking in hushed tones','laughing in response to a joke','playing chess','dancing/swaying to music','watching some performers','listening to the band','having a private conversation','discussing business matters']
var roomSizes = ['tiny','cramped','small','average sized','comfortably sized','spacious','large','huge']
var roomConditions = ['disgusting','filthy','dirty','dingy','hygenic','taken care of','clean','spotless','well-cleaned','immaculate','pristine']
var wineDescriptors = ['astringent','musty','vinegary','sour','cloying','corked','tart','dirty','raisiny','rough','bitter','flat','smokey','leathery','green','lean','dry','full','powerful','earthy','sweet','oaky','mellow','spicy','herbaceous','deep','toasty','vibrant','crisp','soft','buttery','aromatic','expressive','fruity','smooth','complex','rich']
var whiteVarieties = ['Riesling','Gewürztraminer','Chardonnay','Sauvignon Blanc']
var redVarieties = ['Shiraz','Merlot','Cabernet Sauvignon','Pinot Noir']
var wineOrigins = [' bottom-shelf',' poorly made',' house-made',' locally produced','n imported',' finely made',' famous vintage of']
var bouquetPhrases = ['with a bouquet that is ','with a taste that is ','that is described as ','with flavors that are ']
var poisonStrength = ['mild','weak','potent','strong','virulent']
var poisonEffect = ['blind','sicken','knock out','stun','kill']
var poisonReason = ['It was intended for a different guest of the tavern.','It was poisoned as a random act of evil.','An old enemy of the party is responsible.','There was a mix-up during the bottling process.']
var beerVarieties = ['lager','cider','fruit ale','ale','pilsner','malt','porter','stout']
var beerVarietiesCapped = ['Lager','Hard Cider','Fruit Ale','Ale','Pilsner','Malt','Porter','Stout']
var beerColors = ['light','pale','light amber','golden','amber','reddish','light brown','copper-colored','dark amber','medium brown','brown','chestnut brown','dark brown','blackish']
var beerOrigins = [' poorly brewed',' house-brewed',' microbrewed',' locally brewed','n imported',' masterfully brewed']
var aleTypes = ['','blonde ','brown ','cream ','dark ','golden ','honey ','light ','red ']
var beerDescriptors = ['n astringent',' bitter',' dry',' sour',' mild',' sweet',' spicy',' pleasantly bitter',' complex',' nutty',' full-bodied',' refreshing',' fruity',' robust',' crisp','rich']
var beerNoteText = [' notes of ',' a hint of ',' an aftertaste of ',' a touch of ',' a strong flavor of ']
var beerNotes = ['vanilla and','honey and','hops and','barley and','toffee and','chocolate and','caramel and','citrus and','malt and','coffee and']
var beerFinishes = ['sour','rough','bitter','creamy','sweet','smooth','pleasant','rich']
var liquorTypes = ['vodka','gin','whiskey','rum','brandy','vermouth']
var liquorTypesCapped = ['Vodka','Gin','Whiskey','Rum','Brandy','Vermouth']
var liquorSources = ['barley','corn','rye','wheat','potato','rice','sorghum','sugarbeet','molasses','sugarcane','honey']
var brandyTypes = ['apple','cherry','peach','plum','apricot','elderberry','pear','mulberry','pomace','']
var liquorOrigins = [' bottom-shelf',' poorly made',' house-made',' locally produced','n imported',' finely made']
var soupMeats = ['meat','sausage','rabbit','chicken','fish','scallops','fish','pork','ham','lamb','turkey','beef','frog','venison','duck']
var soupMeatsCapped = ['Meat','Sausage','Rabbit','Chicken','Fish','Scallop','Fish','Pork','Ham','Lamb','Turkey','Beef','Frog','Venison','Duck']
var soupCuts = ['small chunks of ',' meatballs','bits of ','cubes of ','chunks of ','hearty chunks of ']
var soupTypes = ['soup','stew','chowder','cream']
var soupTypesCapped = ['Soup','Stew','Chowder','Cream']
var creamSoups = ['broccoli','potato','mushroom','chicken','Beef']
var creamSoupsCapped = ['Broccoli','Potato','Mushroom','Chicken','Beef']
var brothTypes = ['watery','thin','smooth','tasty','savory','thick','rich','luxurious','delicious']
var soupStarches = ['rice','noodles','dumplings','cubed potatoes','assorted grains','barley']
var soupVeggies = ['onions','radishes','turnips','carrots','peas','celery','garlic','green beans','mushrooms','beans','peppers']

var lifestyleIsSet = false;
var chosenLifestyle = 0;
var ownerIsSet = false;
var chosenOwner = 0;
var bartenderIsSet = false;
var chosenBartender = 0;
var atmosphereIsSet = false;
var chosenAtmosphere = 0;
var menuIsSet = false;
var chosenMenu = 0;

var doublePrefix = 0;
var randomPrefix1 = '';
var randomPrefix2 = '';
var randomSuffix = '';
var tavernName = 'The Double Entendre';
var ownerOneGender = 0;
var ownerOne = ownerOneType[ownerOneGender];
var ownerOneHeSheThey = heSheThey[ownerOneGender];
var ownerOneheshethey = heshethey[ownerOneGender];
var ownerOneHisHerTheir = hisHerTheir[ownerOneGender];
var ownerOnehishertheir = hishertheir[ownerOneGender];
var ownerOnehimherthem = himherthem[ownerOneGender];
var secondOwnerDecider = 0;

var inspiration = '';
var gimmickDecider = 0;
var gimmick = '';
var lifestyle = '';
var lifestyleDecider = 0;
var drinkQuality = 0;
var drinkVariety = 0;
var wineOriginModifier = 0;
var drinkPriceModifier = 1;
var wineOfferingCount = 0;
var beerOfferingCount = 0;
var liquorOfferingVariety = 0;
var liquorOfferingCount = 0;
var eatingChallenge = 0;
var foodQuality = 0;
var foodQuantity = 0;
var foodPriceModifier = 1;
var starterOfferingCount = 0;
var soupOfferingCount = 0;
var saladOfferingCount = 0;
var soupAndSaladList = [];
var entreeOfferingCount = 0;
var theyNeverListen = 0;
var allRan = 0;

function boast(){
	document.getElementById('boastBox').innerHTML = 'With ' + numberWithCommas((prefixes.length * prefixes.length * suffixes.length) + (prefixes.length * suffixes.length)) + ' possible tavern names, over ' + numberToRounded(maritalStatuses.length * ownerOneType.length * heSheThey.length * ownerTwoNeutral.length * inspirations.length * gimmicks.length * (ownerSecrets.length+1) * (singleBackgrounds.length+1) * raceTypes.length * lifestyles.length) + ' story combinations, over ' + numberToRounded(tenderGenders.length * tenderRaces.length * tenderDispositions.length * tenderLooks.length * tenderDegrees.length * tenderSkinColors.length * tenderHairColors.length * tenderHairStyles.length) + ' possible bartenders, over ' + numberToRounded(clienteles.length * shadyQuests.length * shadyLocations.length * shadyDescriptions.length * patronActivities.length * patronActivities.length * patronActivities.length * tenderDegrees.length) + ' different clientele descriptions, a whole lot of alcohol, a ton of food, and more!';
}

var numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var randFl = (x,y) => {
	return Math.floor(Math.random() * x)+y;
}

var randRo = (x,y) => {
	return Math.round(Math.random() * x)+y;
}

var numberToRounded = (x) => {
	if (x > 1000000000){
		return Math.floor(x/100000000)/10 + ' billion';
	} else if (x > 1000000){
		return Math.floor(x/100000)/10 + ' million';
	}
}

var convertedPrice = (x) => {
	if (x >= 100){
		if (Math.floor(x)/100 == Math.floor(Math.floor(x)/100) || Math.floor((x-(100*Math.floor(x/100)))/10) == 0){
			return Math.floor(x/100) + ' gp';
		} else {
			return Math.floor(x/100) + ' gp, ' + Math.floor((x-(100*Math.floor(x/100)))/10) + ' sp';
		}
	} else if (x >= 10){
		if (Math.floor(x)/10 == Math.floor(Math.floor(x)/10) || Math.floor((x-(10*Math.floor(x/10)))) == 0){
			return Math.floor(x/10) + ' sp';
		} else {
			return Math.floor(Math.floor(x)/10) + ' sp, ' + Math.floor((x-(10*Math.floor(x/10)))) + ' cp';
		}
	} else {
		return Math.floor(x) + ' cp';
	}
}

function saveOrPrint(){
	var printWindow = window.open('','PRINT','height=800,width=1000');
	
	printWindow.document.write('<html><head><title> Not Another Tavern Generator — ' + tavernName +'</title>');
	printWindow.document.write('</head><body>');
	printWindow.document.write('<h1 style="font-variant:small-caps;margin:0;">' + tavernName + '</h1>');
	printWindow.document.write('<div style="-webkit-column-count:2;-moz-column-count:2;column-count:2;"><h2 style="font-variant:small-caps;margin:0;"> The Tavern\'s Tale </h2>');
	printWindow.document.write(document.getElementById('nameDisplay').innerHTML);
	printWindow.document.write(document.getElementById('ownerDisplay').innerHTML);
	printWindow.document.write(document.getElementById('raceDisplay').innerHTML);
	printWindow.document.write(document.getElementById('secretDisplay').innerHTML);
	printWindow.document.write(document.getElementById('backstoryDisplay').innerHTML);
	printWindow.document.write(document.getElementById('inspirationDisplay').innerHTML);
	printWindow.document.write(document.getElementById('qualityDisplay').innerHTML);
	printWindow.document.write(document.getElementById('gimmickDisplay').innerHTML);
	printWindow.document.write('<br><br><h2 style="font-variant:small-caps;margin:0;"> The Bartender </h2>');
	printWindow.document.write(document.getElementById('bartenderDisplay').innerHTML);
	printWindow.document.write('<br><br><h2 style="font-variant:small-caps;margin:0;"> The Clientele </h2>');
	printWindow.document.write(document.getElementById('clienteleDisplay').innerHTML);
	printWindow.document.write('<br><br><h2 style="font-variant:small-caps;margin:0;"> The Accommodations </h2>');
	printWindow.document.write(document.getElementById('roomsDisplay').innerHTML);
	printWindow.document.write('<br><br><h2 style="font-variant:small-caps;margin:0;"> Beverages </h2><h3 style="font-variant:small-caps;margin:0;">Wines</h3>');
	printWindow.document.write(document.getElementById('winesDisplay').innerHTML);
	printWindow.document.write('<h3 style="font-variant:small-caps;margin:0;"> Lagers & Ales </h3>');
	printWindow.document.write(document.getElementById('beersDisplay').innerHTML);
	printWindow.document.write('<h3 style="font-variant:small-caps;margin:0;"> Liquors </h3>');
	printWindow.document.write(document.getElementById('liquorsDisplay').innerHTML);
	printWindow.document.write('<br><br><h2 style="font-variant:small-caps;margin:0;"> Food Menu </h2> <h3 style="font-variant:small-caps;margin:0;"> Starters </h3>');
	printWindow.document.write(document.getElementById('startersDisplay').innerHTML);
	printWindow.document.write('<h3 style="font-variant:small-caps;margin:0;"> Salads </h3>');
	printWindow.document.write(document.getElementById('saladsDisplay').innerHTML);
	printWindow.document.write('<h3 style="font-variant:small-caps;margin:0;"> Entrees </h3>');
	printWindow.document.write(document.getElementById('entreesDisplay').innerHTML);
	printWindow.document.write('</div><p> Created with Not Another Tavern Generator from The Copper Sanctum<br>©2018 Ian F Evans</p>');
	printWindow.document.write('</body></html>');
	
	printWindow.document.close();
	printWindow.focus();
	
	printWindow.print();
}

function showMeTheTables(){
	var tableWindow = window.open('','TABLES','height=900,width=1200');
	tableWindow.document.write('<html><head><style>h1{font-variant:small-caps;}h2{font-variant:small-caps;margin:0}table{border-collapse:collapse;}td,th{padding:1px;border:none;margin:0;}tr:nth-child(even){background-color:#f2f2f2;}tr:hover{background-color:#ddf}th{background-color:#fff}</style><title> Not Another Tavern Generator - The Interesting Tables </title></head><body>');
	tableWindow.document.write('<h1> The More Interesting Tables for Not Another Tavern Generator</h1>');
	tableWindow.document.write('<h2> Name Descriptors </h2><div style="-webkit-column-count:6;-moz-column-count:6;column-count:6;"><table><tr><th>Number</th><th style="text-align:left">Descriptor</th></tr>');
	for(var a=0;a<prefixes.length;a++){
		switch (a){
			case 40:
			case 80:
			case 120:
			case 160:
			case 200:
				tableWindow.document.write('</table><table><tr><th>Number</th><th>Descriptor</th></tr>');
		}
		tableWindow.document.write('<tr><td style="text-align:center">' + (a+1) + '</td><td>' + prefixes[a] + '</td></tr>');
	}
	tableWindow.document.write('</table></div><br>');
	tableWindow.document.write('<h2"> Name Objects </h2><div style="-webkit-column-count:6;-moz-column-count:6;column-count:6;"><table><tr><th>Number</th><th style="text-align:left">Object</th></tr>');
	for(var b=0;b<suffixes.length;b++){
		switch (b){
			case 59:
			case 118:
			case 177:
			case 236:
			case 295:
				tableWindow.document.write('</table><table><tr><th>Number</th><th>Descriptor</th></tr>');
		}
			tableWindow.document.write('<tr><td style="text-align:center">' + (b+1) + '</td><td>' + suffixes[b] + '</td></tr>');
	}
	tableWindow.document.write('</table></div><br>');
	tableWindow.document.write('<h2> Possible Personality Quirks, Secrets and Possible Midnight Encounters </h2><div><table><tr><th>Number</th><th style="text-align:left">Secret</th><th>If the party stays the night, ...</th></tr>');
	for(var c=0;c<ownerSecrets.length;c++){
		tableWindow.document.write('<tr><td style="text-align:center">' + (c+1) + '</td><td> An owner ' + ownerSecrets[c] + '</td><td>'+thingsThatGoBumpSingle[c] + '.</td></tr>');
	}
	tableWindow.document.write('</table></div><br><div style="-webkit-column-count:2;-moz-column-count:2;column-count:2;">');
	tableWindow.document.write('<h2> Possible Owner Backgrounds </h2><div><table><tr><th>Number</th><th style="text-align:left">Background</th></tr>');
	for(var d=0;d<singleBackgrounds.length;d++){
		tableWindow.document.write('<tr><td style="text-align:center">' + (d+1) + '</td><td> An owner ' + singleBackgrounds[d] + '.</td></tr>');
	}
	tableWindow.document.write('</table></div><br>');
	tableWindow.document.write('<h2> Possible Tavern Draws/Gimmicks </h2><div><table><tr><th>Number</th><th style="text-align:left">The Draw is ...</th></tr>');
	for(var e=0;e<gimmicks.length;e++){
		tableWindow.document.write('<tr><td style="text-align:center">' + (e+1) + '</td><td>' + gimmicks[e] + '.</td></tr>');
	}
	tableWindow.document.write('</table></div><br><br><br><br>');
	tableWindow.document.write('<h2> Patron Activities </h2><div><table><tr><th>Number</th><th style="text-align:left">Some patrons are ...</th></tr>');
	for(var g=0;g<patronActivities.length;g++){
		tableWindow.document.write('<tr><td style="text-align:center">' + (g+1) + '</td><td> ' + patronActivities[g] + '.</td></tr>');
	}
	tableWindow.document.write('</table></div><br>');
	tableWindow.document.write('<h2> What\'s that Shady Figure up to? </h2><div><table><tr><th>Number</th><th style="text-align:left">What\'s their story?</th></tr>');
	for(var h=0;h<shadyQuests.length;h++){
		tableWindow.document.write('<tr><td style="text-align:center">' + (h+1) + '</td><td>' + shadyQuests[h] + '.</td></tr>');
	}
	tableWindow.document.write('<tr><td style="text-align:center">' + (shadyQuests.length+1) + '</td><td>He is an adventuring cleric by the name of Thor Lightningroot. He needs the party\'s assistance for something TBD by @TooFadedGaming, winner of my secret contest.</td></tr>');
	tableWindow.document.write('<tr><td style="text-align:center">' + (shadyQuests.length+2) + '</td><td>It is actually just a mannequin/scarecrow/broom dressed up to look like the stereotypical "shady figure in a bar" so frequently talked about in tales of taverns. The bartender has a running tally on a nearby chalkboard to record how many people are tricked by it on a daily basis.</td></tr>');
	tableWindow.document.write('</table></div></div><p>Not Another Tavern Generator from The Copper Sanctum<br>©2018 Ian F Evans</p>');
	tableWindow.document.write('</body></html>');
	
	tableWindow.document.close();
	tableWindow.focus();
}

function setLifestyle(x){
	lifestyleIsSet = true;
	chosenLifestyle = x;
}

function setOwner(x){
	ownerIsSet = true;
	chosenOwner = x;
}

function setTenderRace(x){
	bartenderIsSet = true;
	chosenBartender = x;
}

function setAtmosphere(x){
	atmosphereIsSet = true;
	chosenAtmosphere = x;
}

function setMenu(x){
	menuIsSet = true;
	chosenMenu = x;
}

function newTavern(){
	document.getElementById('descriptionText').style = 'height:65vh;overflow:auto;';
	document.getElementById('descriptionText').scroll(0,0);
	document.getElementById('tavernButton').innerHTML = buttonSayings[clickCount];
	clickCount++;
	if(clickCount >= buttonSayings.length){
		clickCount = 0;
	}
	newName();
	newStory();
	newBartender();
	newClientele();
	newRooms();
	newFoodAndDrink();
	document.getElementById("saveOrPrintButton").disabled = false;
	document.getElementById("instructions").style = 'display:inline;font-size:.8em';
	document.getElementById("innerTavernBtn").innerHTML = '<br>Don\'t care for this tavern? Tap this text or use the button above the tavern\'s description to generate another, or hit any of the section subheadings to regenerate just that section.';
}

function newName(){
	doublePrefix = randFl(20,0);
	var alliterative = randFl(10,0);
	var prefix2Array = [];
	var prefix1Number = randFl(prefixes.length,0);
	randomPrefix1 = prefixes[prefix1Number];
	var prefixFinal = '';
	var suffixNumber = randFl(suffixes.length,0)
	
	if (doublePrefix <= 17) {
		if(alliterative >= 5){
			switch(randomPrefix1.charAt(0)){
				case 'A':
					suffixNumber = randFl(12,0);
					break;
				case 'B':
					suffixNumber = randFl(31,12);
					break;
				case 'C':
					suffixNumber = randFl(33,43);
					break;
				case 'D':
					suffixNumber = randFl(19,76);
					break;
				case 'E':
					suffixNumber = randFl(9,95);
					break;
				case 'F':
					suffixNumber = randFl(12,104);
					break;
				case 'G':
					suffixNumber = randFl(20,116);
					break;
				case 'H':
					suffixNumber = randFl(21,136);
					break;
				case 'I':
					suffixNumber = randFl(4,157);
					break;
				case 'J':
					suffixNumber = randFl(7,161);
					break;
				case 'K':
					suffixNumber = randFl(3,168);
					break;
				case 'L':
					suffixNumber = randFl(15,171);
					break;
				case 'M':
					suffixNumber = randFl(25,186);
					break;
				case 'N':
					suffixNumber = randFl(6,211);
					break;
				case 'O':
					suffixNumber = randFl(9,217);
					break;
				case 'P':
					suffixNumber = randFl(19,226);
					break;
				case 'Q':
					suffixNumber = randFl(3,245);
					break;
				case 'R':
					suffixNumber = randFl(20,248);
					break;
				case 'S':
					suffixNumber = randFl(40,268);
					break;
				case 'T':
					suffixNumber = randFl(22,308);
					break;
				/*case 'U':
					suffixNumber = randFl(1,330);
					break;
				case 'V':
					suffixNumber = randFl(2,331);
					break;*/
				case 'W':
					suffixNumber = randFl(18,333);
					break;
				/*case 'Y':
					suffixNumber = randFl(2,351);
					break;
				case 'Z':
					suffixNumber = randFl(1,355);
					break;*/
			}
		}
		prefixFinal = randomPrefix1
	} else {
		prefix2Array = prefixes.slice();
		prefix2Array.splice(prefix1Number,1);
		randomPrefix2 = prefix2Array[randFl(prefix2Array.length,0)];
		prefixFinal = randomPrefix1 + ' ' + randomPrefix2;
	}
	if (prefixFinal == 'Meady' && randFl(5,0) == 0){
		randomSuffix = 'Ogre';//sorry, not sorry.
	} else if (prefixFinal == 'Moose and' && randFl(5,0) == 0){
		randomSuffix = 'Squirrel';//totally not sorry for that one at all.
	} else if (prefixFinal == 'Sultry' && randFl(5,0) == 0){
		randomSuffix = 'Sahuagin';//nor that one, had to include it as it's my goto tavern name.
	} else {
		randomSuffix = suffixes[suffixNumber];
	}
	tavernName = 'The ' + prefixFinal + ' ' + randomSuffix;
	document.getElementById('nameDisplay').innerHTML = tavernName;
	if (allRan == 1){
		document.getElementById('nameDisplay2').innerHTML = tavernName;
		document.getElementById('nameDisplay3').innerHTML = tavernName;
		document.getElementById('nameDisplay4').innerHTML = tavernName;
	}
	document.getElementById('titleDisplay').innerHTML =  '<h1><button onclick="newName()" class="innerBtn">' + tavernName + '</button></h1><h2><button onclick="newStory()" class="innerBtn"> The Tavern\'s Tale </button></h2>';
}

function newStory() {
	if(lifestyleIsSet){
		if(chosenLifestyle<6){
			lifestyleDecider = randFl(2,chosenLifestyle);
		} else {
			lifestyleDecider = randFl(lifestyles.length,0);
		}
	} else {
		lifestyleDecider = randFl(lifestyles.length,0);
	}
	
	lifestyle = lifestyles[lifestyleDecider];
	var maritalStatus = maritalStatuses[randFl(maritalStatuses.length,0)];
	var ownerOneGenderDecider = randFl(20,0);
	
	if (ownerOneGenderDecider > 10) {
		ownerOneGender = 0;
	} else if (ownerOneGenderDecider > 1) {
		ownerOneGender = 1;
	} else if (ownerOneGenderDecider > 0) {
		ownerOneGender = 2;
	} else {
		ownerOneGender = 3;
	}
	
	ownerOne = ownerOneType[ownerOneGender];
	ownerOneHeSheThey = heSheThey[ownerOneGender];
	ownerOneheshethey = heshethey[ownerOneGender];
	ownerOneHisHerTheir = hisHerTheir[ownerOneGender];
	ownerOnehishertheir = hishertheir[ownerOneGender];
	ownerOnehimherthem = himherthem[ownerOneGender];
	ownerOneRaceRarityDecider = randFl(10,0);
	var ownerOneRaceRarity = 1;
	ownerOneHasSecret = randFl(5,0);
	ownerOneSecretNumber = randFl(ownerSecrets.length+1-lifestyles.length,lifestyleDecider);
	var ownerOneHasOtherBackground = randFl(lifestyleDecider+2,0);
	var ownerOneBackgroundNumber = randFl(singleBackgrounds.length+1-lifestyles.length,lifestyleDecider);
	
	secondOwnerDecider = randFl(lifestyleDecider/2,2);
	var ownerTwoGenderDecider = randFl(20,0);
	var ownerTwoGender = 0;
	
	if (ownerTwoGenderDecider > 10) {
		ownerTwoGender = 0;
	} else if (ownerTwoGenderDecider > 1) {
		ownerTwoGender = 1;
	} else if (ownerTwoGenderDecider > 0) {
		ownerTwoGender = 2;
	} else {
		ownerTwoGender = 3;
	}
	
	var ownerTwoNumber = randFl(ownerTwoNeutral.length,0);
	var ownerTwo = ownerTwoNeutral[ownerTwoNumber];
	var ownerTwoRaceRarityDecider = randFl(10,0);
	var ownerTwoRaceRarity = 1;
	ownerTwoHasSecret = randFl(4,0);
	ownerTwoSecretNumber = randFl(ownerSecrets.length+1-lifestyles.length,lifestyleDecider);
	var ownerTwoHasOtherBackground = randFl(3,0);
	var ownerTwoBackgroundNumber = randFl(singleBackgrounds.length+1-lifestyles.length,lifestyleDecider);
	
	inspiration = inspirations[randFl(inspirations.length,0)];
	gimmickDecider = randFl(gimmicks.length-10,lifestyleDecider*2)
	while((gimmickDecider == 7 && (chosenAtmosphere == 0 || chosenAtmosphere == 1)) || ((gimmickDecider == 11 || gimmickDecider == 12) && chosenAtmosphere == 2)){
		gimmickDecider = randFl(gimmicks.length-10,lifestyleDecider*2)
	}
	gimmick = gimmicks[gimmickDecider];
	
	if (ownerOneRaceRarityDecider < 1) {
		ownerOneRaceRarity = 2;
	} else if (ownerOneRaceRarityDecider < 7) {
		ownerOneRaceRarity = 0;
	} else if (ownerOneRaceRarityDecider < 9) {
		ownerOneRaceRarity = 1;
	} else {
		ownerOneRaceRarity = 3;
	}
	if(ownerIsSet && chosenOwner < 4){
		ownerOneRaceRarity = chosenOwner;
	}
	
	if (secondOwnerDecider < 1) {
		document.getElementById('ownerDisplay').innerHTML = ' is owned by a' + maritalStatus + ' ' + ownerOne;
		document.getElementById('raceDisplay').innerHTML = ' whose race is ' + raceTypes[ownerOneRaceRarity] + ' in the area. ';
		if (ownerOneHasSecret < 2) {
			document.getElementById('secretDisplay').innerHTML = 'The owner is an upstanding citizen with no hidden secrets or unusual quirks. ';
		} else {
			document.getElementById('secretDisplay').innerHTML = 'The owner ' + ownerSecrets[ownerOneSecretNumber] + '. ';
		}
		if (ownerOneHasOtherBackground < 1) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, ' + ownerOneheshethey + ' worked there under the previous owner. ';
		} else {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, ' + ownerOneheshethey + ' ' + singleBackgrounds[ownerOneBackgroundNumber] + '. ';
		}
	} else {
		switch (ownerTwoGender){
			case 0:
				ownerTwo = ownerTwoMale[ownerTwoNumber];
				break;
			case 1:
				ownerTwo = ownerTwoFemale[ownerTwoNumber];
				break;
			case 2:
				ownerTwo = ownerTwoNeutral[ownerTwoNumber];
				break;
			case 3:
				ownerTwo = ownerTwoNonbinary[ownerTwoNumber];
		}
		if (maritalStatus == ' married') {
			switch (ownerTwo){
				case 'boyfriend':
					ownerTwo = 'husband';
					break;
				case 'girlfriend':
					ownerTwo = 'wife';
					break;
				case 'androgynous lover':
					ownerTwo = 'androgynous spouse';
					break;
				case 'nonbinary lover':
					ownerTwo = 'nonbinary spouse';
			}
		}
		document.getElementById('ownerDisplay').innerHTML = ' is owned by a' + maritalStatus + ' ' + ownerOne + ' and ' + ownerOnehishertheir + ' ' + ownerTwo;

		if (ownerTwoRaceRarityDecider < 1) {
			ownerTwoRaceRarity = 0;
		} else if (ownerTwoRaceRarityDecider < 7) {
			ownerTwoRaceRarity = 1;
		} else if (ownerTwoRaceRarityDecider < 9) {
			ownerTwoRaceRarity = 2;
		} else {
			ownerTwoRaceRarity = 3;
		}
		
		if (ownerOneRaceRarity == ownerTwoRaceRarity || ownerTwoNumber < 3){
			document.getElementById('raceDisplay').innerHTML = ', both of whom are members of a race that is ' + raceTypes[ownerOneRaceRarity] + ' in the area. ';
		} else {
			document.getElementById('raceDisplay').innerHTML = '. One of the owners is a member of a race that is ' + raceTypes[ownerOneRaceRarity] + ' for the area, while the other owner\'s race is ' + raceTypes[ownerTwoRaceRarity] + ' in the area. ';
		}
		
		if (ownerOneHasSecret < 2 && ownerTwoHasSecret < 2){
			document.getElementById('secretDisplay').innerHTML = 'Both of the owners are law-abiding citizens with no hidden secrets or notable personality quirks. ';
		} else if (ownerOneHasSecret < 2) {
			document.getElementById('secretDisplay').innerHTML = 'One of the owners has no hidden secrets or unusual quirks, but the other ' + ownerSecrets[ownerTwoSecretNumber] + '. ';
		} else if (ownerTwoHasSecret < 2) {
			document.getElementById('secretDisplay').innerHTML = 'One of the owners has no hidden secrets or unusual quirks, but the other ' + ownerSecrets[ownerOneSecretNumber] + '. ';
		} else if (ownerOneSecretNumber == ownerTwoSecretNumber) {
			document.getElementById('secretDisplay').innerHTML = 'Both of the owners ' + ownerJointSecret[ownerOneSecretNumber] + '. ';
		} else {
			document.getElementById('secretDisplay').innerHTML = 'One of the owners ' + ownerSecrets[ownerOneSecretNumber] + ', and the other ' + ownerSecrets[ownerTwoSecretNumber] + '. ';
		}
		
		if (ownerOneHasOtherBackground < 1 && ownerTwoHasOtherBackground < 1){
			document.getElementById('backstoryDisplay').innerHTML = 'Before they owned the tavern, both owners worked there under the previous owner. ';
		} else if (ownerOneHasOtherBackground < 1) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, one of the owners worked there under the previous owner, while the other ' + singleBackgrounds[ownerTwoBackgroundNumber] + '. ';
		} else if (ownerTwoHasOtherBackground < 1) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, one of the owners worked there under the previous owner, while the other ' + singleBackgrounds[ownerOneBackgroundNumber] + '. ';
		} else if (ownerOneBackgroundNumber == ownerTwoBackgroundNumber) {
			document.getElementById('backstoryDisplay').innerHTML = 'Before the owned the tavern, both owners ' + jointBackgrounds[ownerOneBackgroundNumber] + '. ';
		} else {
			document.getElementById('backstoryDisplay').innerHTML = 'Before owning the tavern, one of the owners ' + singleBackgrounds[ownerOneBackgroundNumber] + ', while the other ' + singleBackgrounds[ownerTwoBackgroundNumber] + '. ';
		}
	}
	
	document.getElementById('inspirationDisplay').innerHTML = 'The inspiration for the tavern\'s name was ' + inspiration + '. ';
	document.getElementById('qualityDisplay').innerHTML = 'It is a tavern of ' + lifestyle + ' quality, ';	
	document.getElementById('gimmickDisplay').innerHTML = 'and its main draw is ' + gimmick +'.<br><br>';
}

function newBartender(){
	var bartenderDecider = randFl(10,0);
	var ownerTendsBar = true;
	var reasonForOwnerTendingBar = 'blah';
	var addedS = 's';
	var isOrAre = 'is';
	var hasorhave = 'has';
	var tenderAge = tenderAges[randFl(tenderAges.length,0)];
	var tenderGenderDecider = randFl(20,0);
	var tenderGender = 0;
	var tenderHeSheThey = heSheThey[tenderGender];
	var tenderheshethey = heshethey[tenderGender];
	var tenderHisHerTheir = hisHerTheir[tenderGender];
	var tenderhishertheir = hishertheir[tenderGender];
	var tenderhimherthem = himherthem[tenderGender];
	var tenderRace = tenderRaces[randFl(tenderRaces.length,0)];
	var tenderSkinAndHair = ' words';
	var tenderColor = tenderSkinColors[randFl(tenderSkinColors.length,0)];
	var tenderOther = 'decorated';
	var tenderDispositionNumber = randFl(tenderDispositions.length,0);
	var tenderHairColor = tenderHairColors[randFl(tenderHairColors.length,0)];
	var tenderHairStyle = tenderHairStyles[randFl(tenderHairStyles.length,0)];
	var degree1 = tenderDegrees[randFl(tenderDegrees.length,0)];
	var degree2 = tenderDegrees[randFl(tenderDegrees.length,0)];
	while (degree2 == degree1){
		degree2 = tenderDegrees[randFl(tenderDegrees.length,0)];
	}
	var degree3 = tenderDegrees[randFl(tenderDegrees.length,0)];
	var tenderPhysique = tenderPhysiques[randFl(tenderPhysiques.length,0)];
	var tenderText = 'Ain\'t nobody at the bar!';
	if(gimmickDecider == 15 || gimmickDecider == 11){ //hilarious bartender or warm and welcoming atmosphere
		tenderDispositionNumber = randFl(13,0);
	} else if (gimmickDecider == 21){ //famously rude waitstaff
		tenderDispositionNumber = randFl(8,12);
	}
	
	if(bartenderIsSet && chosenBartender < 9){
		switch(chosenBartender){
			case 0:
				tenderRace = tenderRaces[randFl(4,0)];
				break;
			case 4:
				tenderRace = tenderRaces[randFl(5,chosenBartender)];
		}
		ownerTendsBar = false;
	} else {
		switch (lifestyle){
			case 'squalid':
			case 'poor':
				if (bartenderDecider == 10){
					ownerTendsBar = false;
				} else {
					if (ownerOneheshethey == 'they'){
						addedS = '';
						isOrAre = 'are';
					}
					if (bartenderDecider<5){
						reasonForOwnerTendingBar = 'because ' + ownerOneheshethey + ' can\'t afford to hire another person to do the job. ';
					} else if (bartenderDecider<8){
						reasonForOwnerTendingBar = 'to maintain the illusion of the tavern being of ' + lifestyle + ' quality. ';
					} else {
						reasonForOwnerTendingBar = 'because ' + ownerOneheshethey + ' enjoy' + addedS + ' doing the job ' + ownerOnehimherthem + 'self. ';
					}
				}
				break;
			case 'modest':
			case 'comfortable':
				if (bartenderDecider < 8){
					ownerTendsBar = false;
				} else {
					if (ownerOneheshethey == 'they'){
						addedS = '';
						isOrAre = 'are';
					}
					reasonForOwnerTendingBar = 'because ' + ownerOneheshethey + ' enjoy' + addedS + ' doing the job ' + ownerOnehimherthem + 'self. ';
				}
				break;
			case 'wealthy':
			case 'aristocratic':
				ownerTendsBar = false;
		}
	}
	
	if (ownerTendsBar == true){
		if (secondOwnerDecider < 1){
			tenderText = 'The owner of <span id="nameDisplay2">' + tavernName + '</span> tends the bar ' + reasonForOwnerTendingBar + ownerOneHisHerTheir + ' disposition is generally described as ' + degree1 + ' ' + tenderDispositions[tenderDispositionNumber] + '. ' + ownerOneHeSheThey + ' ' + isOrAre + ' ' + degree2 + ' ' + tenderLooks[randFl(tenderLooks.length,0)] + ' with ' + tenderColor + ' skin and ' + tenderHairColor + ' hair in a ' + tenderHairStyle + ' style. Physically, ' + ownerOneheshethey + ' ' + isOrAre + ' ' + degree3 + ' ' + tenderPhysique + '.';
		} else {
			tenderText = 'One of the owners of <span id="nameDisplay2">' + tavernName + '</span> tends the bar ' + reasonForOwnerTendingBar + ownerOneHisHerTheir + ' disposition is generally described as ' + degree1 + ' ' + tenderDispositions[tenderDispositionNumber] + '. ' + ownerOneHeSheThey + ' ' + isOrAre + ' ' + degree2 + ' ' + tenderLooks[randFl(tenderLooks.length,0)] + ' with ' + tenderColor + ' skin and ' + tenderHairColor + ' hair in a ' + tenderHairStyle + ' style. Physically, ' + ownerOneheshethey + ' ' + isOrAre + ' ' + degree3 + ' ' + tenderPhysique + '.';
		}
	} else {
		if (tenderGenderDecider > 10) {
			tenderGender = 0;
		} else if (tenderGenderDecider > 1) {
			tenderGender = 1;
		} else if (tenderGenderDecider > 0) {
			tenderGender = 2;
		} else {
			tenderGender = 3;
		}
		tenderHeSheThey = heSheThey[tenderGender];
		tenderheshethey = heshethey[tenderGender];
		tenderHisHerTheir = hisHerTheir[tenderGender];
		tenderhishertheir = hishertheir[tenderGender];
		tenderhimherthem = himherthem[tenderGender];
		if (tenderheshethey == 'they'){
			addedS = '';
			isOrAre = 'are';
			hasorhave = 'have';
		}
		
		switch (tenderRace){ 
			case 'dragonborn':
				tenderColor = dragonBornColors[randFl(dragonBornColors.length,0)];
				tenderSkinAndHair = ' scales are ' + tenderColor + ' in color.';
				break;
			case 'tiefling':
				tenderColor = tieflingColors[randFl(tieflingColors.length,0)];
				tenderOther = tieflingHorns[randFl(tieflingHorns.length,0)];
				tenderSkinAndHair = ' skin is a ' + tenderColor + ' color, and ' + tenderheshethey + ' ' + hasorhave + ' ' + tenderOther + ' horns. ' + tenderHeSheThey + ' ' + hasorhave + ' ' + tenderHairColor + ' hair, worn in a ' + tenderHairStyle + ' style.';
				break;
			case 'half-orc':
				tenderColor = horcColors[randFl(horcColors.length,0)];
				tenderOther = horcTusks[randFl(horcTusks.length,0)];
				tenderSkinAndHair = ' skin is ' + tenderColor + ' in color, and ' + tenderheshethey + ' ' + hasorhave + ' ' + tenderOther + ' tusks. ' + tenderHeSheThey + ' ' + hasorhave + ' ' + tenderHairColor + ' hair, worn in a ' + tenderHairStyle + ' style.';
				break;
			case 'dwarf':
			case 'elf':
			case 'halfling':
			case 'human':
			case 'gnome':
			case 'half-elf':
				tenderSkinAndHair = ' skin is ' + tenderColor + ', and ' + tenderheshethey + ' ' + hasorhave + ' ' + tenderHairColor + ' hair, kept in a ' + tenderHairStyle + ' style.';		
		}
		tenderText = 'The bartender at <span id="nameDisplay2">' + tavernName + '</span> is a' + tenderAge + ' ' + tenderGenders[tenderGender] + ' ' + tenderRace + ' who is ' + degree1 + ' ' + tenderLooks[randFl(tenderLooks.length,0)] + '. ' + tenderHeSheThey + ' ' + isOrAre + ' often ' + degree2 + ' ' + tenderDispositions[tenderDispositionNumber] + ' in disposition. ' + tenderHisHerTheir + tenderSkinAndHair + ' Physically, ' + tenderheshethey + ' ' + isOrAre + ' ' + degree3 + ' ' + tenderPhysique + '.';
	}
	document.getElementById('bartenderHeading').innerHTML = '<h2><button onclick="newBartender()" class="innerBtn"> The Bartender </button></h2>';
	document.getElementById('bartenderDisplay').innerHTML = tenderText + '<br><br>';
}

function newClientele() {
	var clienteleDegree = tenderDegrees[randFl(tenderDegrees.length,0)];
	var clienteleDecider = randFl(clienteles.length+1-lifestyles.length,lifestyleDecider);
	if (gimmickDecider == 7){
		clienteleDecider = randFl(5,0);
	} else if (gimmickDecider == 11){
		clienteleDecider = randFl(3,8);
	} else if (gimmickDecider == 12){
		clienteleDecider = randFl(3,11);
	}	
	if(atmosphereIsSet){
		switch(chosenAtmosphere){
			case 0:
				clienteleDecider = randFl(6,11);
				break;
			case 1:
				clienteleDecider = randFl(4,7);
				break;
			case 2:
				clienteleDecider = randFl(7,0);
		}
	}
	var clientele = clienteles[clienteleDecider];
	var isOrAre = 'are';
	var howMany = 'some';
	var peopleOrPerson = 'people';
	var patronCount = randFl((1+lifestyleDecider)*5,1);
	var thereIsAShadyFigure = randFl(2,0);
	var itIsLegit = randFl(5,0);
	var shadyText = '';
	var shadyQuest = shadyQuests[randFl(shadyQuests.length,0)];
	var shadyDescription = shadyDescriptions[randFl(shadyDescriptions.length,0)];
	var shadyLocation = shadyLocations[randFl(shadyLocations.length,0)];
	
	var activityOneNumber = randFl(patronActivities.length-clienteles.length/2,Math.round(clienteleDecider/2));
	
	var activityTwoArray = patronActivities.slice();
	activityTwoArray.splice(activityOneNumber, 1);
	var activityTwoNumber = randFl(activityTwoArray.length-clienteles.length/2,Math.round(clienteleDecider/2));
	
	var activityThreeArray = activityTwoArray.slice();
	activityThreeArray.splice(activityTwoNumber, 1);
	var activityThreeNumber = randFl(activityThreeArray.length-clienteles.length/2,Math.round(clienteleDecider/2));
	
	var activityFourArray = activityThreeArray.slice();
	activityFourArray.splice(activityThreeNumber, 1);
	var activityFourNumber = randFl(activityFourArray.length-clienteles.length/2,Math.round(clienteleDecider/2));
	
	var activityOne = patronActivities[activityOneNumber];
	var activityTwo = activityTwoArray[activityTwoNumber];
	var activityThree = activityThreeArray[activityThreeNumber];
	var activityFour = activityFourArray[activityFourNumber];
		
	var patronsAreDoing = 'They are drinking alone to drown away their troubles';
	
	patronCount = patronCount + (3 * lifestyleDecider);
	
	if (patronCount == 1){
		isOrAre = 'is';
		peopleOrPerson = 'person';
		howMany = 'one';
		thereIsAShadyFigure = false;
	} else if (patronCount < 4){
		howMany = 'a couple';
		patronsAreDoing = 'They are ' + activityOne;
	} else if (patronCount < 6){
		howMany = 'a few';
		patronsAreDoing = 'A couple of them are ' + activityOne;
	} else if (patronCount < 7){
		howMany = 'several';
		patronsAreDoing = 'A few of the patrons are ' + activityOne;
	} else if (patronCount < 10){
		howMany = 'around ten';
		patronsAreDoing = 'Some of them are ' + activityOne;
	} else if (patronCount < 12){
		howMany = 'nearly a dozen';
		patronsAreDoing = 'A couple of the patrons are ' + activityOne + ', while some others are ' + activityTwo;
	} else if (patronCount < 17){
		howMany = 'over a dozen';
		patronsAreDoing = 'Some of the patrons are ' + activityOne + ', others are ' + activityTwo + ', and a couple others are ' + activityThree;
	} else if (patronCount < 24){
		howMany = 'around twenty';
		patronsAreDoing = 'Several patrons are ' + activityOne + '. A few are ' + activityTwo + ', and some others are ' + activityThree;
	} else if (patronCount < 28){
		howMany = 'over two dozen';
		patronsAreDoing = 'A couple are ' + activityOne + ', while several are ' + activityTwo + '. There are also a few ' + activityThree;
	} else if (patronCount < 32){
		howMany = 'around thirty';
		patronsAreDoing = 'One group of patrons is ' + activityOne + '. Another group is ' + activityTwo + ', while a nearby cluster is ' + activityThree + '. There are also several patrons ' + activityFour;
	} else if (patronCount < 38){
		howMany = 'around three dozen';
		patronsAreDoing = 'A small group is ' + activityOne + ', while a few others are ' + activityTwo + '. The gathering nearest the door is ' + activityThree + ', while a group near the bar is ' + activityFour;
	} else if (patronCount < 41){
		howMany = 'around forty';
		patronsAreDoing = 'Several patrons are ' + activityOne + ', others are ' + activityTwo + ', some are ' + activityThree + ', and there are also some ' + activityFour;
	} else {
		howMany = 'over forty';
		patronsAreDoing = 'About a dozen of them are ' + activityOne + '. Another group is ' + activityTwo + '. There are several people ' + activityThree + ', and another small group is ' + activityFour;
	}
	
	if (thereIsAShadyFigure){
		if(itIsLegit){
			if(randFl(10,0) == 0){
				shadyText = shadyLocation + ' there is a human man. He introduces himself as Thor Lightningroot. He is an adventuring cleric who needs help with something (more details to come when @TooFadedGaming gets back to me about winning my secret contest).';
			} else {
				shadyText = shadyLocation + ' there is a' + shadyDescription + ' looking figure. ' + shadyQuest;
			}
		} else {
			shadyText = shadyLocation + ' there is a mannequin/scarecrow/broom that is dressed up to look like the stereotypical "shady figure in a bar" so frequently talked about in tales of taverns. The bartender has a running tally on a nearby chalkboard to record how many people are tricked by it on a daily basis.';
		}
	}
	
	document.getElementById('clienteleHeading').innerHTML = '<h2><button onclick="newClientele()" class="innerBtn"> The Clientele </button></h2>';
	document.getElementById('clienteleDisplay').innerHTML = 'On a typical night, the clientele at <span id="nameDisplay3">' + tavernName + '</span> can be described as ' + clienteleDegree + ' ' + clientele + '. On this occasion, there ' + isOrAre + ' ' + howMany + ' other ' + peopleOrPerson + ' currently in the tavern. ' + patronsAreDoing + '. ' + shadyText + '<br><br>';
}

function newRooms(){
	var roomDegree1 = tenderDegrees[randFl(tenderDegrees.length,0)];
	var roomSizeNumber = randFl(roomSizes.length,0);
	var roomSize = roomSizes[roomSizeNumber];
	var roomDegree2 = tenderDegrees[randFl(tenderDegrees.length,0)];
	var roomHygeineNumber = randFl(roomConditions.length+1-lifestyles.length,lifestyleDecider);
	var roomHygeine = roomConditions[roomHygeineNumber];
	var numberOfRooms = randFl(lifestyleDecider,0) + randFl(3,1);
	var doesRentRooms = randRo(Math.pow(1+lifestyleDecider*2,2),0);
	var roomCostModifier = Math.floor((roomSizeNumber + roomHygeineNumber)/2);
	isOrAre = 'are';
	addedS = 's';
	switch (numberOfRooms){
		case 1:
			numberOfRooms = 'one';
			isOrAre = 'is';
			addedS = '';
			break;
		case 2:
			numberOfRooms = 'two';
			break;
		case 3:
			numberOfRooms = 'three';
			break;
		case 4:
			numberOfRooms = 'four';
			break;
		case 5:
			numberOfRooms = 'five';
			break;
		case 6:
			numberOfRooms = 'six';
			break;
		case 7:
			numberOfRooms = 'seven';
	}
	switch (lifestyleDecider){
		case 0:
			roomCost = randFl(5,1+roomCostModifier);
			break;
		case 1:
			roomCost = randFl(5,5+roomCostModifier);
			break;
		case 2:
			roomCost = randFl(30,10+roomCostModifier*10);
			break;
		case 3:
			roomCost = randFl(50,30+roomCostModifier*10);
			break;
		case 4:
			roomCost = randFl(100,50+roomCostModifier*10);
			break;
		case 5:
			roomCost = randFl(200,200+roomCostModifier*10);
	}
	
	if(secondOwnerDecider == 0){
		if (ownerOneHasSecret > 1){
			secretText = thingsThatGoBumpSingle[ownerOneSecretNumber];
		} else {
			secretText = 'the night passes uneventfully and the party wakes up rested in the morning.';
		}
	} else {
		if (ownerOneHasSecret > 1 && ownerTwoHasSecret > 1){
			secretText = thingsThatGoBumpOneOf[ownerOneSecretNumber] + ' Additionally, ' + thingsThatGoBumpOneOf[ownerTwoSecretNumber];
		} else if (ownerOneHasSecret > 1) {
			secretText = thingsThatGoBumpOneOf[ownerOneSecretNumber];
		} else if (ownerTwoHasSecret > 1){
			secretText = thingsThatGoBumpOneOf[ownerTwoSecretNumber];
		} else {
			secretText = 'nothing happens during the night and the party wakes up after a night\'s rest.'
		}
	}
	document.getElementById('roomsHeading').innerHTML = '<h2><button onclick="newRooms()" class = "innerBtn"> The Accommodations </button></h2>';
	if (doesRentRooms){
		document.getElementById('roomsDisplay').innerHTML = 'The rooms for rent at <span id="nameDisplay4">' + tavernName + '</span> are ' + roomDegree1 + ' ' + roomSize + ' and ' + roomDegree2 + ' ' + roomHygeine + '. There ' + isOrAre + ' currently ' + numberOfRooms + ' room' + addedS + ' available for rent. The cost for a night\'s stay is ' + convertedPrice(roomCost) + '. If the party spends the night in the tavern, ' + secretText + '<br><br>';
	} else {
		document.getElementById('roomsDisplay').innerHTML = '<span id="nameDisplay4">' + tavernName + '</span> is just a bar and doesn\'t have any rooms for rent.<br><br>';
	}
}

function newFoodAndDrink(){
	document.getElementById('foodAndDrinkHeadingArea').innerHTML = '<h2><button onclick="newFoodAndDrink()" class="innerBtn"> The Food & Drink </button></h2>';
	newDrinkList();
	newFoodMenu();
}

function newDrinkList(){	
	document.getElementById('drinksDisplay').style = 'display:inline-block';
	document.getElementById('drinkTitle').innerHTML = '<h2><button onclick="newDrinkList()" class="innerBtn"> Beverages </button></h2>';
	drinkQuality = (lifestyleDecider)*2;
	drinkVariety = lifestyles.length*2;
	wineOfferingCount = randFl(lifestyleDecider/2,4);
	beerOfferingCount = randRo(lifestyleDecider/2,4);
	liquorOfferingVariety = 4 + Math.floor(lifestyleDecider/2);
	liquorOfferingCount = randRo(lifestyleDecider/2,4);
	if(menuIsSet && chosenMenu < 5){
		wineOfferingCount = Math.max(wineOfferingCount + (chosenMenu-2)*2,1);
		beerOfferingCount = Math.max(beerOfferingCount + (chosenMenu-2)*2,1);
		liquorOfferingCount = Math.max(liquorOfferingCount + (chosenMenu-2)*2,1);
	}
	
	switch(gimmickDecider){
		case 2: //cheap booze
			drinkQuality = drinkQuality * .5;
			drinkVariety = drinkVariety * .5;
			liquorOfferingVariety = Math.floor(liquorOfferingVariety/1.5);
			drinkPriceModifier = .3;
			wineOriginModifier = .5;
			break;
		case 10: //quality drinks
			drinkQuality = drinkQuality + 1;
			drinkVariety = drinkVariety + 3;
			drinkPriceModifier = 1.75;
			break;
		case 23: //imported wines
			drinkVariety = drinkVariety - 4;
			drinkPriceModifier = 1.5;
			wineOfferingCount = wineOfferingCount + randFl(4,0);
			break;
		case 25: // extensive drink menu
			drinkVariety = drinkVariety - 3;
			drinkPriceModifier = 1.6;
			liquorOfferingVariety = Math.min(liquorOfferingVariety+1,6);
			wineOfferingCount = wineOfferingCount + randFl(2,2);
			beerOfferingCount = beerOfferingCount + randFl(3,2);
			liquorOfferingCount = liquorOfferingCount + randFl(3,2);
			break;
		case 30: //alcohol fountain
			drinkQuality = drinkQuality * .75;
			drinkVariety = drinkVariety + 5;
			drinkPriceModifier = 1.25;
			wineOfferingCount = wineOfferingCount - randFl(2,0);
			liquorOfferingCount = liquorOfferingCount + randFl(3,0);		
	}
	
	newWines();
	newBeers();
	newLiquors();
}

function newWines(){
	var wineName = '';
	var wineDescription = '';
	var redWine = false;
	var redOrWhite = 'white';
	var wineType = '';
	var wineTypeNumber = 0;
	var flavorOneNumber = 0;
	var flavorOne = 'yucky';
	var flavorTwoArray  = [];
	var flavorTwoNumber = 1;
	var flavorTwo = 'headachey';
	var flavorThreeArray = [];
	var flavorThreeNumber = 0;
	var flavorThree = 'sulfury';
	var wineOriginNumber = 0;
	var winePriceTotal = 0;
	var winePrice = '';
	var glassPriceTotal = 0;
	var glassPrice = '';
	var wineList = [];
	var poisoned = '';
	
	for (var i=0;i<wineOfferingCount;i++){ 
		redWine = randFl(2,0);
		wineTypeNumber = randFl(4,0);
		switch (redWine){
			case 1:
				wineType = redVarieties[wineTypeNumber];
				redOrWhite = 'red';
				break;
			case 0:
				wineType = whiteVarieties[wineTypeNumber];
				redOrWhite = 'white';
		}
		wineOriginNumber = randRo(wineOrigins.length-lifestyles.length/2,Math.round(lifestyleDecider/2));
		if (wineOriginModifier > 0){
			wineOriginNumber = Math.floor(wineOriginNumber * wineOriginModifier);
		}
		
		if (gimmickDecider == 23 && randFl(7,0) > 0){
			wineOriginNumber = 4;
		}
		
		if (wineOriginNumber == 2){
			wineName = 'House';
		} else {
			wineName = prefixes[randFl(prefixes.length,0)] + ' ' + suffixes[randFl(suffixes.length,0)];
		}
		flavorOneNumber = Math.min(randFl(wineDescriptors.length-(drinkVariety),drinkQuality + wineOriginNumber),wineDescriptors.length-1);
		flavorOne = wineDescriptors[flavorOneNumber];
		flavorTwoArray = wineDescriptors.slice();
		flavorTwoArray.splice(flavorOneNumber,1);
		flavorTwoNumber = Math.min(randFl(flavorTwoArray.length-(drinkVariety+wineOrigins.length),drinkQuality + wineOriginNumber),flavorTwoArray.length-1);
		flavorTwo = ' and ' + flavorTwoArray[flavorTwoNumber];
		if(wineOriginNumber+lifestyleDecider+randFl(8,0) > 12){
			flavorThreeArray = flavorTwoArray.slice();
			flavorThreeArray.splice(flavorTwoNumber,1);
			flavorThreeNumber = Math.min(randFl(flavorThreeArray.length-(drinkVariety+wineOrigins.length),drinkQuality + wineOriginNumber),flavorThreeArray.length-1);
			flavorTwo = ', ' + flavorTwoArray[flavorTwoNumber];
			flavorThree = ', and ' + flavorThreeArray[flavorThreeNumber];
		} else{
			flavorThreeNumber = 0;
			flavorThree = '';
		}
		winePriceTotal = drinkPriceModifier * 3 * ((flavorOneNumber + flavorTwoNumber + flavorThreeNumber)/2 + drinkQuality + wineOfferingCount + ((wineOriginNumber+1) * (wineOriginNumber+1) * (wineOriginNumber+1)));
		glassPriceTotal = winePriceTotal/3;
		
		switch (randFl(20,0)){
			case 0:
				poisoned = '<br><div class="s">One bottle of this wine is contaminated with a ' + poisonStrength[randFl(poisonStrength.length,0)] + ' poison that could ' + poisonEffect[randFl(poisonEffect.length,0)] + ' anyone who drinks from it. ' + poisonReason[randFl(poisonReason.length,0)]+'</div>';
				break;
		}
		
		wineDescription = '<p><strong><i>' + wineName + ' ' + wineType + '</strong></i><br> A' + wineOrigins[wineOriginNumber] + ' ' + redOrWhite + ' wine ' + bouquetPhrases[randFl(bouquetPhrases.length,0)] + flavorOne + flavorTwo + flavorThree + '.<br>Bottle price: ' + convertedPrice(winePriceTotal) + '<br>Glass price: ' + convertedPrice(glassPriceTotal) + poisoned + '</p>';
		wineList.splice(wineList.length,1,wineDescription);
		poisoned = '';
	}
	var wineListToString = wineList.join(" ");
	document.getElementById('wineTitle').innerHTML = '<h3><button onclick="newWines()" class="innerBtn"> Wine List </button></h3>';
	document.getElementById('winesDisplay').innerHTML = wineListToString + '<br>';
}

function newBeers(){
	var beerName ='';
	var beerDescription = '';
	var beerOriginNumber = 0;
	var beerTypeNumber = 0;
	var beerType = '';
	var beerFlavorNumber = 0;
	var beerFlavor = 'hoppy';
	var beerHasNote = 0;
	var beerNoteNumber = 0;
	var beerNote = 'delicious';
	var beerFinishNumber = 0;
	var beerFinish = 'wonderful';
	var beerColorNumber = 0;
	var beerColor = 'amber';
	var beerABV = 5.7;
	var beerPriceTotal = 0;
	var beerPrice = '';
	var pintPriceTotal = 0;
	var pintPrice = '';
	var beerList = [];
	
	for (var j=0;j<beerOfferingCount;j++){
		beerTypeNumber = randFl(beerVarieties.length,0);
		beerType = beerVarieties[beerTypeNumber];
		beerTypeCaps = beerVarietiesCapped[beerTypeNumber];
		if (beerType == 'ale') {
			beerType = aleTypes[randFl(aleTypes.length,0)] + 'ale';
		}
		
		beerOriginNumber  = randFl(beerOrigins.length-lifestyles.length/3,Math.round(lifestyleDecider/3));
		if (beerOriginNumber == 1){
			beerName = 'House';
		} else {
			beerName = prefixes[randFl(prefixes.length,0)] + ' ' + suffixes[randFl(suffixes.length,0)];
		}
		beerColorNumber = randFl(7,beerTypeNumber);
		beerColor = beerColors[beerColorNumber];
		beerFlavorNumber = randFl(beerDescriptors.length+1-beerOrigins.length,beerOriginNumber);
		beerFlavor = beerDescriptors[beerFlavorNumber];
		beerNoteNumber = randFl(beerNotes.length,0);
		if (beerHasNote == 0 || beerType == 'cider'){
			beerNote = '';
		} else {
			beerNote = beerNoteText[randFl(beerNoteText.length,0)] + beerNotes[beerNoteNumber];
		}
		beerFinishNumber = randFl(beerFinishes.length,0);
		beerFinish = beerFinishes[beerFinishNumber];
		beerHasNote = randFl(2,0);
		beerABV = Math.round(((drinkQuality + beerTypeNumber/2 + beerOriginNumber + beerColorNumber/2 + randFl(3,11))/5.5 + beerOriginNumber/2) * 100)/100;
		beerPriceTotal = drinkPriceModifier * 2 * ((beerFlavorNumber + (4*beerHasNote*((beerNoteNumber+1)/4)) + beerFinishNumber)/(2+beerHasNote/2) + drinkQuality + beerOfferingCount + beerOriginNumber + beerABV);
		pintPriceTotal = beerPriceTotal/5;
		
		beerDescription = '<p><strong><i>' + beerName + ' ' + beerTypeCaps + '</strong></i><br>' +beerABV + '% ABV<br>A' + beerOrigins[beerOriginNumber] + ' ' + beerColor + ' ' + beerType + '. Described as a' + beerFlavor + ' ' + beerType + ' with '+ beerNote + ' a ' + beerFinish + ' finish.<br>Gallon price: ' + convertedPrice(beerPriceTotal) + '<br>Pint price: ' + convertedPrice(pintPriceTotal) + '</p>';
		beerList.splice(beerList.length,1,beerDescription);
	}
	
	var beerListToString = beerList.join(" ");
	document.getElementById('beerTitle').innerHTML = '<h3><button onclick="newBeers()" class="innerBtn"> Lagers & Ales </button></h3>';
	document.getElementById('beersDisplay').innerHTML = beerListToString + '<br>';
}

function newLiquors(){
	var liquorName ='';
	var liquorDescription = '';
	var liquorSourceNumber = 0;
	var liquorSource = '';
	var liquorOriginNumber = 0;
	var liquorTypeNumber = 0;
	var liquorType = '';
	var liquorTypeCaps = '';
	var liquorPriceTotal = 0;
	var liquorPrice = '';
	var shotPriceTotal = 0;
	var shotPrice = '';
	var liquorList = [];
	
	for (var k=0;k<liquorOfferingCount;k++){
		liquorTypeNumber = randFl(liquorOfferingVariety,0);
		liquorType = liquorTypes[liquorTypeNumber];
		liquorTypeCaps = liquorTypesCapped[liquorTypeNumber];
		switch (liquorType){
			case 'vodka':
				liquorSourceNumber = randFl(8,1);
				liquorSource = liquorSources[liquorSourceNumber];
				break;
			case 'whiskey':
				liquorSourceNumber = randFl(4,0);
				liquorSource = liquorSources[liquorSourceNumber];
				break;
			case 'gin':
				liquorSource = '';
				break;
			case 'rum':
				liquorSourceNumber = randFl(3,8);
				liquorSource = liquorSources[liquorSourceNumber];
				break;
			case 'brandy':
				liquorSourceNumber = randFl(brandyTypes.length,0);
				liquorSource = brandyTypes[liquorSourceNumber];
				break;
			case 'vermouth':
				if (Math.round(Math.random()) == 1){
					liquorSource = 'dry';
				} else {
					liquorSource = 'sweet';
				}
				
		}
		liquorType = liquorSource + ' ' + liquorType;
		liquorOriginNumber  = randFl(liquorOrigins.length-lifestyles.length/3,Math.round(lifestyleDecider/3));
		if (liquorOriginNumber == 2){
			liquorName = 'House';
		} else {
			liquorName = prefixes[randFl(prefixes.length,0)] + ' ' + suffixes[randFl(suffixes.length,0)];
		}
		liquorPriceTotal = drinkPriceModifier * (Math.pow(liquorOriginNumber+2,3) + Math.pow(lifestyleDecider+1,3) + Math.pow(drinkQuality,2) + liquorTypeNumber*3 + liquorOfferingVariety*3);
		shotPriceTotal = liquorPriceTotal/6;
		
		liquorDescription = '<p><strong><i>' + liquorName + ' ' + liquorTypeCaps + '</strong></i><br> A' + liquorOrigins[liquorOriginNumber] + ' ' + liquorType + '.<br>Bottle price: ' + convertedPrice(liquorPriceTotal) + '<br>Shot price: ' + convertedPrice(shotPriceTotal) + '</p>';
		liquorList.splice(liquorList.length,1,liquorDescription);
	}
	
	var liquorListToString = liquorList.join(" ");
	document.getElementById('liquorTitle').innerHTML = '<h3><button onclick="newLiquors()" class="innerBtn"> Liquors </button></h3>';
	document.getElementById('liquorsDisplay').innerHTML = liquorListToString;
}

function newFoodMenu(){
	document.getElementById('foodDisplay').style = 'display:inline-block';
	document.getElementById('foodTitle').innerHTML = '<h2><button onclick="newFoodMenu()" class="innerBtn"> Food Menu </button></h2>';
	eatingChallenge = 0;
	foodPriceModifier = 1;
	foodQuality = 0;
	foodQuantity = Math.floor(lifestyleDecider/2);
	starterOfferingCount = randRo(lifestyleDecider/2,3);
	soupOfferingCount = randRo(lifestyleDecider/2,1);
	saladOfferingCount = randRo(lifestyleDecider/2,1);
	entreeOfferingCount = randRo(lifestyleDecider/2,4);
	if(menuIsSet && chosenMenu < 5){
		starterOfferingCount = Math.max(starterOfferingCount + (chosenMenu-2)*2,1);
		saladOfferingCount = Math.max(saladOfferingCount + (chosenMenu-2)*2,1);
		soupOfferingCount = Math.max(soupOfferingCount + (chosenMenu-2)*2,1);
		entreeOfferingCount = Math.max(entreeOfferingCount + (chosenMenu-2)*2,1);
	}
	
	switch(gimmickDecider){
		case 6:
			foodQuality++;
			break;
		case 8:
			foodPriceModifier = .2;
			break;
		case 9:
			foodPriceModifier = .8;
			foodQuantity++;
			break;
		case 18:
			foodQuantity++;
			foodQuantity++;
			eatingChallenge = 1;
			break;
		case 28:
			foodQuality++;
			foodPriceModifier = 2;
	}
	
	newStarters();
	newSoupsAndSalads();
	newEntrees();
	
	document.getElementById('disclaimer').innerHTML = '<br><br>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may require a Constitution saving throw.';
	
	allRan = 1;
}

function newStarters(){
	document.getElementById('starterTitle').innerHTML = '<h3><button onclick="newStarters()" class="innerBtn"> Starters </button></h3>';
	var coldThings = ['Cheese Platter','Bread Bowl','Jerky Strips']
	var stuffedThings = ['potato skins','green peppers','red peppers','baby artichokes','lettuce bowls']
	var stuffedThingsCapped = ['Potato Skins','Green Peppers','Red Peppers','Baby Artichokes','Lettuce Bowls']
	var stuffWords = ['filled','stuffed','crammed','packed','loaded','jam-packed','overloaded','bursting','overflowing']
	var stuffWordsCapped = ['Filled','Stuffed','Crammed','Packed','Loaded','Jam-Packed','Overloaded','Bursting','Overflowing']
	var blendWords = ['mash','mix','blend','concoction','mixture','fusion','medley','mingling','mélange']
	var stuffings = ['cheese','potato','meat','herbs','spices','cream cheese','sour cream','onion','bacon','garlic']
	var breadFreshnesses = ['stale','day-old','fresh','freshly-baked','fresh-from-the-oven']
	var breadTypes = ['white','whole wheat','seven-grain','artisinal','specialty','herb and cheese']
	var oilTypes = [' melted butter','olive oil','pesto sauce','herb-infused oil','garlic in olive oil']
	var jerkyMeats = ['rabbit','chicken','turkey','beef','venison']
	var cheeses = ['cheddar','mozzerella','muenster','gruyère','brie','gorgonzola','blue']
	var friedThingsCapped = ['Potato Wedges','Sweet Potato Wedges','Onion Rings','Chicken Strips','Slices of Red Beet','Beef Strips']
	var friedThings = ['Potato wedges','Sweet potato wedges','Onion rings','Chicken strips','Slices of red beets','Beef strips']
	var friedThingOils = ['cottonseed oil','sunflower oil','lard','butter','vegetable oil','peanut oil','olive oil']
	var friedThingsSauces =['tomato-based sauce','spicy red sauce','honey-based sauce','mustard sauce','creamy sauce']
	var starterTypeNumber = 0;
	var starterType = '';
	var starterColdNumber = 0;
	var starterName = '';
	var stuffedThingNumber = 0;
	var stuffedThing = '';
	var stuffedThingCapped = '';
	var stuffWordNumber = 0;
	var stuffingOneNumber = 0;
	var stuffingOne = '';
	var stuffingTwoArray = [];
	var stuffingTwoNumber = 0;
	var stuffingTwo = '';
	var stuffingThreeArray = [];
	var stuffingThreeNumber = 0;
	var stuffingThree = '';
	var friedThingNumber = 0;
	var starterDescription = '';
	var starterList = [];
	var starterPriceTotal = 0;
	var starterPriceModifier = 0;
	var starterText = '';
	var coldCount = 0;
	var friedCount = 0;
	var stuffedCount = 0;
	
	for(var n=0;n<starterOfferingCount;n++){
		starterType = randFl(3,0);
		if(starterType == 0 && coldCount < coldThings.length){
			starterColdNumber = randFl(coldThings.length,0);
			starterName = coldThings[starterColdNumber];
			starterPriceModifier = .5;
			if(starterName == 'Bread Bowl'){
				starterDescription = 'A bowl of ' + breadFreshnesses[randFl(3,Math.floor(lifestyleDecider/2))] + ' ' + breadTypes[randFl(Math.max(2,lifestyleDecider+1),0)] + ' bread. Served with ' + oilTypes[randFl(Math.max(2,lifestyleDecider),0)] + ' for dipping.';
			} else if(starterName == 'Cheese Platter'){
				starterDescription = 'A plate of ' + cheeses[randFl(lifestyleDecider+2,0)] + ' cheese with crackers.';
			} else if(starterName == 'Jerky Strips'){
				starterDescription = 'A basket of several strips of ' + jerkyMeats[randFl(2+Math.round(lifestyleDecider/2),0)] + ' jerky.';
			}
			coldThings.splice(starterColdNumber,1);
			coldCount++;
		} else if ((starterType == 1 && friedCount < friedThings.length) || (stuffedCount >= stuffedThings.length)){
			friedThingNumber = randFl(Math.min(1+lifestyleDecider,friedThings.length),0);
			starterName = 'Deep-Fried ' + friedThingsCapped[friedThingNumber];
			starterPriceModifier = 1;
			starterDescription = friedThings[friedThingNumber] + ' fried in ' + friedThingOils[randFl(lifestyleDecider+2,0)] + '. Served with a ' + friedThingsSauces[randFl(friedThingsSauces.length,0)] + '.';
			friedThings.splice(friedThingNumber,1);
			friedThingsCapped.splice(friedThingNumber,1);
			friedCount++;
		} else if ((stuffedCount < friedCount) || (starterType == 2 && stuffedCount < stuffedThings.length)){
			stuffWordNumber = randFl(4+lifestyleDecider,0);
			stuffedThingNumber = randFl(Math.min(stuffedThings.length,2+lifestyleDecider),0);
			starterPriceModifier = 1.2;
			starterName = stuffWordsCapped[stuffWordNumber] + ' ' + stuffedThingsCapped[stuffedThingNumber];
			stuffingOneNumber = randFl(stuffings.length,0);
			stuffingOne = stuffings[stuffingOneNumber];
			stuffingTwoArray = stuffings.slice();
			stuffingTwoArray.splice(stuffingOneNumber,1);
			stuffingTwoNumber = randFl(stuffingTwoArray.length,0);
			stuffingTwo = ' and ' + stuffingTwoArray[stuffingTwoNumber];
			if(randFl(6-lifestyleDecider,0) == 0){
				stuffingThreeArray = stuffingTwoArray.slice();
				stuffingThreeArray.splice(stuffingTwoNumber,1);
				stuffingThreeNumber = randFl(stuffingThreeArray.length,0);
				stuffingTwo = ', ' + stuffingTwoArray[stuffingTwoNumber];
				stuffingThree = ', and ' + stuffingThreeArray[stuffingThreeNumber];
			} else {
				stuffingThree = '';
			}
			starterDescription = 'A platter of ' + stuffedThings[stuffedThingNumber] + ' ' + stuffWords[stuffWordNumber] + ' with a ' + blendWords[randFl(4,lifestyleDecider)] + ' of ' + stuffingOne + stuffingTwo + stuffingThree + '.';
			stuffedThings.splice(stuffedThingNumber,1);
			stuffedThingsCapped.splice(stuffedThingNumber,1);
			stuffedCount++;
		}
		starterPriceTotal = foodPriceModifier * starterPriceModifier * (foodQuality * foodQuantity + Math.pow(.75*lifestyleDecider+1,3) + randFl(lifestyleDecider*5,1));
		starterText = '<p><strong><i>' + starterName + '</strong></i><br>' + starterDescription+ '<br>' + convertedPrice(starterPriceTotal) + '</p>'
		starterList.splice(starterList.length,1,starterText);
	}
	var starterListToString = starterList.join(" ");
	document.getElementById('startersDisplay').innerHTML = starterListToString + '<br>';
}

function newSoupsAndSalads(){
	document.getElementById('saladTitle').innerHTML = '<h3><button onclick="newSoupsAndSalads()" class="innerBtn"> Soups & Salads </button></h3>';
	soupAndSaladList =[];
	newSoups();
	newSalads();
	var soupAndSaladListToString = soupAndSaladList.join(" ");
	document.getElementById('saladsDisplay').innerHTML = soupAndSaladListToString + '<br>';
}

function newSoups(){
	var soupName = '';
	var soupNameCapped = '';
	var soupDescription = '';
	var soupTypeNumber = 0;
	var soupType = '';
	var soupTypeCapped = '';
	var soupMeatNumber = 0;
	var soupMeat = '';
	var soupMeatCapped = '';
	var soupCut = '';
	var creamSoupNumber = '';
	var creamSoup = '';
	var creamSoupCapped = '';
	var brothTypeNumber = 0;
	var brothType = '';
	var soupStarchNumber = 0;
	var soupStarch = '';
	var soupVeggieOneNumber = 0;
	var soupVeggieOne = '';
	var soupVeggieTwoArray = [];
	var soupVeggieTwoNumber = 0;
	var soupVeggieTwo = '';
	var soupVeggieThreeArray = [];
	var soupVeggieThreeNumber = 0;
	var soupVeggieThree = '';
	var creamOrNotThing = '';
	var soupPriceTotal = 0;
	var soupCutAndMeat = '';
	
	for (var l=0;l<soupOfferingCount;l++){
		soupTypeNumber = randFl(soupTypes.length-(2-Math.ceil(lifestyleDecider/3)),0);
		soupType = soupTypes[soupTypeNumber];
		soupTypeCapped = soupTypesCapped[soupTypeNumber];
		brothTypeNumber = randFl(brothTypes.length-5,lifestyleDecider);
		brothType = brothTypes[brothTypeNumber];
		soupMeat = '';
		soupCut = '';
		if(soupTypeNumber == 3){
			creamSoupNumber = randFl(creamSoups.length,0);
			creamSoup = creamSoups[creamSoupNumber];
			creamSoupCapped = creamSoupsCapped[creamSoupNumber];
			soupNameCapped = 'Cream of ' + creamSoupCapped;
			soupName = 'cream of ' + creamSoup + ' soup';
			creamOrNotThing = '';
		} else {
			soupMeatNumber = randFl(soupMeats.length-5,lifestyleDecider);
			soupMeat = soupMeats[soupMeatNumber];
			soupMeatCapped = soupMeatsCapped[soupMeatNumber];
			soupNameCapped = soupMeatCapped + ' ' + soupTypeCapped;
			soupName = soupType;
			soupCut = soupCuts[randFl(soupCuts.length,0)];
			if(soupMeat == 'scallops'){
				soupCut = '';
			}
			creamOrNotThing = ' and ';
		}
		soupStarchNumber = randFl(soupStarches.length,0);
		soupVeggieOne = '';
		soupVeggieTwo = '';
		soupVeggieThree = '';
		if(lifestyleDecider>1){
			if(soupTypeNumber<3){
				creamOrNotThing = ', ';
				soupVeggieOne = ', and ' + soupVeggies[soupVeggieOneNumber];
			} else {
				soupVeggieOne = ' and ' + soupVeggies[soupVeggieOneNumber];
			}
			soupVeggieOneNumber = randFl(soupVeggies.length,0);
			soupVeggieTwoArray = soupVeggies.slice();
			soupVeggieTwoArray.splice(soupVeggieOneNumber,1);
			if (randFl(7-lifestyleDecider,0) == 0){
				soupVeggieTwoNumber = randFl(soupVeggieTwoArray.length,0);
				soupVeggieOne = ', ' + soupVeggies[soupVeggieOneNumber];
				soupVeggieTwo = ', and ' + soupVeggieTwoArray[soupVeggieTwoNumber];
				soupVeggieThreeArray = soupVeggieTwoArray.slice();
				soupVeggieThreeArray.splice(soupVeggieTwoNumber,1);
				if(randFl(6-lifestyleDecider,0) == 0){
					soupVeggieThreeNumber = randFl(soupVeggieThreeArray.length,0);
					soupVeggieTwo = ', ' + soupVeggieTwoArray[soupVeggieTwoNumber];
					soupVeggieThree = ', and ' + soupVeggieThreeArray[soupVeggieThreeNumber];
				}
			}
		}
		soupPriceTotal = foodPriceModifier * .5 * (foodQuality * foodQuantity + Math.pow(soupMeatNumber/6+1,2) + Math.pow(brothTypeNumber/6+1,2) + Math.pow(lifestyleDecider+1,3));
		soupStarch = creamOrNotThing + soupStarches[soupStarchNumber];
		
		if(soupCut == ' meatballs'){
			if(soupMeat == 'meat'){
				soupCutAndMeat = 'unidentifiable' + soupCut;
			} else {
				soupCutAndMeat = soupMeat + soupCut;
			}			
		} else {
			soupCutAndMeat = soupCut + soupMeat;
		}
		
		soupDescription = '<p><strong><i>' + soupNameCapped + '</strong></i><br>A ' + brothType + ' ' + soupName + ' with ' + soupCutAndMeat + soupStarch + soupVeggieOne + soupVeggieTwo + soupVeggieThree + '.<br>' + convertedPrice(soupPriceTotal) + '</p>'
		soupAndSaladList.splice(soupAndSaladList.length,1,soupDescription);
	}
}

function newSalads(){
	var saladBases = ['iceberg','romaine','red lettuce','mixed greens','baby spinach leaves']
	var saladBasesCapped = ['Iceberg','Romaine','Red Lettuce','Mixed Greens','Baby Spinach']
	var saladVeggies = ['green peppers','carrots','onions','cucumbers','radishes','celery','red peppers','baby artichokes','tomatoes','olives','arugula','mustard greens','baby kale']
	var saladToppingsMeats = ['rabbit','chicken','ham','turkey','steak']
	var saladToppingsMeatsCapped = ['Rabbit and ','Chicken and ','Ham and ','Turkey and ','Steak and ']
	var saladToppingsOther = ['grated cheese','slivered almonds','cranberries','sliced orange']
	var saladToppingMethods = ['grilled ','roasted ','blackened ','braised ','marinated ']
	var saladToppingMethodsCapped = ['Grilled','Roasted','Blackened','Braised','Marinated']
	var dressingFirstIngredients = [' lemon',' balsamic',' cider vinegar','n orange']
	var dressingSecondIngredients = [' honey',' garlic',' ginger',' and black pepper',' herb']
	var saladBaseNumber = 0;
	var saladBase = '';
	var saladBaseCapped = '';
	var saladVeggieOneNumber = 0;
	var saladVeggieOne = '';
	var saladVeggieTwoArray = [];
	var saladVeggieTwoNumber = 0;
	var saladVeggieTwo = '';
	var saladVeggieThreeArray = [];
	var saladVeggieThreeNumber = 0;
	var saladVeggieThree = '';
	var saladVeggieFourArray = [];
	var saladVeggieFourNumber = 0;
	var saladVeggieFour = '';
	var saladToppingMethodNumber = 0;
	var saladToppingMethod = '';
	var saladToppingMethodCapped = '';
	var saladToppingMeatNumber = 0;
	var saladToppingMeat = '';
	var saladToppingMeatCapped = '';
	var saladToppingOther = '';
	var dressingFirstIngredient = '';
	var dressingSecondIngredient = '';
	var saladName = '';
	var saladDressing = '';
	var saladDescription = '';
	var saladPriceTotal = 0;
	var saladPrice = '';
	
	for(var m=0;m<saladOfferingCount;m++){
		saladBaseNumber = randFl(Math.max(2,lifestyleDecider),0);
		saladBase = saladBases[saladBaseNumber];
		saladBaseCapped = saladBasesCapped[saladBaseNumber];
		if(randFl(Math.max(2,lifestyleDecider),0) > 0){
			saladToppingMethodNumber = randFl(Math.max(2,lifestyleDecider),0);
			saladToppingMeatNumber = randFl(Math.max(2,lifestyleDecider),0);
			saladToppingMethod = '. Topped with ' + saladToppingMethods[saladToppingMethodNumber];
			saladToppingMethodCapped = saladToppingMethodsCapped[saladToppingMethodNumber];
			saladToppingMeat = saladToppingsMeats[saladToppingMeatNumber];
			saladToppingMeatCapped = saladToppingsMeatsCapped[saladToppingMeatNumber];
			if(randFl(Math.max(3,lifestyleDecider),0) > 1){
				saladToppingOther = ' and ' + saladToppingsOther[randFl(saladToppingsOther.length,0)];
			} else {
				saladToppingOther = '';
			}
		} else {
			saladToppingMethod = '';
			saladToppingMethodCapped = '';
			saladToppingMeat = '';
			saladToppingMeatNumber = 0;
			saladToppingMeatCapped = '';
			if(randFl(Math.max(3,lifestyleDecider),0) > 1){
				saladToppingOther = '. Topped with ' + saladToppingsOther[randFl(saladToppingsOther.length,0)];
			} else {
				saladToppingOther = '';
			}
		}
		saladName = saladToppingMethodCapped + ' ' + saladToppingMeatCapped + ' ' + saladBaseCapped + ' Salad';
		saladVeggieOne = '';
		saladVeggieTwo = '';
		saladVeggieThree = '';
		saladVeggieFour = '';
		saladVeggieOneNumber = randFl(saladVeggies.length,0);
		saladVeggieOne = saladVeggies[saladVeggieOneNumber];
		if(randFl(7-lifestyleDecider,0) == 0)		{
			saladDressing = ' coated in a' + dressingFirstIngredients[randFl(dressingFirstIngredients.length,0)];
			if(randFl(7-lifestyleDecider,0) == 0){
				saladDressing = saladDressing + dressingSecondIngredients[randFl(dressingSecondIngredients.length,0)];
			}
			saladDressing = saladDressing + ' dressing and '
		}
		if (5-lifestyleDecider == 0 || randFl(7-lifestyleDecider,0) == 0){
			saladVeggieTwoArray = saladVeggies.slice();
			saladVeggieTwoArray.splice(saladVeggieOneNumber,1);
			saladVeggieTwoNumber = randFl(saladVeggieTwoArray.length,0);
			saladVeggieTwo = ' and ' + saladVeggieTwoArray[saladVeggieTwoNumber];
			if(randFl(6-lifestyleDecider,0) == 0){
				saladVeggieThreeArray = saladVeggieTwoArray.slice();
				saladVeggieThreeArray.splice(saladVeggieTwoNumber,1);
				saladVeggieThreeNumber = randFl(saladVeggieThreeArray.length,0);
				saladVeggieTwo = ', ' + saladVeggieTwoArray[saladVeggieTwoNumber];
				saladVeggieThree = ', and ' + saladVeggieThreeArray[saladVeggieThreeNumber];
				if(randFl(7-lifestyleDecider,0) == 0){
					saladVeggieFourArray = saladVeggieThreeArray.slice();
					saladVeggieFourArray.splice(saladVeggieThreeNumber,1);
					saladVeggieFourNumber = randFl(saladVeggieFourArray.length,0);
					saladVeggieThree = ', ' + saladVeggieThreeArray[saladVeggieThreeNumber];
					saladVeggieFour = ', and ' + saladVeggieFourArray[saladVeggieFourNumber];
				}
			}
		}
		saladPriceTotal = foodPriceModifier * .5 * (foodQuality * foodQuantity + Math.pow(saladToppingMeatNumber/6+1,2) + Math.pow(saladBaseNumber/4+2,2) + Math.pow(lifestyleDecider+1,3));
		saladDescription = '<p><strong><i>' + saladName + '</strong></i><br>Leaves of ' + saladBase + saladDressing + ' tossed with ' + saladVeggieOne + saladVeggieTwo + saladVeggieThree + saladVeggieFour + saladToppingMethod + saladToppingMeat + saladToppingOther + '.<br>' + convertedPrice(saladPriceTotal) + '</p>'
		soupAndSaladList.splice(soupAndSaladList.length,1,saladDescription);
	}
	
}

function newEntrees(){
	var cookingMethods = ['Stewed','Baked','Deep-fried','Roasted','Grilled','Blackened','Rotisserie-cooked','Pan-fried','Herb-crusted','Braised','Pan-seared','Stir-fried']
	var meatStyles = [' bits of ',' chunks of ',' cubes of ',' slices of ',' strips of ',' ',' ',' ',' ']
	var meatOptions = ['mystery meat','sausage','rabbit','chicken','fish','pork','lamb','turkey','beef','frog','venison','steak','duck','veal','squab','pheasant','quail']
	var meatOptionsCapped = ['Mystery Meat','Sausage','Rabbit','Chicken','Fish','Pork','Lamb','Turkey','Beef','Frog','Venison','Steak','Duck','Veal','Squab','Pheasant','Quail']
	var meatIssues = ['The meat in this dish has gone off and could sicken the eater.','The meat in this dish is undercooked to the point of being dangerous to consume.','The meat in this dish is overcooked to the point of being nearly inedible.','The meat in this dish is starting to go bad, but <strong>should</strong> be safe for consumption.']
	var sauces = [' in a thick gravy',' in a cream sauce',' in white sauce',' in red sauce',' with a ginger marinade',' in garlic sauce',' in a vodka sauce']
	var presentationStyles = [' served over ',' on a bed of ',' served with ',' alongside ']
	var piledEtc = [' slathered',' piled',' crammed',' thrown',' sitting',' ']
	var starches = ['bread','mashed potatoes','rice','noodles','pasta','quinoa']
	var nextStyles = [' with a serving of ',' and a helping of ',' with a side of ',' and ']
	var veggies = ['brussel sprouts','collard greens','cabbage','stewed onions','cooked greens','green peppers','peas','turnips','leeks','celery','mushrooms','black beans','beets','kale','red beans','spinach','broccoli','beet greens','radishes','green beans','caramelized onions','carrots','chard','artichoke','red peppers','asparagus','cauliflower']
	var cookingMethodNumber = 0;
	var cookingMethod = '';
	var meatStyle = '';
	var meatOptionNumber = 0;
	var meatOption = '';
	var meatOptionCapped = '';
	var sauce = '';
	var presentationStyle = '';
	var starch = '';
	var nextStyle = '';
	var veggie = '';
	var veggieTwoArray = [];
	var secondVeggie = '';
	var entreePriceTotal = 0;
	var entreePrice = '';
	var entreeDescription = '';
	var entreeList = [];
	var meatGoneOff = 1;
	var meatIssue = '';
	
	switch(gimmickDecider){
		case 18:
			eatingChallenge = 1;
			break;
	}
	for (var k=0;k<entreeOfferingCount;k++){
		meatGoneOff = randFl(2*lifestyleDecider+2,foodQuality);
		cookingMethodNumber = randFl(cookingMethods.length-5,Math.min(lifestyleDecider + foodQuality, 5));
		cookingMethod = cookingMethods[cookingMethodNumber];
		meatStyle = meatStyles[randFl(meatStyles.length,0)];
		meatOptionNumber = randFl(lifestyleDecider+meatOptions.length-8,0) + Math.floor(Math.min(Math.floor(lifestyleDecider/2) + foodQuality, 2));
		meatOption = meatOptions[meatOptionNumber];
		meatOptionCapped = meatOptionsCapped[meatOptionNumber];
		presentationStyle = presentationStyles[randFl(presentationStyles.length,0)];
		starch = starches[randFl(starches.length,0)];
		secondVeggie = '';
		if(lifestyleDecider>1){
			sauce = sauces[randFl(sauces.length,0)];
			nextStyle = nextStyles[randFl(nextStyles.length,0)];
			veggieNumber = randFl(veggies.length,0);
			veggie = veggies[veggieNumber];
			veggieTwoArray = veggies.slice();
			veggieTwoArray.splice(veggieNumber,1);
			if (randFl(7-lifestyleDecider,0) == 0 || eatingChallenge){
				secondVeggie = ' and ' + veggieTwoArray[randFl(veggieTwoArray.length,0)];
			}
		}
		entreePriceTotal = foodPriceModifier * (Math.pow(lifestyleDecider+1,3) + Math.pow(cookingMethodNumber/10+1,2) + Math.pow(meatOptionNumber/10+1,2) + 10 * foodQuality * foodQuantity);
		switch (meatGoneOff){
			case 0:
				meatIssue = '<br><div class="s">' + meatIssues[randFl(meatIssues.length,0)] + '</div>';
				break;
		}
		if (eatingChallenge){
			entreePriceTotal = entreePriceTotal * 2
			entreeDescription = '<p><strong><i> The ' + cookingMethod + ' ' + meatOptionCapped + ' Challenge</strong></i><br> A full pound of ' + meatOption + sauce + piledEtc[randFl(piledEtc.length,0)] + ' on top of another pound of ' + starch + nextStyle + veggie + secondVeggie + '.<br>' + convertedPrice(entreePriceTotal) + meatIssue + '</p>';
			eatingChallenge = 0;
		} else {
			entreeDescription = '<p><strong><i>' + cookingMethod + ' ' + meatOptionCapped + '</strong></i><br>' + cookingMethod + meatStyle + meatOption + sauce + presentationStyle + starch + nextStyle + veggie + secondVeggie + '.<br>' + convertedPrice(entreePriceTotal) + meatIssue + '</p>';
		}
		entreeList.splice(entreeList.length,1,entreeDescription);
		meatIssue = '';
	}
	
	var entreeListToString = entreeList.join(" ")
	document.getElementById('entreeTitle').innerHTML = '<h3><button onclick="newEntrees()" class="innerBtn"> Entrees </button></h3>';
	document.getElementById('entreesDisplay').innerHTML = entreeListToString;
}