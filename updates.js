var updates = [
'<p>2.26.2018 - Updated the updates page to look nicer, now it\'s not a wall of text and you can navigate through the updates. Might add another option to view all, but whatever for now. I doubt anyone is looking at these anyway. First person to prove me wrong and mention this in a tweet @me gets a cameo appearance for one of their characters in the generator somewhere. Also added a lot of backend stuff and fixed up some formulas. Added interconnectedness between the accommodations and the owner secrets, but you have to regenerate the accommodations manually if you regenerate the tavern\'s tale on its own. Might code in a way to do it automatically eventually, but for now I\'m fine with it as is. Also added the possibility for meat to have gone off or be improperly cooked. A few other minors things too. Cleaned up the restrictive buttons a bit, added the scroll back to top on a full regeneration, added a few more name possibilities, probably other stuff too.</p>',
'<p>2.25.2018 again - Added some radio buttons so you can restrict a few of the options. If you\'re on the prowl for a raucous dive bar, you\'ll have much better luck finding one!</p>',
'<p>2.25.2018 - Added the Hard Drinks and Entrees. Hard Drinks still need a bit more work to make them final, but they\'re there for now. Pretty happy with how the entrees turned out though. And thankfully I didn\'t lose everything I did today when my editor crashed and came back with a blank .js file. I think I must have tried to save at the same time the GitHub app was doing a fetch and it ended up wiping the file. So thankfully I had it open in chrome and was able to dig it out of the cache. Was rather anxiety-inducing when I thought I lost everything I did today and I was about to just say F it to having menus at all since I didn\'t want to have to do it all over. But yeah, they\'re in, it was recovered. We\'re good. Oh, and I added a chance for the wine to be poisoned. I\'ll probably add some things like that to the food stuffs as well, but for now, it\'s just the wine. I did add an eating challenge that will come up if that\'s the tavern\'s draw as well.</p>',
'<p>2.24.3018 - Had a chance to do a few things today. Played with the ABV formula, the Lagers and Ales should be much more believably potent for the technology level of most fantasy settings. Changed some style things, should be a little more friendly on phones now. Fixed things with the printing/saving process a bit. It still says it times out, but at least now it\'s not trying to print buttons and it includes all the sections now (I had missed including the accommodations section when I added it). And because I couldn\'t stand having it on the site without being at least somewhat usable, I started working on the Traveler Generator. It provides a very random, very brief physical description now. It\'ll be much more in-depth eventually, but at least it\'s there now. And I had a little more time, so I added prices for wine by the glass and beer by the pint too.</p>',
'<p>2.23.2018 - Apparently I lied yesterday, I got a chance to work on it for a couple hours today. So I removed the buttons from the bottom, now you can click on the headings of each section to regenerate the section instead of having to scroll down to the bottom. Did some other minor things too, but it was mostly the reworking of the buttons.</p>',
'<p>2.22.2018 - Futzed with a bunch of formulas to make some relationships work better. Still need to revise some of them, I think some variables aren\'t showing up currently. Some of my math is off. I\'ll fix it soon<sup>TM</sup>. But I got the Lagers & Ales in. Mostly happy with how they\'re working, think I need to revise a few of the formulas, but I\'m not coming up with any that are too unbelievable. I\'m sure a beer snob would say otherwise, but I think it\'s good enough for now. I want to get to the food! I have so many ideas. Oh, right, and I added the ability to export a plain text pdf for any tavern you like. And I sort of fixed the renaming, but I lost the eponymous alcohols. Worth the trade-off I think. Probably won\'t get another chance to really work on things until Sunday. And I really need to learn how to make these multiple pages or something. I\'m going to make this page too long.</p>',
'<p>2.21.2018 - Didn\'t get to do much today, just fixed a few things with the wine list and changed the formula for determining the prices, still think it\'s not quite right, but it\'s close enough for now.</p>',
'<p>2.20.2018 - Started working on the drinks. Did a lot of work on the backend so that several aspects are now based on the quality of the tavern. Wines are <i>mostly</i> done, still need to do the beers and hard alcohols. Then I\'ll move onto the foodstuffs, and then work on other details that will get added back in to the other sections.</p>',
'<p>2.19.2018 - Worked a lot on the Tavern Generator. It now generates bartenders and clientele, including patron activities and a few adventure hooks. Also broke up the functions to make it easier and then that allowed me to add individual buttons to allow for rerolling just parts of the tavern. It\'s coming along pretty well.</p>',
'<p>2.18.2018 - Worked more on the Tavern Generator. Added more possibilities and changed how a few things were being figured out. Should be even easier to add new things in the future now. Also, I should really set this update page up like a wordpress thing so it doesn\'t eventually become just one huge long page of updates...</p>',
'<p>2.17.2018 - Worked a bit on the Tavern Generator, mostly cleaning up the formulas to make things easier in the future. Added automated math to show how many possibilities there are. Also added more possibilities.</p>',
'<p>2.14.18 - Added an actual adventures page instead of just linking to my DM\'s Guild author page. Still need to make it actually work properly, right now it\'s wonky, but hey, I\'m reteaching myself HTML after not really doing much with it for a long time.</p>',
'<p>2.13.18 - The alpha version of the website is up with a very sparse tavern generator included. <a href="bit.ly/OS-LoveBites">Love Bites</a> has over 200 downloads and is still pay-what-you-want for Valentine\'s Day. Pick it up and surprise your significant other with an adventure of love! The traveler generator will be along soon<sup>TM</sup>. Dirge\'s D&D Dollar Dreadfuls, a series of loosely connected short adventures, is in production and the first one will be out in the Spring. Several other projects are on the backburner; more details will get pushed out about those once everything solidifies a bit more.</p>'
]

var updateToDisplay = 0;

function displayUpdate(x){
	document.getElementById('descriptionText').innerHTML = updates[x];
	document.getElementById('descriptionText').style = 'height:20vh;overflow:auto;';
	if (updateToDisplay == 0){
		document.getElementById('nextUpdateBtn').disabled = true;
		document.getElementById('currentUpdateBtn').disabled = true;
		document.getElementById('previousUpdateBtn').disabled = false;
		document.getElementById('firstUpdateBtn').disabled = false;
	} else if (updateToDisplay == updates.length-1){
		document.getElementById('previousUpdateBtn').disabled = true;
		document.getElementById('firstUpdateBtn').disabled = true;
		document.getElementById('nextUpdateBtn').disabled = false;
		document.getElementById('currentUpdateBtn').disabled = false;
	} else {
		document.getElementById('nextUpdateBtn').disabled = false;
		document.getElementById('currentUpdateBtn').disabled = false;
		document.getElementById('previousUpdateBtn').disabled = false;
		document.getElementById('firstUpdateBtn').disabled = false;
	}
}

function currentUpdate(){
	updateToDisplay = 0;
	displayUpdate(updateToDisplay);
}

function nextUpdate(){
	updateToDisplay--;
	displayUpdate(updateToDisplay);
}

function previousUpdate(){
	updateToDisplay++;
	displayUpdate(updateToDisplay);
}

function firstUpdate(){
	updateToDisplay = updates.length-1;
	displayUpdate(updateToDisplay);
}