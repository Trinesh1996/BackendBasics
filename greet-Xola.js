const chalk = require('chalk');
const greet = require('./greet');
const figlet = require('figlet')

var styledMessage = chalk.bgGreen.black(greet('Xola'))


figlet.text("Xola", {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Somethings up, please check');
        console.dir(err);
        return;
    }
    console.log(data);
});
