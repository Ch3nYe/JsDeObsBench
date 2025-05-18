var a0_0x2aa553 = a0_0xfbaa;
function a0_0x2264() {
    var _0x475a0c = [
        'length',
        '7HVzAHB',
        '460574wLPfDN',
        'shift',
        'map',
        'utf8',
        '7819119aByJAO',
        '1415928haimAV',
        '2299860REdMZc',
        '2290czWgKg',
        'push',
        'trim',
        '2312KETeoS',
        '634359Pbuesb',
        '2971776HtMjen',
        'every',
        'log',
        '/dev/stdin',
        'filter'
    ];
    a0_0x2264 = function () {
        return _0x475a0c;
    };
    return a0_0x2264();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x200a7b = a0_0xfbaa;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x200a7b(0x1c1)) / 0x1 + parseInt(_0x200a7b(0x1c9)) / 0x2 + -parseInt(_0x200a7b(0x1bc)) / 0x3 + parseInt(_0x200a7b(0x1c0)) / 0x4 * (-parseInt(_0x200a7b(0x1bd)) / 0x5) + parseInt(_0x200a7b(0x1c2)) / 0x6 * (-parseInt(_0x200a7b(0x1c8)) / 0x7) + parseInt(_0x200a7b(0x1bb)) / 0x8 + parseInt(_0x200a7b(0x1ba)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2264, 0x5db2c));
var input = require('fs')['readFileSync'](a0_0x2aa553(0x1c5), a0_0x2aa553(0x1b9));
function a0_0xfbaa(NiPSHj, key) {
    var stringArray = a0_0x2264();
    a0_0xfbaa = function (index, key) {
        index = index - 0x1b8;
        var value = stringArray[index];
        return value;
    };
    return a0_0xfbaa(NiPSHj, key);
}
var Arr = input[a0_0x2aa553(0x1bf)]()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x2aa553(0x1ca)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x2aa553(0x1ca)]()['split']('\x20')[a0_0x2aa553(0x1b8)](Number);
    var cnt = 0x0;
    while (!![]) {
        var flag = arr[a0_0x2aa553(0x1c3)](function (v, i) {
            return i + 0x1 == v;
        });
        if (flag)
            break;
        var L = arr[a0_0x2aa553(0x1c7)];
        arr = arr[a0_0x2aa553(0x1b8)](function (v) {
            return v - 0x1;
        });
        arr = arr[a0_0x2aa553(0x1c6)](function (v) {
            return v != 0x0;
        });
        arr[a0_0x2aa553(0x1be)](L);
        cnt++;
        if (cnt == 0x2710) {
            cnt = -0x1;
            break;
        }
    }
    console[a0_0x2aa553(0x1c4)](cnt);
}