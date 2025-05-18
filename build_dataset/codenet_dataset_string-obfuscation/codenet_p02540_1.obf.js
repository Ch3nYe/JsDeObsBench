var a0_0x224395 = a0_0x58ae;
(function (stringArrayFunction, comparisonValue) {
    var _0x58da9c = a0_0x58ae;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x58da9c(0x1bd)) / 0x1 * (-parseInt(_0x58da9c(0x1b8)) / 0x2) + -parseInt(_0x58da9c(0x1b1)) / 0x3 + -parseInt(_0x58da9c(0x1ba)) / 0x4 * (parseInt(_0x58da9c(0x1bc)) / 0x5) + parseInt(_0x58da9c(0x1bb)) / 0x6 * (parseInt(_0x58da9c(0x1b9)) / 0x7) + parseInt(_0x58da9c(0x1c1)) / 0x8 + -parseInt(_0x58da9c(0x1b7)) / 0x9 + -parseInt(_0x58da9c(0x1be)) / 0xa * (-parseInt(_0x58da9c(0x1b6)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1df7, 0x19ea7));
function a0_0x1df7() {
    var _0x403690 = [
        '1490qFJBLk',
        'map',
        'push',
        '1003944WJdPpI',
        '542262UXRppn',
        'split',
        '/dev/stdin',
        'utf8',
        'readFileSync',
        '10120BaEbjq',
        '1405773rEazSi',
        '14iacGSR',
        '8057AvTVRv',
        '20iujpOQ',
        '486VOcMvy',
        '55425qZHCLg',
        '20389tKCIFQ'
    ];
    a0_0x1df7 = function () {
        return _0x403690;
    };
    return a0_0x1df7();
}
function Main(input) {
    var _0x1ce4a3 = a0_0x58ae;
    input = input[_0x1ce4a3(0x1b2)]('\x0a');
    const N = parseInt(input[0x0], 0xa);
    var x = [];
    var y = [];
    for (var i = 0x1; i <= N; i++) {
        tmp = input[i][_0x1ce4a3(0x1b2)]('\x20')[_0x1ce4a3(0x1bf)](n => parseInt(n, 0xa));
        x[_0x1ce4a3(0x1c0)](tmp[0x0]);
        y['push'](tmp[0x1]);
    }
    var counts = [];
    for (var j = 0x0; j < N; j++) {
        var count = 0x0;
        for (var k = 0x0; k < N; k++) {
            if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                count++;
            }
        }
        counts[_0x1ce4a3(0x1c0)](parseInt(count, 0xa));
    }
    for (var j = 0x0; j < N; j++) {
        var count = 0x1;
        for (var k = 0x0; k < N; k++) {
            if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                count = count + counts[k];
            }
        }
        console['log'](count);
    }
}
function a0_0x58ae(icWPKf, key) {
    var stringArray = a0_0x1df7();
    a0_0x58ae = function (index, key) {
        index = index - 0x1b1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58ae(icWPKf, key);
}
Main(require('fs')[a0_0x224395(0x1b5)](a0_0x224395(0x1b3), a0_0x224395(0x1b4)));