function TheLogin() {

	var password1 = 'whoisrmutt';
	var password2 = 'nonsense';

	if (this.document.login.pass.value == password1 || this.document.login.pass.value == password2) {
		top.location.href="newhome.html";
	}
	else {
		window.alert("Incorrect password.");
	}
}

function showContent() {

	var password1 = 'amie';

	var password2v1 = 'alias marcel duchamp';
	var password2v2 = 'alias marcel duchamp est. 1920';	
	var password2v3 = 'rrose selavy';

	var password3v1 = 'louise varese norton';
	var password3v2 = 'louise norton varese'; 
	var password3v3 = 'louise varèse norton';
	var password3v4 = 'louise norton varèse';
	var password3v5 = 'louise mccutcheon norton';
	var password3v6 = 'louise norton mccutcheon';

	var password4v1 = 'salon des refuses';
	var password4v2 = 'salon des refusés';

	var password5 = '110w88';
	
	var password6 = 'nominal dues';

	var password7 = 'god is in the plumbing';

	var password8 = 'elsa';

	var password9 = 'pipes';

	var input = this.document.login.pass.value.toLowerCase();

	// unlocks rrose puzzle
	if (input == password1) {
		var x = document.getElementById("content1");
		x.style.display = "block";

	// unlocks louise norton puzzle
	} else if (input == password2v1 || input == password2v2 || input == password2v3) {
		var x = document.getElementById("content2");
		x.style.display = "block";
		var y = document.getElementById("infocontent2");
		y.style.display = "block";

	// unlocks demuth letter puzzle
	} else if (input == password3v1 || input == password3v2 || input == password3v3 || input == password3v4 || input == password3v5 || input == password3v6) {
		var x = document.getElementById("content3");
		x.style.display = "block";

	// unlocks phonebook puzzle
	} else if (input == password4v1 || input == password4v2) {
		var x = document.getElementById("content4");
		x.style.display = "block";

	// unlocks sia catalog puzzle
	} else if (input == password5) {
		var x = document.getElementById("content5");
		x.style.display = "block";

	// unlocks elsa picture puzzle
	} else if (input == password6) {
		var x = document.getElementById("content6");
		x.style.display = "block";

    // unlocks god pt 1 puzzle
	} else if (input == password7) {
		var x = document.getElementById("content7");
		x.style.display = "block";

	// unlocks god part 2 puzzle	
	} else if (input == password8) {
		var x = document.getElementById("content8");
		x.style.display = "block";

	// unlocks ??? this is currently the last puzzle so password doesn't do anything yet
	} else if (input == password9) {
		var x = document.getElementById("content9");
		x.style.display = "block";

	} else {
		window.alert("Invalid password.");
	}
}


function showDiv() {
   document.getElementById('pass-entry').style.display = "block";
}

function hideDiv() {
   document.getElementById('pass-entry').style.display = "none";
}

function showRed() {
   document.getElementById('red-letter').style.display = "block";
}

function hideRed() {
   document.getElementById('red-letter').style.display = "none";
}