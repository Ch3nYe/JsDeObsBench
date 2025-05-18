function bomb(_0x459e2e) {
    console['log'](_0x459e2e['join']('\x20'));
    if (_0x459e2e[0x0] === 0x1)
        return;
    var _0x595a7c = _0x459e2e['length'] - 0x1;
    while (!![]) {
        if (_0x459e2e[_0x595a7c] !== 0x1) {
            if (_0x459e2e[_0x595a7c] === 0x2 || _0x595a7c === _0x459e2e['length'] - 0x1) {
                _0x459e2e[_0x595a7c]--;
                _0x459e2e['push'](0x1);
            } else {
                _0x459e2e[_0x595a7c]--;
                _0x459e2e[_0x595a7c + 0x1]++;
            }
            break;
        }
        _0x595a7c--;
    }
    bomb(_0x459e2e);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    bomb([n]);
}