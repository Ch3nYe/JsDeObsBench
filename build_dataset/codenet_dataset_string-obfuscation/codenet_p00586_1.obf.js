var a0_0x3eebfc = a0_0x1689;
(function (stringArrayFunction, comparisonValue) {
    var _0x524749 = a0_0x1689;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x524749(0x1f5)) / 0x1 * (parseInt(_0x524749(0x1f7)) / 0x2) + parseInt(_0x524749(0x1f4)) / 0x3 * (parseInt(_0x524749(0x1fa)) / 0x4) + parseInt(_0x524749(0x202)) / 0x5 * (parseInt(_0x524749(0x1f9)) / 0x6) + -parseInt(_0x524749(0x1fb)) / 0x7 + -parseInt(_0x524749(0x200)) / 0x8 * (parseInt(_0x524749(0x1fd)) / 0x9) + parseInt(_0x524749(0x1fc)) / 0xa * (-parseInt(_0x524749(0x203)) / 0xb) + parseInt(_0x524749(0x201)) / 0xc * (parseInt(_0x524749(0x205)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x7269, 0x3c8a4));
function a0_0x1689(chUvpX, key) {
    var stringArray = a0_0x7269();
    a0_0x1689 = function (index, key) {
        index = index - 0x1f4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1689(chUvpX, key);
}
function a0_0x7269() {
    var _0x5c70ab = [
        '3SRhzZy',
        '398491PGwTrq',
        'utf8',
        '2zGaBLh',
        'split',
        '6tBHcbR',
        '1839640YDhWxQ',
        '502782bZqbwM',
        '10cgHaVv',
        '1371690wGHAiD',
        'forEach',
        'readFileSync',
        '8zNmzAy',
        '14652LiljrN',
        '2378085axpgrn',
        '5185631gDdpqY',
        'log',
        '4329BjQAws'
    ];
    a0_0x7269 = function () {
        return _0x5c70ab;
    };
    return a0_0x7269();
}
var input = require('fs')[a0_0x3eebfc(0x1ff)]('/dev/stdin', a0_0x3eebfc(0x1f6));
var Arr = input['trim']()[a0_0x3eebfc(0x1f8)]('\x0a');
Arr[a0_0x3eebfc(0x1fe)](function (v) {
    var _0x322ab4 = a0_0x3eebfc;
    var a = v['split']('\x20')[0x0] - 0x0;
    var b = v[_0x322ab4(0x1f8)]('\x20')[0x1] - 0x0;
    console[_0x322ab4(0x204)](a + b);
});