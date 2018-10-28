window.onload = () => {

	var button = document.getElementById('thot-me');
	var messages = [
	    "Thot, plz",
	    "Send this thot to Gulag immediately!",
	    "The thot-o-meter almost exploded due to your thotness!",
	    "A penny for your thots.",
	    "I spot a THOT!",
	    "Begone, thot",
	    "Contain your thottery!",
	    "You thot you wouldn't reach maximum thotness? I guess you should have thot twice!",
	    "Weren't you the lead role in 'Big impact into Uranus'?",
	    "'You can touch this' - MC Thot",
	    "Obviously you were the main inspiration for the book of Thotology",
	    "Pink Floyd don't, but you definitely need thot control!",
	    "Who you gonna call? Definitely not Thotbusters!",
	    "If somebody says 'thot' three times in front of a mirror, your face appears",
	    "I've been through the desert on a thot with no name",
	];

	var messageBox = document.getElementById("messageBox");
	
	button.onclick = () => {
	    gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
		gauge.set(gauge.maxValue);
		messageBox.innerHTML = messages[Math.floor(Math.random() * messages.length)];
	};

};
