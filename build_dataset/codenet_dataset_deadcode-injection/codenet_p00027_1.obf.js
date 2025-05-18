var a0_0x398e1f = a0_0x273d;
function a0_0x1698() {
    var _0x15a485 = [
        'replace',
        'split',
        'shift',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    a0_0x1698 = function () {
        return _0x15a485;
    };
    return a0_0x1698();
}
(function (input) {
    var _0x13fc71 = a0_0x273d;
    var p = input[_0x13fc71(0x0)](/\n$/, '')[_0x13fc71(0x1)]('\x0a');
    while (!![]) {
        var a = p[_0x13fc71(0x2)]()[_0x13fc71(0x1)]('\x20')[_0x13fc71(0x3)](Number);
        var m = a[_0x13fc71(0x2)]();
        var d = a[_0x13fc71(0x2)]();
        if (m === 0x0 && d === 0x0) {
            return;
        }
        var date = new Date(0x7d4, m - 0x1, d);
        console[_0x13fc71(0x4)](getWeekDay(date['getDay']()));
    }
}(require('fs')[a0_0x398e1f(0x5)](a0_0x398e1f(0x6), 'utf8')));
function a0_0x273d(vKqbyM, key) {
    var stringArray = a0_0x1698();
    a0_0x273d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x273d(vKqbyM, key);
}
function getWeekDay(d) {
    var _0x117d64 = a0_0x273d;
    var week = [
        'Sunday',
        _0x117d64(0x7),
        _0x117d64(0x8),
        _0x117d64(0x9),
        _0x117d64(0xa),
        _0x117d64(0xb),
        _0x117d64(0xc)
    ];
    return week[d];
}