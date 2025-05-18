var a0_0x24f476 = a0_0x2d7d;
(function (stringArrayFunction, comparisonValue) {
    var _0x120c60 = a0_0x2d7d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x120c60(0x1e9)) / 0x1 * (-parseInt(_0x120c60(0x1eb)) / 0x2) + -parseInt(_0x120c60(0x1ea)) / 0x3 * (parseInt(_0x120c60(0x1dc)) / 0x4) + -parseInt(_0x120c60(0x1e5)) / 0x5 + -parseInt(_0x120c60(0x1e4)) / 0x6 * (-parseInt(_0x120c60(0x1e2)) / 0x7) + parseInt(_0x120c60(0x1dd)) / 0x8 + -parseInt(_0x120c60(0x1e1)) / 0x9 * (parseInt(_0x120c60(0x1e7)) / 0xa) + parseInt(_0x120c60(0x1e8)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x426b, 0x8e612));
function Main(input) {
    var _0x449765 = a0_0x2d7d;
    var input = input['split']('\x20');
    var n = input[0x0];
    var a = input[0x1];
    var b = input[0x2];
    var Sum = 0x0;
    for (j = 0x1; j <= n; j++) {
        if (0x0 <= j && j <= 0x9) {
            if (a <= j && j <= b) {
                Sum += j;
            }
        } else {
            var str = j['toString']();
            var arr = str['split']('')[_0x449765(0x1e6)](n => parseInt(n));
            var x = arr['reduce'](function (prev, current, i, arr) {
                return prev + current;
            });
        }
        ;
        if (a <= x && x <= b) {
            Sum += j;
        }
    }
    console[_0x449765(0x1e0)](Sum);
}
function a0_0x426b() {
    var _0x11f138 = [
        'readFileSync',
        'utf8',
        'log',
        '234iGoCKE',
        '230559deIZoA',
        '/dev/stdin',
        '72NrJZux',
        '4736095naPFSf',
        'map',
        '342340mpIuYE',
        '10542499nNMGPU',
        '4hPRYXS',
        '3tUjeGs',
        '556898rLqxoh',
        '4249212kQDNGa',
        '8122744wlyQDI'
    ];
    a0_0x426b = function () {
        return _0x11f138;
    };
    return a0_0x426b();
}
function a0_0x2d7d(XnFoda, key) {
    var stringArray = a0_0x426b();
    a0_0x2d7d = function (index, key) {
        index = index - 0x1dc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d7d(XnFoda, key);
}
Main(require('fs')[a0_0x24f476(0x1de)](a0_0x24f476(0x1e3), a0_0x24f476(0x1df)));