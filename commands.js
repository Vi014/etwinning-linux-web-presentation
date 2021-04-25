function consoleTest() {
	console.log('a')
	return 'a\n'
}

function help() {
	return 'help: shows this page\n\
clear: clears the terminal\n\
ls: shows the available pages\n\
there might be more hidden commands :O\n'
}

function notitle() {
	var audio = new Audio('./assets/notitle.mp3');
	audio.play();
}