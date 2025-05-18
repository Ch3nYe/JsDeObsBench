function a0_0x2e67(rTmzgK, key) {
    var stringArray = a0_0x1d3a();
    a0_0x2e67 = function (index, key) {
        index = index - 0x1e6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e67(rTmzgK, key);
}
var a0_0x11d4fd = a0_0x2e67;
(function (stringArrayFunction, comparisonValue) {
    var _0x4ea3b7 = a0_0x2e67;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4ea3b7(0x1ea)) / 0x1 * (-parseInt(_0x4ea3b7(0x1e9)) / 0x2) + parseInt(_0x4ea3b7(0x1f5)) / 0x3 * (-parseInt(_0x4ea3b7(0x1eb)) / 0x4) + parseInt(_0x4ea3b7(0x1e6)) / 0x5 * (-parseInt(_0x4ea3b7(0x1ee)) / 0x6) + -parseInt(_0x4ea3b7(0x1f7)) / 0x7 * (parseInt(_0x4ea3b7(0x1e7)) / 0x8) + -parseInt(_0x4ea3b7(0x1ec)) / 0x9 + -parseInt(_0x4ea3b7(0x1f0)) / 0xa + -parseInt(_0x4ea3b7(0x1f2)) / 0xb * (-parseInt(_0x4ea3b7(0x1f3)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d3a, 0x34d97));
function Main(input) {
    var _0x23f259 = a0_0x2e67;
    input = input[_0x23f259(0x1ef)]('\x0a');
    var n = parseInt(input[0x0]);
    t = new Array(n)[_0x23f259(0x1f4)](0x0);
    a = new Array(n)[_0x23f259(0x1f4)](0x0);
    for (i = 0x0; i < n; i++) {
        t[i] = parseInt(input[i + 0x1][_0x23f259(0x1ef)]('\x20')[0x0]);
        a[i] = parseInt(input[i + 0x1]['split']('\x20')[0x1]);
    }
    var tvote = t[0x0];
    var avote = a[0x0];
    for (i = 0x1; i < n; i++) {
        if (Math[_0x23f259(0x1e8)](tvote / t[i]) * t[i] / t[i] * a[i] >= avote) {
            tvote = Math[_0x23f259(0x1e8)](tvote / t[i]) * t[i];
            avote = Math[_0x23f259(0x1e8)](tvote / t[i]) * t[i] / t[i] * a[i];
        } else {
            tvote = Math[_0x23f259(0x1e8)](avote / a[i]) * a[i] / a[i] * t[i];
            avote = Math[_0x23f259(0x1e8)](avote / a[i]) * a[i];
        }
    }
    var ans = avote + tvote;
    console[_0x23f259(0x1f6)]('%s', ans);
}
Main(require('fs')[a0_0x11d4fd(0x1ed)]('/dev/stdin', a0_0x11d4fd(0x1f1)));
function a0_0x1d3a() {
    var _0x5ca048 = [
        'split',
        '3776910oFEyLa',
        'utf8',
        '1078wLunwT',
        '203244ifRXjV',
        'fill',
        '481251ZjoXlO',
        'log',
        '46970OsSqMy',
        '10tmSoFL',
        '88AoMYAd',
        'ceil',
        '2ZPHZSE',
        '50788UspZaM',
        '8hcCLyV',
        '2247768oJMANf',
        'readFileSync',
        '1111440lOtLcy'
    ];
    a0_0x1d3a = function () {
        return _0x5ca048;
    };
    return a0_0x1d3a();
}