var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr = arr['map'](_0x1a4641 => _0x1a4641['split']('\x20')['map'](Number));
var [n, t] = arr['shift']();
var max = 0x0;
arr['forEach'](_0x5bdd97 => {
    max = Math['max'](max, _0x5bdd97[0x1] / _0x5bdd97[0x0]);
});
console['log']((max * t)['toFixed'](0x6));