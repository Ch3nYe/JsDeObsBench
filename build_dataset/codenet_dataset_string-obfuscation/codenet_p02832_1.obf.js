var a0_0x2b3f5e = a0_0xd803;
(function (stringArrayFunction, comparisonValue) {
    var _0x18e65f = a0_0xd803;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x18e65f(0x108)) / 0x1 + parseInt(_0x18e65f(0xfa)) / 0x2 + parseInt(_0x18e65f(0xf3)) / 0x3 + parseInt(_0x18e65f(0xf4)) / 0x4 * (-parseInt(_0x18e65f(0xfb)) / 0x5) + -parseInt(_0x18e65f(0x109)) / 0x6 + -parseInt(_0x18e65f(0x105)) / 0x7 * (parseInt(_0x18e65f(0xf5)) / 0x8) + parseInt(_0x18e65f(0xf8)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1074, 0x34c86));
process['stdin'][a0_0x2b3f5e(0xf6)]();
process[a0_0x2b3f5e(0x103)][a0_0x2b3f5e(0xff)](a0_0x2b3f5e(0x102));
var lines = [];
var reader = require(a0_0x2b3f5e(0xfe))[a0_0x2b3f5e(0xfc)]({
    'input': process[a0_0x2b3f5e(0x103)],
    'output': process[a0_0x2b3f5e(0xf9)]
});
function a0_0x1074() {
    var _0x90e2ab = [
        'log',
        'utf8',
        'stdin',
        'line',
        '28euVPQS',
        'length',
        'splice',
        '22885DBmugE',
        '1530534mrIPnQ',
        '579489mhaDUd',
        '108ifkvyN',
        '271760KDpyva',
        'resume',
        'map',
        '3935637SfMnMP',
        'stdout',
        '283708pOqAXc',
        '34820sxkMDx',
        'createInterface',
        'close',
        'readline',
        'setEncoding',
        'push'
    ];
    a0_0x1074 = function () {
        return _0x90e2ab;
    };
    return a0_0x1074();
}
function a0_0xd803(ZkafML, key) {
    var stringArray = a0_0x1074();
    a0_0xd803 = function (index, key) {
        index = index - 0xf3;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd803(ZkafML, key);
}
reader['on'](a0_0x2b3f5e(0x104), line => {
    var _0x5c12fa = a0_0x2b3f5e;
    lines[_0x5c12fa(0x100)](line);
});
reader['on'](a0_0x2b3f5e(0xfd), () => {
    var _0x58f66b = a0_0x2b3f5e;
    var count = lines[0x0];
    var ary = lines[0x1]['split']('\x20')[_0x58f66b(0xf7)](x => Number(x));
    var break_count = 0x0;
    var tmp_count = 0x1;
    var c = 0x0;
    for (var i = 0x0; i < count; i++) {
        if (ary[tmp_count - 0x1] == tmp_count) {
            c += tmp_count;
            tmp_count++;
        } else {
            break_count++;
            ary[_0x58f66b(0x107)](tmp_count - 0x1, 0x1);
        }
    }
    var judge = ![];
    if (ary['length'] == 0x0) {
        judge = !![];
    }
    if (sum(ary[_0x58f66b(0x106)]) != c) {
        judge = !![];
    }
    if (break_count == 0x0 && judge) {
        console[_0x58f66b(0x101)](0x0);
    } else {
        if (judge) {
            console[_0x58f66b(0x101)](-0x1);
        } else {
            console[_0x58f66b(0x101)](break_count);
        }
    }
    function sum(n) {
        return n * (n + 0x1) * 0.5;
    }
});