function main(_0x496177) {
    var _0x587164 = _0x496177['split']('\x20');
    var _0x41d99e = parseInt(_0x587164[0x0], 0xa);
    var _0x1f7f37 = parseInt(_0x587164[0x1], 0xa);
    if (_0x41d99e === _0x1f7f37) {
        return 'Yes';
    } else {
        return 'No';
    }
}
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));