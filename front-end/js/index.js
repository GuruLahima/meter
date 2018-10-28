window.onload = () => {
	
	function reset() {
		clicked = false;
	}
	
	function rerender() {
		clicked = true;
		messageBox.innerHTML = "<p> Calculating... </p>";
	    gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
	    var val = gauge.maxValue - Math.floor(Math.random() * Math.round(0.1 * gauge.maxValue));
	    console.log(gauge.maxValue, val);
		gauge.set(val);
		setTimeout(() => {
			messageBox.innerHTML = '<p>' + messages[Math.floor(Math.random() * messages.length)] + '</p>';
		}, 2000);
	}

	var button = document.getElementById('thot-me');
	var messages = [
	    "Thot, plz.",
	    "Send this thot to Gulag immediately!",
	    "The thot-o-meter almost exploded due to your thotness!",
	    "A penny for your thots.",
	    "I spot a THOT!",
	    "Begone, thot.",
	    "Contain your thottery!",
	    "Weren't you the lead role in 'Big impact into Uranus'?",
	    "'You can touch this' - MC Thot",
	    "Obviously you were the main inspiration for the book of Thotology.",
	    "Pink Floyd don't, but you definitely need thot control!",
	    "Who you gonna call? Definitely not Thotbusters!",
	    "If somebody says 'thot' three times in front of a mirror, your face appears.",
	    "I've been through the desert on a thot with no name.",
	    "You smell like a baby thot.",
	    "Booo, you thot!",
	    "Houston, we have a thot.",
	    "How very thotful of you.",
	    "...and thotness for all",
	    "I got 99 problems, but being a thot ain't one.",
	    "Thottinator",
	];
	var clicked = false;

	var messageBox = document.getElementById("messageBox");
	
	button.onclick = () => {
		if(!clicked) {
			rerender();
			setTimeout(reset, 5000);
		}
	};

};