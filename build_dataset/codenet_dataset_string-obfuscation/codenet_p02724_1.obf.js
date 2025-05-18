var a0_0x5d56b2 = a0_0x4a57;
function a0_0x4a57(VoTdJt, key) {
    var stringArray = a0_0x2800();
    a0_0x4a57 = function (index, key) {
        index = index - 0xac;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4a57(VoTdJt, key);
}
function a0_0x2800() {
    var _0x34b769 = [
        'utf8',
        '6PzCCMy',
        '379890OCqKql',
        '64275WSOyZE',
        'log',
        '28ZwWgvp',
        '163650RALrqf',
        'floor',
        '1556892AUIOkD',
        '920650RbMwZf',
        '311648VzIIDm',
        '185384bMUjBX',
        '8tCdvfu'
    ];
    a0_0x2800 = function () {
        return _0x34b769;
    };
    return a0_0x2800();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5c710f = a0_0x4a57;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5c710f(0xae)) / 0x1 + parseInt(_0x5c710f(0xb1)) / 0x2 * (-parseInt(_0x5c710f(0xb3)) / 0x3) + parseInt(_0x5c710f(0xad)) / 0x4 + -parseInt(_0x5c710f(0xac)) / 0x5 + parseInt(_0x5c710f(0xb6)) / 0x6 * (-parseInt(_0x5c710f(0xb5)) / 0x7) + parseInt(_0x5c710f(0xaf)) / 0x8 * (parseInt(_0x5c710f(0xb8)) / 0x9) + parseInt(_0x5c710f(0xb2)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2800, 0x1c820));
function Main(input) {
    var _0x39dbaf = a0_0x4a57;
    var joy = 0x0;
    joy += Math[_0x39dbaf(0xb7)](input / 0x1f4) * 0x3e8;
    joy += Math[_0x39dbaf(0xb7)](input % 0x1f4 / 0x5) * 0x5;
    console[_0x39dbaf(0xb4)](joy);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x5d56b2(0xb0)));