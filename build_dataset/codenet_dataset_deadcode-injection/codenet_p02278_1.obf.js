var a0_0x589e21 = a0_0x5171;
config = {
    'input': a0_0x589e21(0x0),
    'newline': '\x0a'
};
line = require('fs')[a0_0x589e21(0x1)](config[a0_0x589e21(0x2)], a0_0x589e21(0x3))[a0_0x589e21(0x4)](config['newline'], 0x2);
function a0_0x20eb() {
    var _0x168cef = [
        '/dev/stdin',
        'readFileSync',
        'input',
        'ascii',
        'split',
        'map',
        'concat',
        'sort',
        'length',
        'log'
    ];
    a0_0x20eb = function () {
        return _0x168cef;
    };
    return a0_0x20eb();
}
w = line[0x1][a0_0x589e21(0x4)]('\x20')[a0_0x589e21(0x5)](Number);
function a0_0x5171(GPHdsb, key) {
    var stringArray = a0_0x20eb();
    a0_0x5171 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5171(GPHdsb, key);
}
sorted = [][a0_0x589e21(0x6)](w);
sorted[a0_0x589e21(0x7)](function (a, b) {
    return a - b;
});
cost = 0x0;
for (i = w[a0_0x589e21(0x8)] - 0x1; i >= 0x0; i--) {
    idx = w['indexOf'](sorted[i]);
    if (idx === i)
        continue;
    cost += w[i] + w[idx];
    tmp = w[i];
    w[i] = w[idx];
    w[idx] = tmp;
}
console[a0_0x589e21(0x9)](cost);