const a0_0x513efa = a0_0x564f;
(function (stringArrayFunction, comparisonValue) {
    const _0x28d217 = a0_0x564f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x28d217(0x9c)) / 0x1 + -parseInt(_0x28d217(0x90)) / 0x2 + -parseInt(_0x28d217(0x9d)) / 0x3 * (parseInt(_0x28d217(0x98)) / 0x4) + parseInt(_0x28d217(0x92)) / 0x5 + -parseInt(_0x28d217(0x97)) / 0x6 + parseInt(_0x28d217(0x9e)) / 0x7 + parseInt(_0x28d217(0x95)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4c8e, 0x4bb7c));
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
    const _0x12fb3b = a0_0x564f;
    this['p'] = [];
    this['r'] = [];
    for (let i = 0x0; i < n; i++) {
        this['p'][i] = i;
        this['r'][i] = 0x0;
    }
    this[_0x12fb3b(0x8f)] = findSet(this['p']);
    this[_0x12fb3b(0x96)] = link(this['p'], this['r']);
    return {
        'same': (x, y) => this[_0x12fb3b(0x8f)](x) === this[_0x12fb3b(0x8f)](y),
        'unite': (x, y) => this[_0x12fb3b(0x96)](this[_0x12fb3b(0x8f)](x), this[_0x12fb3b(0x8f)](y))
    };
};
function a0_0x4c8e() {
    const _0x56b76f = [
        'readFileSync',
        '12876864MTshUy',
        'link',
        '3520350peKhJF',
        '547772kYgOTk',
        'split',
        'map',
        'unite',
        '415916hugIxO',
        '6EBQUmr',
        '1122072IeKUzK',
        'same',
        'findSet',
        '599702xsXICv',
        'utf8',
        '583070AcxNXD',
        'forEach'
    ];
    a0_0x4c8e = function () {
        return _0x56b76f;
    };
    return a0_0x4c8e();
}
const input = require('fs')[a0_0x513efa(0x94)]('/dev/stdin', a0_0x513efa(0x91));
const lines = input['split']('\x0a');
const [n, q] = lines['shift']()[a0_0x513efa(0x99)]('\x20')[a0_0x513efa(0x9a)](Number);
function a0_0x564f(LWsVwg, key) {
    const stringArray = a0_0x4c8e();
    a0_0x564f = function (index, key) {
        index = index - 0x8e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x564f(LWsVwg, key);
}
const ds = dsFactory(n);
lines[a0_0x513efa(0x93)](x => {
    const _0x1cc315 = a0_0x513efa;
    const [t, a, b] = x[_0x1cc315(0x99)]('\x20')[_0x1cc315(0x9a)](Number);
    switch (t) {
    case 0x0:
        ds[_0x1cc315(0x9b)](a, b);
        break;
    case 0x1:
        const ret = ds[_0x1cc315(0x8e)](a, b) ? 0x1 : 0x0;
        console['log'](ret);
        break;
    }
});