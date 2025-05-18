var a0_0x6fc58a = a0_0x52cd;
function a0_0x52cd(qqZzYb, key) {
    var stringArray = a0_0x5b15();
    a0_0x52cd = function (index, key) {
        index = index - 0xbe;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52cd(qqZzYb, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x208e9b = a0_0x52cd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x208e9b(0xc3)) / 0x1 * (-parseInt(_0x208e9b(0xc2)) / 0x2) + parseInt(_0x208e9b(0xc5)) / 0x3 * (parseInt(_0x208e9b(0xbe)) / 0x4) + -parseInt(_0x208e9b(0xc9)) / 0x5 + -parseInt(_0x208e9b(0xc6)) / 0x6 + -parseInt(_0x208e9b(0xc4)) / 0x7 + parseInt(_0x208e9b(0xc1)) / 0x8 * (-parseInt(_0x208e9b(0xca)) / 0x9) + -parseInt(_0x208e9b(0xc8)) / 0xa * (-parseInt(_0x208e9b(0xc7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b15, 0x4b91a));
function Main(input) {
    var _0x4b47b4 = a0_0x52cd;
    input = input['split']('\x0a');
    var N = parseInt(input[0x0], 0xa);
    if (parseInt(N / 0xa) === 0x0) {
        console[_0x4b47b4(0xcc)](_0x4b47b4(0xcb));
        return;
    }
    var Sum = 0x0;
    var Mod = N;
    for (var i = 0x5f5e100; i >= 0xa; i = i / 0xa) {
        Sum += parseInt(Mod / i);
        Mod = Mod % i;
    }
    Sum += Mod;
    if (N % Sum === 0x0) {
        console['log']('Yes');
    } else {
        console[_0x4b47b4(0xcc)]('No');
    }
}
function a0_0x5b15() {
    var _0x3b626c = [
        '1944025catFkT',
        '9VIRBAt',
        'Yes',
        'log',
        '12NCdBxD',
        '/dev/stdin',
        'readFileSync',
        '2213912ApSWNy',
        '40842JnjbyX',
        '30xmZBzF',
        '2796332pYCykp',
        '265458usjgrc',
        '3657870cOebUc',
        '11MvLHNg',
        '23313670pPZNLF'
    ];
    a0_0x5b15 = function () {
        return _0x3b626c;
    };
    return a0_0x5b15();
}
Main(require('fs')[a0_0x6fc58a(0xc0)](a0_0x6fc58a(0xbf), 'utf8'));