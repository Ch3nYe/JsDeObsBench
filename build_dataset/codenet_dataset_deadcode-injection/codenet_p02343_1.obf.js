function a0_0x3a89(glQkFf, key) {
    const stringArray = a0_0x4410();
    a0_0x3a89 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a89(glQkFf, key);
}
const a0_0x4c2bfd = a0_0x3a89;
const findSet = p => {
    return x => {
        if (x != p[x])
            p[x] = findSet(p)(p[x]);
        return p[x];
    };
};
const link = (p, r) => {
    return (x, y) => {
        if (r[x] > r[y])
            p[y] = x;
        else {
            p[x] = y;
            if (r[x] === r[y])
                r[y]++;
        }
    };
};
const dsFactory = n => {
    const _0x124cfa = a0_0x3a89;
    this['p'] = [];
    this['r'] = [];
    for (let i = 0x0; i < n; i++) {
        this['p'][i] = i;
        this['r'][i] = 0x0;
    }
    this[_0x124cfa(0x0)] = findSet(this['p']);
    this[_0x124cfa(0x1)] = link(this['p'], this['r']);
    return {
        'same': (x, y) => this[_0x124cfa(0x0)](x) === this[_0x124cfa(0x0)](y),
        'unite': (x, y) => this[_0x124cfa(0x1)](this[_0x124cfa(0x0)](x), this[_0x124cfa(0x0)](y))
    };
};
const input = require('fs')[a0_0x4c2bfd(0x2)](a0_0x4c2bfd(0x3), 'utf8');
const lines = input[a0_0x4c2bfd(0x4)]('\x0a');
function a0_0x4410() {
    const _0x297905 = [
        'findSet',
        'link',
        'readFileSync',
        '/dev/stdin',
        'split',
        'shift',
        'map',
        'forEach',
        'same',
        'log'
    ];
    a0_0x4410 = function () {
        return _0x297905;
    };
    return a0_0x4410();
}
const [n, q] = lines[a0_0x4c2bfd(0x5)]()[a0_0x4c2bfd(0x4)]('\x20')[a0_0x4c2bfd(0x6)](Number);
const ds = dsFactory(n);
lines[a0_0x4c2bfd(0x7)](x => {
    const _0x5ed128 = a0_0x3a89;
    const [t, a, b] = x[_0x5ed128(0x4)]('\x20')[_0x5ed128(0x6)](Number);
    switch (t) {
    case 0x0:
        ds['unite'](a, b);
        break;
    case 0x1:
        const ret = ds[_0x5ed128(0x8)](a, b) ? 0x1 : 0x0;
        console[_0x5ed128(0x9)](ret);
        break;
    }
});