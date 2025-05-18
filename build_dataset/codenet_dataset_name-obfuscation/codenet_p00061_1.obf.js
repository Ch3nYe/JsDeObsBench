var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a0,0\x0a');
var inputA = Arr[0x0]['split']('\x0a');
var inputB = Arr[0x1]['split']('\x0a')['map'](Number);
var obj = {};
var s = [];
inputA['forEach'](function (_0x227f08) {
    var _0x542b04 = _0x227f08['split'](',')['map'](Number);
    obj[_0x542b04[0x0]] = _0x542b04[0x1];
    s['push'](_0x542b04[0x1]);
});
s['sort'](function (_0x2b8bfe, _0x4b672b) {
    return _0x4b672b - _0x2b8bfe;
});
var s0 = s[0x0];
var t = [s0];
for (var i = 0x1; i < s['length']; i++) {
    if (s0 == s[i])
        continue;
    s0 = s[i];
    t['push'](s[i]);
}
inputB['forEach'](function (_0x39445f) {
    console['log'](t['indexOf'](obj[_0x39445f]) + 0x1);
});