var a0_0x3de27d = a0_0x1a23;
var input = require('fs')['readFileSync'](a0_0x3de27d(0x0), a0_0x3de27d(0x1));
function a0_0x1a23(TtGhvz, key) {
    var stringArray = a0_0x344b();
    a0_0x1a23 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a23(TtGhvz, key);
}
input = input['trim']();
input = input[a0_0x3de27d(0x2)]();
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
var obj = {};
for (var i = 0x0; i < abc[a0_0x3de27d(0x3)]; i++)
    obj[abc[i]] = 0x0;
input = input['replace'](/[a-z]/g, function (str) {
    obj[str]++;
    return str;
});
abc['forEach'](function (v, i) {
    var _0x50f6c5 = a0_0x1a23;
    console[_0x50f6c5(0x4)](v + _0x50f6c5(0x5) + obj[v]);
});
function a0_0x344b() {
    var _0x23aae6 = [
        '/dev/stdin',
        'utf8',
        'toLowerCase',
        'length',
        'log',
        '\x20:\x20'
    ];
    a0_0x344b = function () {
        return _0x23aae6;
    };
    return a0_0x344b();
}