function main(_0x2466c3) {
    abc = _0x2466c3['split']('\x20');
    abc = abc['sort']();
    a = '';
    a += abc[0x2];
    a += abc[0x1];
    a = parseInt(a, 0xa);
    b = parseInt(abc[0x0], 0xa);
    console['log'](a + b);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));