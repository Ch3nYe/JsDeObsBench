var a0_0x312b3b = a0_0x5c6f;
console[a0_0x312b3b(0x0)](main(require('fs')[a0_0x312b3b(0x1)](a0_0x312b3b(0x2), a0_0x312b3b(0x3))));
function main(s) {
    var _0x34b7a3 = a0_0x5c6f;
    s = s['split']('\x0a')[_0x34b7a3(0x4)](a => +a);
    var n = s[0x0];
    s[0x0] = s[n];
    s[_0x34b7a3(0x5)]();
    s[_0x34b7a3(0x6)]((a, b) => a - b);
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
function a0_0x5c6f(NwhMBI, key) {
    var stringArray = a0_0x6fa0();
    a0_0x5c6f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c6f(NwhMBI, key);
}
function a0_0x6fa0() {
    var _0x1af73f = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'map',
        'pop',
        'sort'
    ];
    a0_0x6fa0 = function () {
        return _0x1af73f;
    };
    return a0_0x6fa0();
}