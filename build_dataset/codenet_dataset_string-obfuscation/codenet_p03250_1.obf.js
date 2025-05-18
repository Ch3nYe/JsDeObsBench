var a0_0xb1a19c = a0_0x1ddd;
(function (stringArrayFunction, comparisonValue) {
    var _0x40a0f8 = a0_0x1ddd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x40a0f8(0x129)) / 0x1 + -parseInt(_0x40a0f8(0x12d)) / 0x2 + -parseInt(_0x40a0f8(0x127)) / 0x3 * (-parseInt(_0x40a0f8(0x12b)) / 0x4) + parseInt(_0x40a0f8(0x131)) / 0x5 * (parseInt(_0x40a0f8(0x12e)) / 0x6) + parseInt(_0x40a0f8(0x12f)) / 0x7 * (parseInt(_0x40a0f8(0x12c)) / 0x8) + -parseInt(_0x40a0f8(0x128)) / 0x9 + -parseInt(_0x40a0f8(0x132)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2cb7, 0xe6780));
function a0_0x2cb7() {
    var _0x363d93 = [
        'log',
        '2155swOoJQ',
        '7938160LbwfFL',
        'split',
        'sort',
        '1497QwMTwS',
        '15124797VTPElN',
        '507482qCSxij',
        'readFileSync',
        '6044KzuQZU',
        '104XjMIca',
        '1928120JmnuBI',
        '26058DBGcQh',
        '672595fQNIuF'
    ];
    a0_0x2cb7 = function () {
        return _0x363d93;
    };
    return a0_0x2cb7();
}
function a0_0x1ddd(kZWBqw, key) {
    var stringArray = a0_0x2cb7();
    a0_0x1ddd = function (index, key) {
        index = index - 0x125;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ddd(kZWBqw, key);
}
function main(input) {
    var _0x29206d = a0_0x1ddd;
    abc = input[_0x29206d(0x125)]('\x20');
    abc = abc[_0x29206d(0x126)]();
    a = '';
    a += abc[0x2];
    a += abc[0x1];
    a = parseInt(a, 0xa);
    b = parseInt(abc[0x0], 0xa);
    console[_0x29206d(0x130)](a + b);
}
main(require('fs')[a0_0xb1a19c(0x12a)]('/dev/stdin', 'utf8'));