var a0_0x1bea3b = a0_0x4ec3;
(function (stringArrayFunction, comparisonValue) {
    var _0x5175a1 = a0_0x4ec3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5175a1(0x1c1)) / 0x1 * (parseInt(_0x5175a1(0x1ca)) / 0x2) + -parseInt(_0x5175a1(0x1cc)) / 0x3 * (-parseInt(_0x5175a1(0x1c7)) / 0x4) + parseInt(_0x5175a1(0x1c5)) / 0x5 + -parseInt(_0x5175a1(0x1ce)) / 0x6 + -parseInt(_0x5175a1(0x1be)) / 0x7 * (-parseInt(_0x5175a1(0x1c3)) / 0x8) + parseInt(_0x5175a1(0x1cb)) / 0x9 * (-parseInt(_0x5175a1(0x1cd)) / 0xa) + -parseInt(_0x5175a1(0x1bf)) / 0xb * (parseInt(_0x5175a1(0x1c0)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f4b, 0xd9234));
input = require('fs')[a0_0x1bea3b(0x1c8)](a0_0x1bea3b(0x1c4), a0_0x1bea3b(0x1c2));
lines = input['split']('\x0a');
line = lines['shift']()[a0_0x1bea3b(0x1c9)]('\x20');
function a0_0x4ec3(xEQWqj, key) {
    var stringArray = a0_0x2f4b();
    a0_0x4ec3 = function (index, key) {
        index = index - 0x1be;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ec3(xEQWqj, key);
}
N = line[0x0] * 0x1;
M = line[0x1] * 0x1;
b = [];
function a0_0x2f4b() {
    var _0xa61eb9 = [
        'readFileSync',
        'split',
        '202358yZVaFH',
        '18tqApdy',
        '69kXHKBB',
        '7669070zhWfqq',
        '764082TYvxWE',
        '49GDyfpV',
        '11eLOZHe',
        '16418076dLnBxZ',
        '1oWuPMQ',
        'utf8',
        '1661592DGCoKK',
        '/dev/stdin',
        '5547360VSyzsF',
        'log',
        '253312NqmGGW'
    ];
    a0_0x2f4b = function () {
        return _0xa61eb9;
    };
    return a0_0x2f4b();
}
r = [];
for (i = 0x1; i <= N; i++) {
    b[i] = 0x1;
    r[i] = 0x0;
}
r[0x1] = 0x1;
for (i = 0x0; i < M; i++) {
    l = lines[i][a0_0x1bea3b(0x1c9)]('\x20');
    x = l[0x0] * 0x1;
    y = l[0x1] * 0x1;
    if (r[x]) {
        r[y] += 0x1;
    }
    if (r[x] && b[x] == 0x1) {
        r[x] = 0x0;
    }
    b[x] -= 0x1;
    b[y] += 0x1;
}
cnt = 0x0;
for (i = 0x1; i <= N; i++) {
    if (r[i] > 0x0) {
        cnt++;
    }
}
console[a0_0x1bea3b(0x1c6)](cnt);