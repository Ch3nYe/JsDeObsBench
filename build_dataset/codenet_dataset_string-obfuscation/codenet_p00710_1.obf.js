var a0_0x2237e1 = a0_0x5aee;
(function (stringArrayFunction, comparisonValue) {
    var _0x2eb1fc = a0_0x5aee;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2eb1fc(0x1b9)) / 0x1 + parseInt(_0x2eb1fc(0x1b4)) / 0x2 * (parseInt(_0x2eb1fc(0x1bc)) / 0x3) + -parseInt(_0x2eb1fc(0x1b5)) / 0x4 + -parseInt(_0x2eb1fc(0x1b0)) / 0x5 + parseInt(_0x2eb1fc(0x1be)) / 0x6 + -parseInt(_0x2eb1fc(0x1b2)) / 0x7 * (parseInt(_0x2eb1fc(0x1bb)) / 0x8) + -parseInt(_0x2eb1fc(0x1b1)) / 0x9 * (-parseInt(_0x2eb1fc(0x1b6)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2454, 0xe3fd3));
function a0_0x5aee(FtyJGC, key) {
    var stringArray = a0_0x2454();
    a0_0x5aee = function (index, key) {
        index = index - 0x1ad;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5aee(FtyJGC, key);
}
(function (input) {
    var _0x371da8 = a0_0x5aee;
    var inputs = input[_0x371da8(0x1b7)](/\r/g, '')[_0x371da8(0x1ad)]('\x0a');
    while (!![]) {
        var cards = [], line = inputs['shift']()[_0x371da8(0x1ad)]('\x20'), n = parseInt(line[0x0]), r = parseInt(line[0x1]);
        if (n === 0x0 && r === 0x0)
            break;
        for (var i = n; i > 0x0; i--) {
            cards[_0x371da8(0x1b8)](i);
        }
        while (r--) {
            var line = inputs[_0x371da8(0x1bd)]()['split']('\x20'), p = parseInt(line[0x0]) - 0x1, c = parseInt(line[0x1]), tmp;
            tmp = cards['splice'](p, c);
            cards = tmp[_0x371da8(0x1b3)](cards);
        }
        console[_0x371da8(0x1bf)](cards[_0x371da8(0x1bd)]());
    }
}(require('fs')[a0_0x2237e1(0x1ae)](a0_0x2237e1(0x1ba), a0_0x2237e1(0x1af))));
function a0_0x2454() {
    var _0x4c8553 = [
        'replace',
        'push',
        '405773UmVdhu',
        '/dev/stdin',
        '17144gcQXRa',
        '24JjCueY',
        'shift',
        '5630874RiMzxc',
        'log',
        'split',
        'readFileSync',
        'utf8',
        '6174440wKqjCc',
        '26161983gHrJwb',
        '1253JlNrqr',
        'concat',
        '161998HxibEx',
        '6141028EloaAv',
        '10nBOjaO'
    ];
    a0_0x2454 = function () {
        return _0x4c8553;
    };
    return a0_0x2454();
}