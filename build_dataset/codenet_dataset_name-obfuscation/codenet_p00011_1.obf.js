var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var w = +lines['shift']();
var n = +lines['shift']();
var list = [];
var line = null;
while (line = lines['shift']()) {
    var args = line['split'](',');
    list['push'](args);
}
var answers = [];
for (var i = 0x1; i <= w; i++) {
    var k = i;
    list['forEach'](function (_0x2369df) {
        if (_0x2369df[0x0] == k) {
            k = _0x2369df[0x1];
        } else if (_0x2369df[0x1] == k) {
            k = _0x2369df[0x0];
        }
    });
    answers[k] = i;
}
answers['shift']();
console['log'](answers['join']('\x0a'));