var a0_0x37a7f5 = a0_0xfa6d;
function main() {
    var _0x2c280e = a0_0xfa6d;
    input[_0x2c280e(0x0)](function (line) {
        var _0x230176 = a0_0xfa6d;
        var a, b, c, p, x, y, z, i;
        if (line['trim']() === '')
            return;
        p = line[_0x230176(0x1)](/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
        a = p[0x1];
        b = p[0x2];
        c = p[0x3];
        for (i = 0x0; i <= 0x9; i++) {
            if (i === 0x0 && (a[_0x230176(0x2)](0x0) === 'X' || b[_0x230176(0x2)](0x0) === 'X' || c['charAt'](0x0) === 'X'))
                continue;
            x = parseInt(a[_0x230176(0x3)](/X/g, i), 0xa);
            y = parseInt(b[_0x230176(0x3)](/X/g, i), 0xa);
            z = parseInt(c['replace'](/X/g, i), 0xa);
            if (x + y === z)
                break;
        }
        console['log'](i === 0xa ? 'NA' : i);
    });
}
var input = '';
process[a0_0x37a7f5(0x4)]['resume']();
function a0_0xfa6d(wmBrzV, key) {
    var stringArray = a0_0x27a2();
    a0_0xfa6d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xfa6d(wmBrzV, key);
}
process[a0_0x37a7f5(0x4)]['setEncoding'](a0_0x37a7f5(0x5));
process['stdin']['on'](a0_0x37a7f5(0x6), function (chunk) {
    input += chunk;
});
function a0_0x27a2() {
    var _0x1d34ca = [
        'forEach',
        'match',
        'charAt',
        'replace',
        'stdin',
        'utf8',
        'data',
        'end',
        'split'
    ];
    a0_0x27a2 = function () {
        return _0x1d34ca;
    };
    return a0_0x27a2();
}
process[a0_0x37a7f5(0x4)]['on'](a0_0x37a7f5(0x7), function () {
    var _0x7def31 = a0_0xfa6d;
    input = input[_0x7def31(0x8)]('\x0a');
    main();
});