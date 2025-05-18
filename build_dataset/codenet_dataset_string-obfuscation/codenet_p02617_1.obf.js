const a0_0x1b7baa = a0_0x2993;
(function (stringArrayFunction, comparisonValue) {
    const _0x1c3d44 = a0_0x2993;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1c3d44(0x140)) / 0x1 * (-parseInt(_0x1c3d44(0x13e)) / 0x2) + parseInt(_0x1c3d44(0x13b)) / 0x3 + parseInt(_0x1c3d44(0x139)) / 0x4 + -parseInt(_0x1c3d44(0x13d)) / 0x5 + -parseInt(_0x1c3d44(0x135)) / 0x6 + -parseInt(_0x1c3d44(0x138)) / 0x7 + parseInt(_0x1c3d44(0x136)) / 0x8 * (parseInt(_0x1c3d44(0x134)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x45de, 0x85625));
function a0_0x45de() {
    const _0x253633 = [
        '63WEtMKU',
        '2780748PRsRkz',
        '1682216foQdPx',
        'readFileSync',
        '4738804cRFYRp',
        '862920xrWEux',
        'map',
        '2265105xeWvne',
        '/dev/stdin',
        '4123585RQBdDK',
        '5732HnizuR',
        'utf8',
        '24LceGWX'
    ];
    a0_0x45de = function () {
        return _0x253633;
    };
    return a0_0x45de();
}
const [_n, ..._edges] = require('fs')[a0_0x1b7baa(0x137)](a0_0x1b7baa(0x13c), a0_0x1b7baa(0x13f))['split'](/\n/);
function a0_0x2993(wbPfGI, key) {
    const stringArray = a0_0x45de();
    a0_0x2993 = function (index, key) {
        index = index - 0x134;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2993(wbPfGI, key);
}
const n = Number(_n);
let result = n * (n + 0x1) * (n + 0x2) / 0x6;
for (const _edge of _edges) {
    let [u, v] = _edge['split'](/\s/)[a0_0x1b7baa(0x13a)](Number);
    if (u > v) {
        [u, v] = [
            v,
            u
        ];
    }
    result -= u * (n - v + 0x1);
}
console['log'](result);