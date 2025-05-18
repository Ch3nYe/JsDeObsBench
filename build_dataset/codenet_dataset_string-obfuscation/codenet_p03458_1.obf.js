function a0_0x5c30(JPdDql, key) {
    var stringArray = a0_0x5cad();
    a0_0x5c30 = function (index, key) {
        index = index - 0x165;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c30(JPdDql, key);
}
var a0_0x205063 = a0_0x5c30;
function a0_0x5cad() {
    var _0x26e2ac = [
        'readFileSync',
        '116474YgMzaP',
        '2hhMiwq',
        '8348IZZjdc',
        '24552SYcYwe',
        '3252kYOPzN',
        '9462LruQym',
        'fill',
        'split',
        '166240TqPfuQ',
        'map',
        '81IFRBXu',
        '18469HbtfMw',
        '680160EMIwHJ',
        '721MqeLhY',
        '/dev/stdin',
        '220eZmVWr',
        'utf8',
        'log'
    ];
    a0_0x5cad = function () {
        return _0x26e2ac;
    };
    return a0_0x5cad();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x578dbc = a0_0x5c30;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x578dbc(0x176)) / 0x1 * (-parseInt(_0x578dbc(0x175)) / 0x2) + parseInt(_0x578dbc(0x16c)) / 0x3 * (-parseInt(_0x578dbc(0x177)) / 0x4) + parseInt(_0x578dbc(0x16a)) / 0x5 + parseInt(_0x578dbc(0x167)) / 0x6 * (-parseInt(_0x578dbc(0x16f)) / 0x7) + -parseInt(_0x578dbc(0x16e)) / 0x8 + -parseInt(_0x578dbc(0x165)) / 0x9 * (-parseInt(_0x578dbc(0x171)) / 0xa) + parseInt(_0x578dbc(0x16d)) / 0xb * (parseInt(_0x578dbc(0x166)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5cad, 0x1f3ff));
function Main(input) {
    var _0x4f8851 = a0_0x5c30;
    input = input[_0x4f8851(0x169)]('\x0a');
    var N = input[0x0][_0x4f8851(0x169)]('\x20')[_0x4f8851(0x16b)](a => parseInt(a));
    var K = N[0x1];
    N = N[0x0];
    var x = [], y = [], c = [];
    for (var i = 0x0; i < N; i++) {
        x[i] = input[i + 0x1][_0x4f8851(0x169)]('\x20');
        y[i] = parseInt(x[i][0x1]) % (K * 0x2);
        c[i] = x[i][0x2] === 'W' ? 0x0 : 0x1;
        x[i] = parseInt(x[i][0x0]) % (K * 0x2);
    }
    var ans = 0x0;
    for (i = 0x0; i < K; i++) {
        var now = 0x0;
        var Y1 = new Array(K * 0x2)[_0x4f8851(0x168)](0x0), Y2 = new Array(K * 0x2)['fill'](0x0);
        for (var k = 0x0; k < N; k++) {
            if ((((x[k] + i) / K ^ y[k] / K) & 0x1) === c[k]) {
                now++;
                Y1[y[k]]++;
            } else
                Y2[y[k]]++;
        }
        if (ans < now)
            ans = now;
        if (ans < N - now)
            ans = N - now;
        for (var j = 0x0; j < K - 0x1; j++) {
            now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
            if (ans < now)
                ans = now;
            if (ans < N - now)
                ans = N - now;
        }
    }
    console[_0x4f8851(0x173)](ans);
}
Main(require('fs')[a0_0x205063(0x174)](a0_0x205063(0x170), a0_0x205063(0x172)));