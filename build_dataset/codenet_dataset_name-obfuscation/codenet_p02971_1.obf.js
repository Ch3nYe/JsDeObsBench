'use strict';
function main(_0x160c0b) {
    var _0x459c99 = _0x160c0b['split']('\x0a');
    var _0x10c4c9 = _0x459c99[0x0];
    var _0x125faa = [];
    for (var _0xad2582 = 0x1; _0x10c4c9 >= _0xad2582; _0xad2582++) {
        _0x125faa['push'](_0x459c99[_0xad2582]);
    }
    for (var _0x51eefa = 0x0, _0x472a44 = _0x125faa['length']; _0x51eefa < _0x472a44; ++_0x51eefa) {
        var _0x4c1918 = _0x125faa['slice'](0x0, _0x125faa['length']);
        _0x4c1918['splice'](_0x51eefa, 0x1);
        console['log'](Math['max']['apply'](null, _0x4c1918));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));