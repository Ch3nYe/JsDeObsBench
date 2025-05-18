var a0_0x3a7943 = a0_0x265b;
process[a0_0x3a7943(0x0)][a0_0x3a7943(0x1)]();
process[a0_0x3a7943(0x0)][a0_0x3a7943(0x2)](a0_0x3a7943(0x3));
function a0_0x265b(LxGNBF, key) {
    var stringArray = a0_0x2468();
    a0_0x265b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x265b(LxGNBF, key);
}
function a0_0x2468() {
    var _0x67df16 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'readline',
        'stdout',
        'line',
        'close',
        'map',
        'vujra',
        'log',
        'xUFev',
        'rlvRM',
        'splice',
        'length',
        'XuWpS',
        'njqYL',
        'push'
    ];
    a0_0x2468 = function () {
        return _0x67df16;
    };
    return a0_0x2468();
}
var lines = [];
var reader = require(a0_0x3a7943(0x4))['createInterface']({
    'input': process[a0_0x3a7943(0x0)],
    'output': process[a0_0x3a7943(0x5)]
});
reader['on'](a0_0x3a7943(0x6), line => {
    lines['push'](line);
});
reader['on'](a0_0x3a7943(0x7), () => {
    var _0x53b1e4 = a0_0x265b;
    var count = lines[0x0];
    var ary = lines[0x1]['split']('\x20')[_0x53b1e4(0x8)](x => Number(x));
    var break_count = 0x0;
    var tmp_count = 0x1;
    var c = 0x0;
    for (var i = 0x0; i < count; i++) {
        if (ary[tmp_count - 0x1] == tmp_count) {
            if ('sKlZh' !== _0x53b1e4(0x9)) {
                c += tmp_count;
                tmp_count++;
            } else {
                if (judge) {
                    console[_0x53b1e4(0xa)](-0x1);
                } else {
                    console[_0x53b1e4(0xa)](break_count);
                }
            }
        } else {
            if (_0x53b1e4(0xb) !== _0x53b1e4(0xc)) {
                break_count++;
                ary[_0x53b1e4(0xd)](tmp_count - 0x1, 0x1);
            } else {
                return n * (n + 0x1) * 0.5;
            }
        }
    }
    var judge = ![];
    if (ary[_0x53b1e4(0xe)] == 0x0) {
        judge = !![];
    }
    if (sum(ary['length']) != c) {
        judge = !![];
    }
    if (break_count == 0x0 && judge) {
        console['log'](0x0);
    } else {
        if (_0x53b1e4(0xf) === _0x53b1e4(0xf)) {
            if (judge) {
                console['log'](-0x1);
            } else {
                console[_0x53b1e4(0xa)](break_count);
            }
        } else {
            console[_0x53b1e4(0xa)](break_count);
        }
    }
    function sum(n) {
        var _0x93d88c = a0_0x265b;
        if (_0x93d88c(0x10) !== _0x93d88c(0x10)) {
            lines[_0x93d88c(0x11)](line);
        } else {
            return n * (n + 0x1) * 0.5;
        }
    }
});