const a0_0x20b511 = a0_0x20cf;
(function (stringArrayFunction, comparisonValue) {
    const _0x41592e = a0_0x20cf;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x41592e(0x19c)) / 0x1 + parseInt(_0x41592e(0x197)) / 0x2 + -parseInt(_0x41592e(0x199)) / 0x3 * (parseInt(_0x41592e(0x196)) / 0x4) + parseInt(_0x41592e(0x19d)) / 0x5 + parseInt(_0x41592e(0x190)) / 0x6 * (parseInt(_0x41592e(0x194)) / 0x7) + -parseInt(_0x41592e(0x19a)) / 0x8 + parseInt(_0x41592e(0x198)) / 0x9 * (parseInt(_0x41592e(0x195)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x36e7, 0xc5120));
var input = require('fs')[a0_0x20b511(0x193)](a0_0x20b511(0x19e), a0_0x20b511(0x192));
function a0_0x20cf(JVTkzh, key) {
    const stringArray = a0_0x36e7();
    a0_0x20cf = function (index, key) {
        index = index - 0x18e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x20cf(JVTkzh, key);
}
function a0_0x36e7() {
    const _0x3032e0 = [
        '23980JihKpS',
        '117664GIWsQM',
        '1467304HHScUk',
        '1773bvODbf',
        '51GqCWEq',
        '12776176cfvYUA',
        'log',
        '850867zWhDWC',
        '683815xnGPGB',
        '/dev/stdin',
        'map',
        'floor',
        'reduce',
        '4263636lpSaJE',
        'split',
        'utf8',
        'readFileSync',
        '7nfwpNy'
    ];
    a0_0x36e7 = function () {
        return _0x3032e0;
    };
    return a0_0x36e7();
}
var Arr = input['trim']()[a0_0x20b511(0x191)]('\x0a');
const binarySearch = (key, arr, N) => {
    const _0x4b6223 = a0_0x20b511;
    let mid;
    let left = 0x0;
    let right = N;
    while (left < right) {
        mid = Math[_0x4b6223(0x18e)]((left + right) / 0x2);
        if (key < arr[mid])
            right = mid;
        else if (key > arr[mid])
            left = mid + 0x1;
        else
            return 0x1;
    }
    return 0x0;
};
(function () {
    const _0xed41 = a0_0x20b511;
    const N1 = Number(Arr[0x0]);
    const arr1 = Arr[0x1]['split']('\x20')[_0xed41(0x19f)](Number);
    const arr2 = Arr[0x3][_0xed41(0x191)]('\x20')[_0xed41(0x19f)](Number);
    console[_0xed41(0x19b)](arr2['map'](e => binarySearch(e, arr1, N1))[_0xed41(0x18f)]((a, b) => a + b, 0x0));
}());