function consoleTest() {
	console.log('a');
	return 'a\n';
}

function help() {
	return 'help: shows this page\n\
clear: clears the terminal\n\
ls: shows the available pages\n\
if you look at the page source you might find extra commands :O\n';
}

function ls() {
	return 'whoami: Shows "What is free software?"\n\
which: Shows "FOSS Terms"\n\
history: Shows "Linux history"\n\
uname: Shows "Linux Distributions"\n\
vi: Shows "Common UNIX commands"\n\
pf: Shows "Other FOSS OS\'"'
}

function vi() {
	window.location.replace("unixCommands.html");
}

var audio = new Audio()
function notitle() {
	if (audio.currentTime === 0) {
		audio = new Audio('./assets/notitle.opus');
		audio.play();
		return 'Now playing: No title\nType \'stop\' to stop';
	} else {
		return 'Already playing!'
	}
}

function stop() {
	audio.pause();
	audio.currentTime = 0;
}
