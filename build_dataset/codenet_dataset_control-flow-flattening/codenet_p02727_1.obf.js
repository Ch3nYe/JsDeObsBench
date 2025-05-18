var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
const parse = (s, sep) => {
    return s['split'](sep)['map'](v => parseInt(v));
};
const split = (s, sep, result, keys) => {
    var NBCeVm = {
        'SmFEP': function (x, y) {
            return x < y;
        }
    };
    var arr = parse(s, sep);
    for (var i = 0x0; NBCeVm['SmFEP'](i, arr['length']); i++) {
        result[keys[i]] = arr[i];
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
var p = parse(lines[0x1], '\x20')['sort']((a, b) => b - a);
var q = parse(lines[0x2], '\x20')['sort']((a, b) => b - a);
var r = parse(lines[0x3], '\x20')['sort']((a, b) => b - a);
p = p['slice'](0x0, inp['x']);
q = q['slice'](0x0, inp['y']);
console['log'](p['concat'](q, r)['sort']((a, b) => b - a)['slice'](0x0, inp['x'] + inp['y'])['reduce']((a, b) => a + b, 0x0));