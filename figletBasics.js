figlet('Hello Why are tired today?', function(err, data) {
    if (err) {
        console.log('something went wrong, please check');
        console.dir(err);
        return;
    }
    console.log(data)
});