function a0_0x24a4(eOWmrA, key) {
    var stringArray = a0_0x4a17();
    a0_0x24a4 = function (index, key) {
        index = index - 0x14c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x24a4(eOWmrA, key);
}
var a0_0x56174f = a0_0x24a4;
function a0_0x4a17() {
    var _0x56db34 = [
        '12CCvrxU',
        'utf8',
        'map',
        '2480471aSTejL',
        'reverse',
        '2815608pXeCpv',
        'floor',
        'split',
        'log',
        '1369616qmOEoW',
        '/dev/stdin',
        'readFileSync',
        'length',
        '619256SNPooC',
        '1482620YeKxgm',
        '90vrgjYx',
        '1026610gqTsmZ',
        'slice',
        '977136tNTKXH',
        '3AiiRjD',
        'sort'
    ];
    a0_0x4a17 = function () {
        return _0x56db34;
    };
    return a0_0x4a17();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4d00eb = a0_0x24a4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4d00eb(0x153)) / 0x1 + -parseInt(_0x4d00eb(0x15f)) / 0x2 * (-parseInt(_0x4d00eb(0x154)) / 0x3) + -parseInt(_0x4d00eb(0x156)) / 0x4 * (parseInt(_0x4d00eb(0x14f)) / 0x5) + parseInt(_0x4d00eb(0x15b)) / 0x6 + parseInt(_0x4d00eb(0x159)) / 0x7 + -parseInt(_0x4d00eb(0x14e)) / 0x8 * (parseInt(_0x4d00eb(0x150)) / 0x9) + -parseInt(_0x4d00eb(0x151)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4a17, 0xaf99e));
function Main(input) {
    var _0x24e44f = a0_0x24a4;
    input = input[_0x24e44f(0x15d)]('\x0a');
    var N = input[0x0];
    var L = input[0x1]['split']('\x20')[_0x24e44f(0x158)](Number);
    var sum = 0x0;
    L[_0x24e44f(0x155)](function (a, b) {
        return b - a;
    });
    for (var i = 0x0; i < N - 0x1; i++) {
        for (var j = i + 0x1; j < N; j++) {
            var tag = L[i] - L[j];
            var arr = L[_0x24e44f(0x152)](0x0, L[_0x24e44f(0x14d)]);
            arr['splice'](0x0, j + 0x1);
            arr[_0x24e44f(0x15a)]();
            sum += arr[_0x24e44f(0x14d)] - caninsert(arr, tag);
        }
    }
    console[_0x24e44f(0x15e)](sum);
}
Main(require('fs')[a0_0x56174f(0x14c)](a0_0x56174f(0x160), a0_0x56174f(0x157)));
function caninsert(array, value) {
    var _0x370b9e = a0_0x56174f;
    value += 0.1;
    var lower = 0x0;
    var upper = array['length'];
    while (lower < upper) {
        var mid = Math[_0x370b9e(0x15c)](lower + (upper - lower) / 0x2);
        if (array[mid] <= value) {
            lower = mid + 0x1;
        } else {
            upper = mid;
        }
    }
    return lower;
}
;