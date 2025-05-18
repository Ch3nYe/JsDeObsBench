function a0_0x1cba(lwFsQU, key) {
    var stringArray = a0_0x531c();
    a0_0x1cba = function (index, key) {
        index = index - 0x1a8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1cba(lwFsQU, key);
}
var a0_0x26aaf4 = a0_0x1cba;
(function (stringArrayFunction, comparisonValue) {
    var _0x4abe93 = a0_0x1cba;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4abe93(0x1b1)) / 0x1 * (parseInt(_0x4abe93(0x1ae)) / 0x2) + -parseInt(_0x4abe93(0x1b3)) / 0x3 + -parseInt(_0x4abe93(0x1b5)) / 0x4 * (parseInt(_0x4abe93(0x1a8)) / 0x5) + -parseInt(_0x4abe93(0x1a9)) / 0x6 * (-parseInt(_0x4abe93(0x1b0)) / 0x7) + -parseInt(_0x4abe93(0x1b9)) / 0x8 * (-parseInt(_0x4abe93(0x1af)) / 0x9) + -parseInt(_0x4abe93(0x1b6)) / 0xa * (parseInt(_0x4abe93(0x1b8)) / 0xb) + -parseInt(_0x4abe93(0x1b7)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x531c, 0xda42e));
process[a0_0x26aaf4(0x1aa)][a0_0x26aaf4(0x1ac)]();
function a0_0x531c() {
    var _0x21cda1 = [
        '10388rgWLRL',
        '1671686RiTyEs',
        'utf8',
        '1894098uPWvxy',
        'split',
        '2116816RFvrpN',
        '380bKpzba',
        '5299416YmIixT',
        '179828ssNsDV',
        '224PRDOmn',
        '/dev/stdin',
        '5gpUWtJ',
        '2928QEjbSk',
        'stdin',
        'readFileSync',
        'resume',
        'setEncoding',
        '2MjftCL',
        '231921JSHpwk'
    ];
    a0_0x531c = function () {
        return _0x21cda1;
    };
    return a0_0x531c();
}
process[a0_0x26aaf4(0x1aa)][a0_0x26aaf4(0x1ad)](a0_0x26aaf4(0x1b2));
function Main(input) {
    var _0x402f2a = a0_0x26aaf4;
    var tmp = input[_0x402f2a(0x1b4)]('\x0a');
    var N = Number(tmp[0x0]);
    var pow = 0x1;
    for (var i = 0x1; i <= N; i++) {
        pow *= i;
        pow %= 0x3b9aca07;
    }
    console['log'](pow);
}
Main(require('fs')[a0_0x26aaf4(0x1ab)](a0_0x26aaf4(0x1ba), a0_0x26aaf4(0x1b2)));