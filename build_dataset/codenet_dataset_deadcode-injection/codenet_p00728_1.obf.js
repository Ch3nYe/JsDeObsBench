var a0_0x426326 = a0_0x2a55;
process[a0_0x426326(0x0)][a0_0x426326(0x1)]();
process[a0_0x426326(0x0)][a0_0x426326(0x2)](a0_0x426326(0x3));
function a0_0x2a55(QXlbHu, key) {
    var stringArray = a0_0x5f09();
    a0_0x2a55 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a55(QXlbHu, key);
}
process[a0_0x426326(0x0)]['on'](a0_0x426326(0x4), function (line) {
    before(line);
});
var log = console['log'];
function before(line) {
    var _0x1a92fe = a0_0x2a55;
    var lines = line[_0x1a92fe(0x5)]('\x0a');
    lines = lines[_0x1a92fe(0x6)](function (e) {
        return e !== '';
    });
    main(lines);
}
function main(lines) {
    var _0x3dd874 = a0_0x2a55;
    var ls = lines['map'](function (e) {
        var _0x33a6e1 = a0_0x2a55;
        if (_0x33a6e1(0x7) !== _0x33a6e1(0x7)) {
            var ls = lines[_0x33a6e1(0x8)](function (e) {
                return Number(e);
            });
            while (ls[_0x33a6e1(0x9)] > 0x1) {
                var tpl = ls['shift']();
                var arr = ls['slice'](0x0, tpl);
                ls = ls[_0x33a6e1(0xa)](tpl);
                var mid = arr[_0x33a6e1(0xb)](Math['min'][_0x33a6e1(0xc)](this, arr));
                arr[_0x33a6e1(0xd)](mid, 0x1);
                var Mid = arr[_0x33a6e1(0xb)](Math['max'][_0x33a6e1(0xc)](this, arr));
                arr[_0x33a6e1(0xd)](Mid, 0x1);
                var sum = arr[_0x33a6e1(0xe)](function (p, c, i, a) {
                    return p + c;
                });
                log(Math[_0x33a6e1(0xf)](sum / arr[_0x33a6e1(0x9)]));
            }
        } else {
            return Number(e);
        }
    });
    while (ls['length'] > 0x1) {
        var tpl = ls[_0x3dd874(0x10)]();
        var arr = ls['slice'](0x0, tpl);
        ls = ls[_0x3dd874(0xa)](tpl);
        var mid = arr[_0x3dd874(0xb)](Math[_0x3dd874(0x11)]['apply'](this, arr));
        arr[_0x3dd874(0xd)](mid, 0x1);
        var Mid = arr[_0x3dd874(0xb)](Math[_0x3dd874(0x12)][_0x3dd874(0xc)](this, arr));
        arr['splice'](Mid, 0x1);
        var sum = arr['reduce'](function (p, c, i, a) {
            var _0x4a3a5d = a0_0x2a55;
            if (_0x4a3a5d(0x13) !== 'GYsav') {
                return p + c;
            } else {
                return p + c;
            }
        });
        log(Math[_0x3dd874(0xf)](sum / arr['length']));
    }
}
function a0_0x5f09() {
    var _0x5e4e62 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'split',
        'filter',
        'JDuJD',
        'map',
        'length',
        'slice',
        'indexOf',
        'apply',
        'splice',
        'reduce',
        'round',
        'shift',
        'min',
        'max',
        'GYsav'
    ];
    a0_0x5f09 = function () {
        return _0x5e4e62;
    };
    return a0_0x5f09();
}