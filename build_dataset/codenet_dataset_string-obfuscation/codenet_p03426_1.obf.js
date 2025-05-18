var a0_0x4ec3e8 = a0_0x2065;
function a0_0x2065(xCvanU, key) {
    var stringArray = a0_0x1fdb();
    a0_0x2065 = function (index, key) {
        index = index - 0xc5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2065(xCvanU, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x46d0d3 = a0_0x2065;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x46d0d3(0xcd)) / 0x1 + -parseInt(_0x46d0d3(0xc9)) / 0x2 + -parseInt(_0x46d0d3(0xd0)) / 0x3 * (-parseInt(_0x46d0d3(0xd4)) / 0x4) + parseInt(_0x46d0d3(0xca)) / 0x5 * (parseInt(_0x46d0d3(0xce)) / 0x6) + parseInt(_0x46d0d3(0xcc)) / 0x7 * (-parseInt(_0x46d0d3(0xc6)) / 0x8) + parseInt(_0x46d0d3(0xd2)) / 0x9 * (-parseInt(_0x46d0d3(0xc5)) / 0xa) + parseInt(_0x46d0d3(0xd1)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1fdb, 0x92846));
function Main(input) {
    var _0x2da10c = a0_0x2065;
    input = input[_0x2da10c(0xd3)]('\x0a');
    var H = input[0x0][_0x2da10c(0xd3)]('\x20')[_0x2da10c(0xc8)](a => parseInt(a));
    var W = H[0x1];
    var D = H[0x2];
    H = H[0x0];
    var A;
    var x = new Array(H * W + 0x1)[_0x2da10c(0xcf)](0x0)[_0x2da10c(0xc8)](a => new Array(0x2));
    for (var i = 0x0; i < H; i++) {
        A = input[i + 0x1][_0x2da10c(0xd3)]('\x20')['map'](a => parseInt(a));
        for (var j = 0x0; j < W; j++) {
            x[A[j]][0x0] = i;
            x[A[j]][0x1] = j;
        }
    }
    var y = new Array(H * W + 0x1)['fill'](0x0);
    for (i = D + 0x1; i <= H * W; i++) {
        y[i] = y[i - D] + Math[_0x2da10c(0xc7)](x[i - D][0x0] - x[i][0x0]) + Math[_0x2da10c(0xc7)](x[i - D][0x1] - x[i][0x1]);
    }
    var Q = parseInt(input[H + 0x1]);
    var ans = new Array(Q)[_0x2da10c(0xcf)](0x0);
    for (i = 0x0; i < Q; i++) {
        var L = input[H + 0x2 + i][_0x2da10c(0xd3)]('\x20')[_0x2da10c(0xc8)](a => parseInt(a));
        var R = L[0x1];
        L = L[0x0];
        ans[i] = y[R] - y[L];
    }
    console[_0x2da10c(0xd5)](ans[_0x2da10c(0xcb)]('\x0a'));
}
Main(require('fs')['readFileSync'](a0_0x4ec3e8(0xd6), 'utf8'));
function a0_0x1fdb() {
    var _0x45349c = [
        '368385xqTioL',
        'join',
        '1502914WRMTRw',
        '685163qLYlAS',
        '66cGHPOX',
        'fill',
        '12VnGpHR',
        '9618378JGXiPz',
        '126261oYDfNt',
        'split',
        '447988YTIbqo',
        'log',
        '/dev/stdin',
        '400baLCJw',
        '8DTnHVb',
        'abs',
        'map',
        '143348hQdNdj'
    ];
    a0_0x1fdb = function () {
        return _0x45349c;
    };
    return a0_0x1fdb();
}