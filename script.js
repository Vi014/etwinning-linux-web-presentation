jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command) {
        if (command !== '') {
            var result = window.eval(command+'()');
            if (result != undefined) {
                this.echo(String(result));
            }
        }
    }, {
        greetings: 'Welcome! Type "help" to get a list of commands.\nThis window is also an interactive JavaScript console!',
        name: 'terminal_demo',
        height: 240,
        width: 800,
        prompt: 'root@localhost # '
    });
});
