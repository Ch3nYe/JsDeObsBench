var a0_0x19547a = a0_0xa810;
function a0_0xa810(ySqRCL, key) {
    var stringArray = a0_0x1843();
    a0_0xa810 = function (index, key) {
        index = index - 0xa8;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa810(ySqRCL, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3aa164 = a0_0xa810;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3aa164(0xb6)) / 0x1 * (-parseInt(_0x3aa164(0xab)) / 0x2) + parseInt(_0x3aa164(0xae)) / 0x3 + parseInt(_0x3aa164(0xb3)) / 0x4 + -parseInt(_0x3aa164(0xb5)) / 0x5 + -parseInt(_0x3aa164(0xa9)) / 0x6 + parseInt(_0x3aa164(0xac)) / 0x7 * (parseInt(_0x3aa164(0xaf)) / 0x8) + parseInt(_0x3aa164(0xad)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1843, 0x8e956));
function Main(input) {
    var _0x2fe4cd = a0_0xa810;
    input = input[_0x2fe4cd(0xb2)]('\x0a');
    var mem = input[0x0][_0x2fe4cd(0xb2)]('\x20')[_0x2fe4cd(0xb0)](Number);
    var sum = 0x0;
    for (var i = 0x1; i < input[_0x2fe4cd(0xa8)]; i++) {
        var n = input[i]['split']('\x20')[_0x2fe4cd(0xb0)](Number);
        if (n[0x0] >= mem[0x1] && n[0x1] >= mem[0x2])
            sum++;
    }
    console[_0x2fe4cd(0xb4)](sum);
}
Main(require('fs')['readFileSync'](a0_0x19547a(0xb1), 'utf8')[a0_0x19547a(0xaa)]());
function a0_0x1843() {
    var _0x5e2cde = [
        '169256KSmIUT',
        'log',
        '2649370GaipGm',
        '824722tfRRxX',
        'length',
        '6510384AEfZXq',
        'trim',
        '2YwYWJW',
        '99505vNaFEW',
        '20835279NvQxby',
        '1913721BTeCTo',
        '16RfFrOz',
        'map',
        '/dev/stdin',
        'split'
    ];
    a0_0x1843 = function () {
        return _0x5e2cde;
    };
    return a0_0x1843();
}