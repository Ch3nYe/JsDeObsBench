var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
const parse = (_0x1dc728, _0x578a09) => {
    return _0x1dc728['split'](_0x578a09)['map'](_0x2384e2 => parseInt(_0x2384e2));
};
const split = (_0x3f5e59, _0x49c5d8, _0x5a905d, _0x16cb97) => {
    var _0x1cdeba = parse(_0x3f5e59, _0x49c5d8);
    for (var _0x4337d2 = 0x0; _0x4337d2 < _0x1cdeba['length']; _0x4337d2++) {
        _0x5a905d[_0x16cb97[_0x4337d2]] = _0x1cdeba[_0x4337d2];
    }
};
var inp = {};
split(lines[0x0], '\x20', inp, [
    'x',
    'y',
    'a',
    'b',
    'c'
]);
var p = parse(lines[0x1], '\x20')['sort']((_0x4f103c, _0x4c124f) => _0x4c124f - _0x4f103c);
var q = parse(lines[0x2], '\x20')['sort']((_0x4b64f3, _0x2d5b53) => _0x2d5b53 - _0x4b64f3);
var r = parse(lines[0x3], '\x20')['sort']((_0x43dc3f, _0x806ecf) => _0x806ecf - _0x43dc3f);
p = p['slice'](0x0, inp['x']);
q = q['slice'](0x0, inp['y']);
console['log'](p['concat'](q, r)['sort']((_0x2369fb, _0x5983f5) => _0x5983f5 - _0x2369fb)['slice'](0x0, inp['x'] + inp['y'])['reduce']((_0x17be5f, _0x4c38c9) => _0x17be5f + _0x4c38c9, 0x0));