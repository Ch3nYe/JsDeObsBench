var a0_0x3c2dc3 = a0_0x590b;
function a0_0xc0d1() {
    var _0x492368 = [
        'length',
        'readFileSync',
        '21468nsPPFK',
        'test',
        'log',
        '2287530JjIBiG',
        '22dubNoi',
        '1256FiIuiV',
        '11wufJwX',
        'utf8',
        'split',
        '/dev/stdin',
        '8288046HFQhii',
        '910wkNxzc',
        '2760hzzWvH',
        '1863KxWZeX',
        '2514900jVeKYg',
        '4537GLlDpb',
        'shift',
        '31566DScfMP',
        '32TvArBz'
    ];
    a0_0xc0d1 = function () {
        return _0x492368;
    };
    return a0_0xc0d1();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xcad4ee = a0_0x590b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xcad4ee(0x85)) / 0x1 * (-parseInt(_0xcad4ee(0x8d)) / 0x2) + parseInt(_0xcad4ee(0x81)) / 0x3 * (-parseInt(_0xcad4ee(0x8e)) / 0x4) + parseInt(_0xcad4ee(0x94)) / 0x5 * (parseInt(_0xcad4ee(0x89)) / 0x6) + parseInt(_0xcad4ee(0x8c)) / 0x7 * (parseInt(_0xcad4ee(0x86)) / 0x8) + -parseInt(_0xcad4ee(0x93)) / 0x9 + parseInt(_0xcad4ee(0x82)) / 0xa * (parseInt(_0xcad4ee(0x8f)) / 0xb) + -parseInt(_0xcad4ee(0x80)) / 0xc * (parseInt(_0xcad4ee(0x83)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc0d1, 0xa2b5e));
input = require('fs')[a0_0x3c2dc3(0x88)](a0_0x3c2dc3(0x92), a0_0x3c2dc3(0x90));
function a0_0x590b(zMhFQI, key) {
    var stringArray = a0_0xc0d1();
    a0_0x590b = function (index, key) {
        index = index - 0x80;
        var value = stringArray[index];
        return value;
    };
    return a0_0x590b(zMhFQI, key);
}
lines = input[a0_0x3c2dc3(0x91)]('\x0a');
S = lines[a0_0x3c2dc3(0x84)]();
max = 0x0;
cnt = 0x0;
for (i = 0x0; i < S[a0_0x3c2dc3(0x87)]; i++) {
    if (/[AGCT]/[a0_0x3c2dc3(0x8a)](S[i])) {
        cnt++;
    } else {
        if (max < cnt) {
            max = cnt;
        }
        cnt = 0x0;
    }
}
console[a0_0x3c2dc3(0x8b)](max);