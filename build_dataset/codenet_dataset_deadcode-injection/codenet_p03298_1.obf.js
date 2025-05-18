function a0_0x5e36(GICXHl, key) {
    var stringArray = a0_0x566a();
    a0_0x5e36 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e36(GICXHl, key);
}
function a0_0x566a() {
    var _0x5383b6 = [
        'readFileSync',
        'split',
        'log'
    ];
    a0_0x566a = function () {
        return _0x5383b6;
    };
    return a0_0x566a();
}
var a0_0x8e1098 = a0_0x5e36;
m = ('' + require('fs')[a0_0x8e1098(0x0)](0x0))[a0_0x8e1098(0x1)]`
`;
n = m[a = 0x0];
s = m[0x1];
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[i] + u : u + s[i];
    m[u] = -~m[u];
}
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[0x2 * n + ~i] + u : u + s[0x2 * n + ~i];
    a += ~~m[u];
}
console[a0_0x8e1098(0x2)](a);