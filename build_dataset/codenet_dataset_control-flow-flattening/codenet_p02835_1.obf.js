function Main(input) {
    var uVpOAv = {
        'aNsiS': function (x, y) {
            return x + y;
        },
        'TkBcP': function (x, y) {
            return x + y;
        },
        'nteMc': function (callee, param1) {
            return callee(param1);
        },
        'forHq': function (x, y) {
            return x > y;
        },
        'MLZyu': 'win'
    };
    input = input['split']('\x20');
    tmp = uVpOAv['aNsiS'](uVpOAv['TkBcP'](uVpOAv['nteMc'](parseInt, input[0x0]), uVpOAv['nteMc'](parseInt, input[0x1])), uVpOAv['nteMc'](parseInt, input[0x2]));
    if (uVpOAv['forHq'](tmp, 0x15)) {
        console['log']('bust');
    } else {
        console['log'](uVpOAv['MLZyu']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));