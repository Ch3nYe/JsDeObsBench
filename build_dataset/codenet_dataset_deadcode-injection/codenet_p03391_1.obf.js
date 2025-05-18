'use strict';
function myin() {
    var _0x170c37 = a0_0x41a2;
    return require('fs')['readFileSync'](_0x170c37(0x0), 'utf8')[_0x170c37(0x1)]();
}
function a0_0x493f() {
    var _0x30a5ed = [
        '/dev/stdin',
        'trim',
        'log',
        'split',
        'map',
        'shift',
        'length',
        'bLAPZ'
    ];
    a0_0x493f = function () {
        return _0x30a5ed;
    };
    return a0_0x493f();
}
function myout(t) {
    var _0x33e9e3 = a0_0x41a2;
    console[_0x33e9e3(0x2)](t);
}
function myconv(i, no) {
    var _0x3c218e = a0_0x41a2;
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i[_0x3c218e(0x3)]('\x20');
    case 0x3:
        return i['split']('\x0a');
    case 0x4:
        return i[_0x3c218e(0x3)]('\x20')['map'](a => Number(a));
    case 0x5:
        return i[_0x3c218e(0x3)]('\x0a')['map'](a => Number(a));
    case 0x6:
        return i['split']('');
    case 0x7:
        return i[_0x3c218e(0x3)]('')[_0x3c218e(0x4)](a => Number(a));
    }
}
function a0_0x41a2(naOVTn, key) {
    var stringArray = a0_0x493f();
    a0_0x41a2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41a2(naOVTn, key);
}
function Main(input) {
    var _0x40e8f8 = a0_0x41a2;
    input = myconv(input, 0x3);
    input[_0x40e8f8(0x5)]();
    var output = 0x0;
    for (var i = 0x0; i < input[_0x40e8f8(0x6)]; i++) {
        if ('dNQJE' === 'zqffB') {
            switch (no) {
            case 0x0:
                return i;
            case 0x1:
                return parseInt(i);
            case 0x2:
                return i[_0x40e8f8(0x3)]('\x20');
            case 0x3:
                return i[_0x40e8f8(0x3)]('\x0a');
            case 0x4:
                return i[_0x40e8f8(0x3)]('\x20')[_0x40e8f8(0x4)](a => Number(a));
            case 0x5:
                return i['split']('\x0a')[_0x40e8f8(0x4)](a => Number(a));
            case 0x6:
                return i[_0x40e8f8(0x3)]('');
            case 0x7:
                return i[_0x40e8f8(0x3)]('')['map'](a => Number(a));
            }
        } else {
            var A = parseInt(input[i]['split']('\x20')[0x0]);
            var B = parseInt(input[i][_0x40e8f8(0x3)]('\x20')[0x1]);
            if (A < B) {
                if (_0x40e8f8(0x7) !== 'bLAPZ') {
                    var A = parseInt(input[i][_0x40e8f8(0x3)]('\x20')[0x0]);
                    var B = parseInt(input[i]['split']('\x20')[0x1]);
                    if (A < B) {
                        output += B;
                    }
                } else {
                    output += B;
                }
            }
        }
    }
    myout(output);
}
Main(myin());