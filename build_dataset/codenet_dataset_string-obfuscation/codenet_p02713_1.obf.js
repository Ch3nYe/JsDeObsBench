var a0_0x32d900 = a0_0x281c;
(function (stringArrayFunction, comparisonValue) {
    var _0x5eacbf = a0_0x281c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5eacbf(0xca)) / 0x1 * (parseInt(_0x5eacbf(0xd3)) / 0x2) + parseInt(_0x5eacbf(0xd9)) / 0x3 + parseInt(_0x5eacbf(0xcf)) / 0x4 * (parseInt(_0x5eacbf(0xcd)) / 0x5) + parseInt(_0x5eacbf(0xd7)) / 0x6 * (parseInt(_0x5eacbf(0xcb)) / 0x7) + parseInt(_0x5eacbf(0xd2)) / 0x8 * (-parseInt(_0x5eacbf(0xd6)) / 0x9) + -parseInt(_0x5eacbf(0xd1)) / 0xa * (parseInt(_0x5eacbf(0xd0)) / 0xb) + -parseInt(_0x5eacbf(0xd5)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1b82, 0x6f250));
function gcd(i, j, k) {
    var max = 0x0;
    if (max < i) {
        max = i;
    }
    if (max < j) {
        max = j;
    }
    if (max < k) {
        max = k;
    }
    var a = 0x0;
    for (var count = 0x1; count <= max; count++) {
        if (i % count == 0x0 && i >= count && (j % count == 0x0 && j >= count) && (k % count == 0x0 && k >= count)) {
            a = count;
        }
    }
    return a;
}
function a0_0x281c(wjWwcO, key) {
    var stringArray = a0_0x1b82();
    a0_0x281c = function (index, key) {
        index = index - 0xca;
        var value = stringArray[index];
        return value;
    };
    return a0_0x281c(wjWwcO, key);
}
function a0_0x1b82() {
    var _0x59f0e8 = [
        '120TYaIpm',
        '114532eNhtQu',
        '190KvEmxE',
        '24AbeFCN',
        '7830FUpQHh',
        'log',
        '20173476PHCJch',
        '606834JXhnht',
        '78UmVawQ',
        'utf8',
        '1271373cPpBee',
        '139yPyQUt',
        '380009zVaPhZ',
        'readFileSync',
        '143795BamTiw',
        '/dev/stdin'
    ];
    a0_0x1b82 = function () {
        return _0x59f0e8;
    };
    return a0_0x1b82();
}
function Main(input) {
    var _0x39c37a = a0_0x281c;
    var N = parseInt(input, 0xa);
    var sum = 0x0;
    for (var i = 0x1; i <= N; i++) {
        for (var j = 0x1; j <= N; j++) {
            for (var k = 0x1; k <= N; k++) {
                sum += gcd(i, j, k);
            }
        }
    }
    console[_0x39c37a(0xd4)](sum);
}
Main(require('fs')[a0_0x32d900(0xcc)](a0_0x32d900(0xce), a0_0x32d900(0xd8)));