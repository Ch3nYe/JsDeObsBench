'use strict';
const a0_0x54f269 = a0_0x521d;
function a0_0x5588() {
    const _0x294e67 = [
        '3045969yNSvGV',
        '516422ZojBtf',
        'utf8',
        '/dev/stdin',
        '9662845KxbXFI',
        'shift',
        'pow',
        '7563654JRMTqF',
        '4zjfACm',
        '1046694bhiRZW',
        'ceil',
        'trim',
        '3eVUzfF',
        '461149kFLSlT',
        '18165WkMdPk',
        'readFileSync',
        'map',
        'split',
        'push',
        '4304ArkzRD',
        '40sQxEyq'
    ];
    a0_0x5588 = function () {
        return _0x294e67;
    };
    return a0_0x5588();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x112113 = a0_0x521d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x112113(0x1c6)) / 0x1 + -parseInt(_0x112113(0x1ba)) / 0x2 * (parseInt(_0x112113(0x1c5)) / 0x3) + parseInt(_0x112113(0x1c1)) / 0x4 * (-parseInt(_0x112113(0x1bd)) / 0x5) + parseInt(_0x112113(0x1c0)) / 0x6 + parseInt(_0x112113(0x1c7)) / 0x7 * (parseInt(_0x112113(0x1b7)) / 0x8) + -parseInt(_0x112113(0x1b9)) / 0x9 + parseInt(_0x112113(0x1b8)) / 0xa * (parseInt(_0x112113(0x1c2)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5588, 0xeca2f));
function main(input) {
    const _0x26d2a6 = a0_0x521d;
    input = input[_0x26d2a6(0x1c4)]()[_0x26d2a6(0x1b5)]('\x0a');
    const DG = input[_0x26d2a6(0x1be)]()[_0x26d2a6(0x1b5)]('\x20')[_0x26d2a6(0x1b4)](v => Number(v));
    input = input[_0x26d2a6(0x1b4)](v => v['split']('\x20')[_0x26d2a6(0x1b4)](v => Number(v)));
    const calc = (a, r) => {
        const _0x138797 = _0x26d2a6;
        let count = [Math[_0x138797(0x1bf)](0xa, 0x8)];
        for (let i = 0x0; i < DG[0x0]; i++) {
            const cur = Math['pow'](0x2, i);
            if ((a & cur) === cur) {
                const points = (i + 0x1) * 0x64;
                let max = points * input[i][0x0] + input[i][0x1];
                let num = Math[_0x138797(0x1c3)](r / points);
                if (max < r) {
                    count[_0x138797(0x1b6)](input[i][0x0] + calc(a - cur, r - max));
                } else {
                    count[_0x138797(0x1b6)](num < input[i][0x0] ? num : input[i][0x0]);
                }
            }
        }
        return Math['min'](...count);
    };
    console['log'](calc(Math[_0x26d2a6(0x1bf)](0x2, DG[0x0]) - 0x1, DG[0x1]));
}
function a0_0x521d(ySXOio, key) {
    const stringArray = a0_0x5588();
    a0_0x521d = function (index, key) {
        index = index - 0x1b3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x521d(ySXOio, key);
}
main(require('fs')[a0_0x54f269(0x1b3)](a0_0x54f269(0x1bc), a0_0x54f269(0x1bb)));