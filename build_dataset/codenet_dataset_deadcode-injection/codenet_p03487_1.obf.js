var a0_0x59cccc = a0_0x366f;
var lines = [];
var result = 0x0;
var readline = require(a0_0x59cccc(0x0));
function a0_0x1622() {
    var _0x5c8cd6 = [
        'readline',
        'stdout',
        'push',
        'close',
        'split',
        'sort',
        'MTyyC',
        'length',
        'GwkIx',
        'min',
        'abs',
        'LIsgt',
        'log'
    ];
    a0_0x1622 = function () {
        return _0x5c8cd6;
    };
    return a0_0x1622();
}
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process[a0_0x59cccc(0x1)]
});
function a0_0x366f(sUgFON, key) {
    var stringArray = a0_0x1622();
    a0_0x366f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x366f(sUgFON, key);
}
rl['on']('line', function (x) {
    var _0x1ea536 = a0_0x366f;
    lines[_0x1ea536(0x2)](x);
});
rl['on'](a0_0x59cccc(0x3), function () {
    var _0x153dc2 = a0_0x366f;
    var N = Number(lines[0x0]);
    var a = lines[0x1][_0x153dc2(0x4)]('\x20')['map'](value => Number(value));
    a[_0x153dc2(0x5)]((a, b) => a - b);
    var counter = Array(N)['fill'](0x0);
    var j = 0x0;
    counter[0x0] = [
        a[0x0],
        0x1
    ];
    for (var i = 0x1; i < N; i++) {
        if (a[i] !== a[i - 0x1]) {
            j++;
            counter[j] = [
                a[i],
                0x1
            ];
        } else {
            if (_0x153dc2(0x6) !== 'bGhhW') {
                var cnt = counter[j][0x1] + 0x1;
                counter[j] = [
                    a[i],
                    cnt
                ];
            } else {
                j++;
                counter[j] = [
                    a[i],
                    0x1
                ];
            }
        }
    }
    for (var i = 0x0; i < counter[_0x153dc2(0x7)]; i++) {
        if (counter[i][0x0] === counter[i][0x1]) {
            continue;
        } else {
            if (_0x153dc2(0x8) !== _0x153dc2(0x8)) {
                result += Math[_0x153dc2(0x9)](counter[i][0x1], Math[_0x153dc2(0xa)](counter[i][0x0] - counter[i][0x1]));
            } else {
                if (counter[i] === 0x0) {
                    if (_0x153dc2(0xb) !== 'UGMXi') {
                        continue;
                    } else {
                        if (a[i] !== a[i - 0x1]) {
                            j++;
                            counter[j] = [
                                a[i],
                                0x1
                            ];
                        } else {
                            var cnt = counter[j][0x1] + 0x1;
                            counter[j] = [
                                a[i],
                                cnt
                            ];
                        }
                    }
                } else {
                    result += Math[_0x153dc2(0x9)](counter[i][0x1], Math['abs'](counter[i][0x0] - counter[i][0x1]));
                }
            }
        }
    }
    console[_0x153dc2(0xc)](result);
});