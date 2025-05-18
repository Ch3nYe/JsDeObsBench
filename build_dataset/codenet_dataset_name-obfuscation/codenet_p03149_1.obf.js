function Main(_0x4b9f35) {
    tmp = _0x4b9f35['split']('\x20');
    a = 0x0;
    b = 0x0;
    c = 0x0;
    d = 0x0;
    for (var _0x12ce84 = 0x0; _0x12ce84 < 0x4; _0x12ce84++) {
        if (tmp[_0x12ce84] == '1') {
            a = 0x1;
        }
        if (tmp[_0x12ce84] == '9') {
            b = 0x1;
        }
        if (tmp[_0x12ce84] == '7') {
            c = 0x1;
        }
        if (tmp[_0x12ce84] == '4') {
            d = 0x1;
        }
    }
    if (a == 0x1 && b == 0x1 && c == 0x1 && d == 0x1) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));