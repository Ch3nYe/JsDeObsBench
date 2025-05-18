var a0_0x18534f = a0_0x2764;
function a0_0x2764(FxojZL, key) {
    var stringArray = a0_0x4c37();
    a0_0x2764 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2764(FxojZL, key);
}
function a0_0x4c37() {
    var _0x2f333c = [
        'HxiZJ',
        'replace',
        'split',
        'length',
        'aEEkr',
        'BicDs',
        'sorgH',
        'readFileSync',
        'utf8'
    ];
    a0_0x4c37 = function () {
        return _0x2f333c;
    };
    return a0_0x4c37();
}
function Main(input) {
    var _0x1a96a = a0_0x2764;
    var space_strinput = function (line) {
        var _0x2b6fb1 = a0_0x2764;
        if (_0x2b6fb1(0x0) === _0x2b6fb1(0x0)) {
            var arr = line[_0x2b6fb1(0x1)](/(^\s+)|(\s+$)/g, '')[_0x2b6fb1(0x2)]('\x20');
            for (var i = 0x0; i < arr[_0x2b6fb1(0x3)]; ++i) {
                arr[i] = arr[i];
            }
            return arr;
        } else {
            var val = a[i];
            if (val - min > rieki) {
                rieki = val - min;
                rieki_place_count = 0x1;
            } else if (val - min == rieki) {
                rieki_place_count++;
            }
            min = val < min ? val : min;
        }
    };
    var space_numinput = function (line) {
        var _0x1d9d51 = a0_0x2764;
        var arr = line[_0x1d9d51(0x1)](/(^\s+)|(\s+$)/g, '')[_0x1d9d51(0x2)]('\x20');
        for (var i = 0x0; i < arr['length']; ++i) {
            arr[i] = +arr[i];
        }
        return arr;
    };
    var getmin = function (a, b) {
        var _0x25c8e8 = a0_0x2764;
        if ('qlZth' === _0x25c8e8(0x4)) {
            var arr = line['replace'](/(^\s+)|(\s+$)/g, '')[_0x25c8e8(0x2)]('\x20');
            for (var i = 0x0; i < arr[_0x25c8e8(0x3)]; ++i) {
                arr[i] = arr[i];
            }
            return arr;
        } else {
            return a > b ? b : a;
        }
    };
    lines = input[_0x1a96a(0x2)]('\x0a');
    var l0 = space_numinput(lines[0x0]);
    var n = l0[0x0];
    var t = l0[0x1];
    var a = space_numinput(lines[0x1]);
    var rieki = 0x0;
    var rieki_place_count = 0x0;
    var min = a[0x0];
    var max = a[0x0];
    for (var i = 0x0; i < n; ++i) {
        if (_0x1a96a(0x5) === 'qTnAG') {
            var arr = line[_0x1a96a(0x1)](/(^\s+)|(\s+$)/g, '')[_0x1a96a(0x2)]('\x20');
            for (var i = 0x0; i < arr[_0x1a96a(0x3)]; ++i) {
                arr[i] = +arr[i];
            }
            return arr;
        } else {
            var val = a[i];
            if (val - min > rieki) {
                if (_0x1a96a(0x6) !== _0x1a96a(0x6)) {
                    arr[i] = +arr[i];
                } else {
                    rieki = val - min;
                    rieki_place_count = 0x1;
                }
            } else if (val - min == rieki) {
                rieki_place_count++;
            }
            min = val < min ? val : min;
        }
    }
    console['log'](getmin(rieki_place_count, Math['floor'](t / 0x2)));
}
Main(require('fs')[a0_0x18534f(0x7)]('/dev/stdin', a0_0x18534f(0x8)));