var a0_0x2f0a57 = a0_0x3e8f;
var input = require('fs')['readFileSync'](a0_0x2f0a57(0x0), a0_0x2f0a57(0x1));
var s = input['trim']()[a0_0x2f0a57(0x2)]('');
function a0_0x1e8b() {
    var _0x566cdd = [
        '/dev/stdin',
        'utf8',
        'split',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'map',
        'forEach',
        'log'
    ];
    a0_0x1e8b = function () {
        return _0x566cdd;
    };
    return a0_0x1e8b();
}
var abc = a0_0x2f0a57(0x3)['split']('');
function a0_0x3e8f(uxCjhq, key) {
    var stringArray = a0_0x1e8b();
    a0_0x3e8f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e8f(uxCjhq, key);
}
s = s[a0_0x2f0a57(0x4)](v => abc['indexOf'](v));
var cnt = 0x0;
var memo = 0x0;
s[a0_0x2f0a57(0x5)](v => {
    if (memo >= v)
        cnt++;
    memo = v;
});
console[a0_0x2f0a57(0x6)](cnt);