function Main(_0x3b5256) {
    _0x3b5256 = _0x3b5256['split']('\x0a');
    tmp = _0x3b5256['shift']();
    N = parseInt(tmp['split']('\x20')[0x0]);
    M = tmp['split']('\x20')[0x1];
    S = _0x3b5256;
    A = 'n'['repeat'](N)['split']('');
    flag = !![];
    S['forEach'](_0x346546 => {
        t = _0x346546['split']('\x20')['map'](_0x106e6f => parseInt(_0x106e6f));
        if (A[t[0x0] - 0x1] != 'n' && A[t[0x0] - 0x1] != t[0x1])
            flag = ![];
        A[t[0x0] - 0x1] = t[0x1];
    });
    A = A['join']('');
    A = A['replace'](/^nn([0-9])/, '10$1');
    A = A['replace'](/^n([0-9])/, '1$1');
    A = A['replace'](/n/g, '0');
    A = parseInt(A);
    if (flag && (A + '')['length'] == N) {
        console['log'](A);
    } else {
        console['log'](-0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));