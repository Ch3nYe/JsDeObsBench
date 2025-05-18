const findSet = _0x4095bb => {
    return _0x4f337f => {
        if (_0x4f337f != _0x4095bb[_0x4f337f])
            _0x4095bb[_0x4f337f] = findSet(_0x4095bb)(_0x4095bb[_0x4f337f]);
        return _0x4095bb[_0x4f337f];
    };
};
const link = (_0x1e1b91, _0x3d8401) => {
    return (_0x4126bd, _0x14e798) => {
        if (_0x3d8401[_0x4126bd] > _0x3d8401[_0x14e798])
            _0x1e1b91[_0x14e798] = _0x4126bd;
        else {
            _0x1e1b91[_0x4126bd] = _0x14e798;
            if (_0x3d8401[_0x4126bd] === _0x3d8401[_0x14e798])
                _0x3d8401[_0x14e798]++;
        }
    };
};
const dsFactory = _0x5b4a15 => {
    this['p'] = [];
    this['r'] = [];
    for (let _0x2ec118 = 0x0; _0x2ec118 < _0x5b4a15; _0x2ec118++) {
        this['p'][_0x2ec118] = _0x2ec118;
        this['r'][_0x2ec118] = 0x0;
    }
    this['findSet'] = findSet(this['p']);
    this['link'] = link(this['p'], this['r']);
    return {
        'same': (_0x2ea3a6, _0x3f6e3a) => this['findSet'](_0x2ea3a6) === this['findSet'](_0x3f6e3a),
        'unite': (_0x338dff, _0x5ee8e0) => this['link'](this['findSet'](_0x338dff), this['findSet'](_0x5ee8e0))
    };
};
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['split']('\x0a');
const [n, q] = lines['shift']()['split']('\x20')['map'](Number);
const ds = dsFactory(n);
lines['forEach'](_0x109633 => {
    const [_0x5b27f8, _0xb45132, _0x127c88] = _0x109633['split']('\x20')['map'](Number);
    switch (_0x5b27f8) {
    case 0x0:
        ds['unite'](_0xb45132, _0x127c88);
        break;
    case 0x1:
        const _0x3edf66 = ds['same'](_0xb45132, _0x127c88) ? 0x1 : 0x0;
        console['log'](_0x3edf66);
        break;
    }
});