var n, m, l, a, b, bt;
process['stdin']['setEncoding']('ascii');
process['stdin']['on']('data', function (_0x270e3c) {
    var _0x57a26a, _0xd31cd8;
    _0x57a26a = _0x270e3c['toString']()['split'](/\r?\n/);
    for (i in _0x57a26a) {
        _0xd31cd8 = _0x57a26a[i]['split']('\x20');
        if (_0xd31cd8['length'] !== 0x0)
            _0x57a26a[i] = _0xd31cd8['map'](Number);
    }
    n = _0x57a26a[0x0][0x0];
    m = _0x57a26a[0x0][0x1];
    l = _0x57a26a[0x0][0x2];
    a = _0x57a26a['slice'](0x1, n + 0x1);
    b = _0x57a26a['slice'](n + 0x1, n + m + 0x1);
});
process['stdin']['on']('end', function () {
    var _0x28970e, _0xec9152, _0x16c906;
    make_b_transpose();
    for (_0x28970e in a) {
        _0x16c906 = [];
        for (_0xec9152 in bt) {
            _0x16c906['push'](inner_product(a[_0x28970e], bt[_0xec9152]));
        }
        console['log'](_0x16c906['join']('\x20'));
    }
});
function make_b_transpose() {
    var _0x7af168, _0x2f3a0c, _0x5cdd0a;
    bt = [];
    for (_0x7af168 = 0x0; _0x7af168 < l; _0x7af168++) {
        _0x5cdd0a = [];
        for (_0x2f3a0c = 0x0; _0x2f3a0c < m; _0x2f3a0c++)
            _0x5cdd0a['push'](b[_0x2f3a0c][_0x7af168]);
        bt['push'](_0x5cdd0a);
    }
}
function inner_product(_0x5e4ac7, _0x442389) {
    var _0xf74cfc = 0x0;
    for (var _0x5723cf in _0x5e4ac7)
        _0xf74cfc += _0x5e4ac7[_0x5723cf] * _0x442389[_0x5723cf];
    return _0xf74cfc;
}