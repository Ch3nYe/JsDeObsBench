function Main(input) {
    var odiWfh = {
        'XwSZj': function (x, y) {
            return x + y;
        },
        'oWgdb': 'ABC'
    };
    console['log'](odiWfh['XwSZj'](odiWfh['oWgdb'], input));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));