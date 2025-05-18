var a0_0x2bf8e4 = a0_0x5fec;
function a0_0x1a2d() {
    var _0x1277fb = [
        'gQwoy',
        'iTzFU',
        'split',
        'map',
        'push',
        'tIQwD',
        'QzxHM',
        'xpkIQ',
        'RpZof',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1a2d = function () {
        return _0x1277fb;
    };
    return a0_0x1a2d();
}
function a0_0x5fec(PXAfUZ, key) {
    var stringArray = a0_0x1a2d();
    a0_0x5fec = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5fec(PXAfUZ, key);
}
function Main(input) {
    var _0x509e7a = a0_0x5fec;
    input = input['split']('\x0a');
    const N = parseInt(input[0x0], 0xa);
    var x = [];
    var y = [];
    for (var i = 0x1; i <= N; i++) {
        if (_0x509e7a(0x0) !== _0x509e7a(0x1)) {
            tmp = input[i][_0x509e7a(0x2)]('\x20')[_0x509e7a(0x3)](n => parseInt(n, 0xa));
            x[_0x509e7a(0x4)](tmp[0x0]);
            y[_0x509e7a(0x4)](tmp[0x1]);
        } else {
            if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                count = count + counts[k];
            }
        }
    }
    var counts = [];
    for (var j = 0x0; j < N; j++) {
        if (_0x509e7a(0x5) !== _0x509e7a(0x5)) {
            count++;
        } else {
            var count = 0x0;
            for (var k = 0x0; k < N; k++) {
                if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                    count++;
                }
            }
            counts['push'](parseInt(count, 0xa));
        }
    }
    for (var j = 0x0; j < N; j++) {
        var count = 0x1;
        for (var k = 0x0; k < N; k++) {
            if ('OHIno' !== _0x509e7a(0x6)) {
                if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                    if (_0x509e7a(0x7) === _0x509e7a(0x8)) {
                        if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                            count++;
                        }
                    } else {
                        count = count + counts[k];
                    }
                }
            } else {
                count = count + counts[k];
            }
        }
        console[_0x509e7a(0x9)](count);
    }
}
Main(require('fs')['readFileSync'](a0_0x2bf8e4(0xa), a0_0x2bf8e4(0xb)));