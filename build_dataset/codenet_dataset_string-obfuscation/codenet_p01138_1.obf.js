function a0_0x48d3(cDOKom, key) {
    var stringArray = a0_0x2371();
    a0_0x48d3 = function (index, key) {
        index = index - 0x98;
        var value = stringArray[index];
        return value;
    };
    return a0_0x48d3(cDOKom, key);
}
var a0_0x379be9 = a0_0x48d3;
(function (stringArrayFunction, comparisonValue) {
    var _0x596a11 = a0_0x48d3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x596a11(0xa2)) / 0x1 + -parseInt(_0x596a11(0x9d)) / 0x2 + parseInt(_0x596a11(0xa0)) / 0x3 * (parseInt(_0x596a11(0x9e)) / 0x4) + -parseInt(_0x596a11(0xa8)) / 0x5 * (-parseInt(_0x596a11(0x9b)) / 0x6) + -parseInt(_0x596a11(0xa7)) / 0x7 + -parseInt(_0x596a11(0x98)) / 0x8 + -parseInt(_0x596a11(0xa4)) / 0x9 * (-parseInt(_0x596a11(0x9a)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2371, 0x47eba));
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
function a0_0x2371() {
    var _0x11f3a0 = [
        '3130oHXXvW',
        '109146lMcKZa',
        'length',
        '61240GHwtRS',
        '8nmHqYz',
        'log',
        '9483oWGqmM',
        'shift',
        '317613gxiaPa',
        'split',
        '31635MdlMHr',
        'map',
        'sort',
        '3523702bicqSf',
        '15HThnjw',
        '119080qSFIYC',
        'push'
    ];
    a0_0x2371 = function () {
        return _0x11f3a0;
    };
    return a0_0x2371();
}
var arr = input['trim']()[a0_0x379be9(0xa3)]('\x0a');
while (!![]) {
    var n = arr[a0_0x379be9(0xa1)]() - 0x0;
    if (n == 0x0)
        break;
    var ary = [];
    while (n--) {
        var hms = arr[a0_0x379be9(0xa1)]()[a0_0x379be9(0xa3)]('\x20');
        var start = hms[0x0]['split'](':')[a0_0x379be9(0xa5)](Number);
        var end = hms[0x1][a0_0x379be9(0xa3)](':')['map'](Number);
        start = start[0x0] * 0x3c * 0x3c + start[0x1] * 0x3c + start[0x2];
        end = end[0x0] * 0x3c * 0x3c + end[0x1] * 0x3c + end[0x2];
        ary[a0_0x379be9(0x99)]([
            start,
            end
        ]);
    }
    ary['sort'](function (a, b) {
        return a[0x0] - b[0x0];
    });
    var train = [];
    var cnt = 0x0;
    ary['forEach'](function (v) {
        var _0x274802 = a0_0x379be9;
        if (train[_0x274802(0x9c)] == 0x0) {
            cnt++;
            train[_0x274802(0x99)](v[0x1]);
        } else {
            train[_0x274802(0xa6)](function (a, b) {
                return a - b;
            });
            if (train[0x0] <= v[0x0]) {
                train[_0x274802(0xa1)]();
                train[_0x274802(0x99)](v[0x1]);
            } else {
                cnt++;
                train[_0x274802(0x99)](v[0x1]);
            }
        }
    });
    console[a0_0x379be9(0x9f)](cnt);
}