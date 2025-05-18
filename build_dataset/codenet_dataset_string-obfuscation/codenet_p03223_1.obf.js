var a0_0x394f35 = a0_0x4f34;
function a0_0x4f34(qHWQKC, key) {
    var stringArray = a0_0xd062();
    a0_0x4f34 = function (index, key) {
        index = index - 0x1c7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f34(qHWQKC, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2b24d7 = a0_0x4f34;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2b24d7(0x1c7)) / 0x1 + parseInt(_0x2b24d7(0x1d4)) / 0x2 + parseInt(_0x2b24d7(0x1d0)) / 0x3 * (-parseInt(_0x2b24d7(0x1d7)) / 0x4) + parseInt(_0x2b24d7(0x1cf)) / 0x5 + parseInt(_0x2b24d7(0x1d6)) / 0x6 + parseInt(_0x2b24d7(0x1ce)) / 0x7 * (parseInt(_0x2b24d7(0x1ca)) / 0x8) + -parseInt(_0x2b24d7(0x1c8)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd062, 0x96f97));
console[a0_0x394f35(0x1c9)](main(require('fs')[a0_0x394f35(0x1cb)](a0_0x394f35(0x1d3), a0_0x394f35(0x1d2))));
function a0_0xd062() {
    var _0x1ef106 = [
        'readFileSync',
        'pop',
        'sort',
        '4309256woLvrE',
        '4267540mcXzFY',
        '3hOaGIE',
        'split',
        'utf8',
        '/dev/stdin',
        '230580yOsHtA',
        'map',
        '615714yEimmC',
        '1678472BMvbTH',
        '1114120RRIfuR',
        '1354536AIaVIw',
        'log',
        '16HPHbTq'
    ];
    a0_0xd062 = function () {
        return _0x1ef106;
    };
    return a0_0xd062();
}
function main(s) {
    var _0x5c3b19 = a0_0x394f35;
    s = s[_0x5c3b19(0x1d1)]('\x0a')[_0x5c3b19(0x1d5)](a => +a);
    var n = s[0x0];
    s[0x0] = s[n];
    s[_0x5c3b19(0x1cc)]();
    s[_0x5c3b19(0x1cd)]((a, b) => a - b);
    var ans = 0x0;
    var m = n + 0x1 >> 0x1;
    for (var i = 0x0; i < m; i++) {
        ans -= s[i] * 0x2;
    }
    for (; i < n; i++) {
        ans += s[i] * 0x2;
    }
    if (n % 0x2 === 0x0)
        return ans - s[m] + s[m - 0x1];
    if (s[m - 0x1] + s[m - 0x2] > s[m - 0x1] * 0x3 - s[m])
        return ans + s[m - 0x1] + s[m - 0x2];
    else
        return ans + s[m - 0x1] * 0x3 - s[m];
}