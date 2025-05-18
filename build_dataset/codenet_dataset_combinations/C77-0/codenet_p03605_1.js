process.stdin.resume();
process.stdin.setEncoding('utf8');

var g_input = '';
process.stdin.on('data', function(chunk) {
    g_input += chunk;
});

process.stdin.on('end', function() {
    Main(g_input.split(/\r?\n/));
});

function Main(input) {

    if (input[0][0] === '9' || input[0][1] === '9') {
        console.log('Yes');
    }
    else {
        console.log('No');
    }

    return 0;
}

