

function execute() {

    var child = require('child_process').spawn(
        'java', ['-jar', '/Users/mohanthonangi/Documents/mohan.jar', 'nmnmnm']
    );
 
    child.stdout.on('data', function (data) {
        console.log(data.toString());
    });

    child.stderr.on("data", function (data) {
        console.log(data.toString());
    });
}

execute();