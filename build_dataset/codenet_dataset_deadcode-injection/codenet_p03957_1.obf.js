function a0_0x4faf() {
    var _0x5580fc = [
        'split',
        'length',
        'Yes',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4faf = function () {
        return _0x5580fc;
    };
    return a0_0x4faf();
}
function a0_0x9280(iZZFEn, key) {
    var stringArray = a0_0x4faf();
    a0_0x9280 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9280(iZZFEn, key);
}
var a0_0x2c4091 = a0_0x9280;
function Main(input) {
    var _0x1a73bb = a0_0x9280;
    var input = input[_0x1a73bb(0x0)]('\x0a');
    var string = input[0x0];
    var c, f, Cfound = 0x0;
    for (var i = 0x0; i < string[_0x1a73bb(0x1)]; i++) {
        if (string[i] == 'C' && !Cfound) {
            c = i;
            Cfound++;
        }
        ;
        if (Cfound && string[i] == 'F') {
            f = i;
            return console['log'](_0x1a73bb(0x2));
        }
    }
    ;
    return console[_0x1a73bb(0x3)]('No');
}
Main(require('fs')['readFileSync'](a0_0x2c4091(0x4), a0_0x2c4091(0x5)));