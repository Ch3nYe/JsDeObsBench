function Main(_0x38c2b0) {
    ans = 'No';
    _0x38c2b0 = _0x38c2b0['trim']()['split']('\x0a');
    rotate = _0x38c2b0[0x0];
    for (i = 0x0; i <= _0x38c2b0[0x0]['length']; i++) {
        head = rotate['substr'](0x0, 0x1);
        str = rotate['slice'](0x1) + head;
        if (_0x38c2b0[0x1] === str) {
            ans = 'Yes';
            break;
        }
        rotate = str;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));