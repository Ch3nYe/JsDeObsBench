function a0_0x38a1() {
    var _0x1f4dc6 = [
        '1XjFjMN',
        'Wednesday',
        '6961240mLQyVP',
        'utf8',
        '7420lxlGWl',
        'Tuesday',
        '715714pLvoNi',
        '20744OOCgKd',
        'Friday',
        '2904156UTUmuq',
        '/dev/stdin',
        'map',
        'split',
        'Saturday',
        'getDay',
        '2634058pYbjto',
        '479040XeJTII',
        'replace',
        'shift',
        '6NozxqP',
        'readFileSync',
        '3072GdjTao'
    ];
    a0_0x38a1 = function () {
        return _0x1f4dc6;
    };
    return a0_0x38a1();
}
var a0_0x5e224c = a0_0x3c0f;
(function (stringArrayFunction, comparisonValue) {
    var _0x5c9d32 = a0_0x3c0f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5c9d32(0x181)) / 0x1 * (-parseInt(_0x5c9d32(0x187)) / 0x2) + -parseInt(_0x5c9d32(0x17e)) / 0x3 * (-parseInt(_0x5c9d32(0x172)) / 0x4) + -parseInt(_0x5c9d32(0x185)) / 0x5 * (parseInt(_0x5c9d32(0x180)) / 0x6) + parseInt(_0x5c9d32(0x17a)) / 0x7 + parseInt(_0x5c9d32(0x17b)) / 0x8 + -parseInt(_0x5c9d32(0x174)) / 0x9 + parseInt(_0x5c9d32(0x183)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x38a1, 0x660f3));
(function (input) {
    var _0x18434b = a0_0x3c0f;
    var p = input[_0x18434b(0x17c)](/\n$/, '')[_0x18434b(0x177)]('\x0a');
    while (!![]) {
        var a = p[_0x18434b(0x17d)]()[_0x18434b(0x177)]('\x20')[_0x18434b(0x176)](Number);
        var m = a[_0x18434b(0x17d)]();
        var d = a[_0x18434b(0x17d)]();
        if (m === 0x0 && d === 0x0) {
            return;
        }
        var date = new Date(0x7d4, m - 0x1, d);
        console['log'](getWeekDay(date[_0x18434b(0x179)]()));
    }
}(require('fs')[a0_0x5e224c(0x17f)](a0_0x5e224c(0x175), a0_0x5e224c(0x184))));
function a0_0x3c0f(xTcRqB, key) {
    var stringArray = a0_0x38a1();
    a0_0x3c0f = function (index, key) {
        index = index - 0x172;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c0f(xTcRqB, key);
}
function getWeekDay(d) {
    var _0x5d2ec8 = a0_0x5e224c;
    var week = [
        'Sunday',
        'Monday',
        _0x5d2ec8(0x186),
        _0x5d2ec8(0x182),
        'Thursday',
        _0x5d2ec8(0x173),
        _0x5d2ec8(0x178)
    ];
    return week[d];
}