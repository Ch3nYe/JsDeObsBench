var a0_0x6fa994 = a0_0x265b;
function a0_0x1096() {
    var _0x379bf4 = [
        '2238294KNdyKS',
        '15258736rQvlqc',
        '3071257hOhxim',
        '836dIdgwt',
        'split',
        '/dev/stdin',
        'log',
        '4qJYKnS',
        'map',
        'utf8',
        'readFileSync',
        '4530099QFFadW',
        '13445nfSMVA',
        '296612INabNv',
        '9142011oRMUzR'
    ];
    a0_0x1096 = function () {
        return _0x379bf4;
    };
    return a0_0x1096();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x236349 = a0_0x265b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x236349(0x1e1)) / 0x1 * (parseInt(_0x236349(0x1d8)) / 0x2) + parseInt(_0x236349(0x1e5)) / 0x3 + parseInt(_0x236349(0x1dd)) / 0x4 * (parseInt(_0x236349(0x1d7)) / 0x5) + -parseInt(_0x236349(0x1da)) / 0x6 + -parseInt(_0x236349(0x1dc)) / 0x7 + -parseInt(_0x236349(0x1db)) / 0x8 + parseInt(_0x236349(0x1d9)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1096, 0xead67));
function a0_0x265b(PZImDt, key) {
    var stringArray = a0_0x1096();
    a0_0x265b = function (index, key) {
        index = index - 0x1d7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x265b(PZImDt, key);
}
function Main(input) {
    var _0x5ae4eb = a0_0x265b;
    input = input[_0x5ae4eb(0x1de)]('\x0a');
    n = Number(input[0x0][_0x5ae4eb(0x1de)]('\x20'));
    a = input[0x1][_0x5ae4eb(0x1de)]('\x20')[_0x5ae4eb(0x1e2)](Number);
    b = input[0x2][_0x5ae4eb(0x1de)]('\x20')[_0x5ae4eb(0x1e2)](Number);
    c = input[0x3][_0x5ae4eb(0x1de)]('\x20')[_0x5ae4eb(0x1e2)](Number);
    var count = 0x0;
    for (var i = 0x0; i < n; i++) {
        count += b[a[i] - 0x1];
        if (a[i] === a[i - 0x1] + 0x1) {
            count += c[a[i] - 0x2];
        }
    }
    console[_0x5ae4eb(0x1e0)](count);
}
Main(require('fs')[a0_0x6fa994(0x1e4)](a0_0x6fa994(0x1df), a0_0x6fa994(0x1e3)));