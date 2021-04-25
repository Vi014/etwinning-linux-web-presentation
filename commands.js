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