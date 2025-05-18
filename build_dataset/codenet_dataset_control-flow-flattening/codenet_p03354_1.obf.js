'use strict';
function Main(input) {
    var zVhMrN = {
        'uBURZ': function (x, y) {
            return x < y;
        },
        'RmoxU': function (x, y) {
            return x - y;
        },
        'wlhHb': function (x, y) {
            return x * y;
        },
        'EtIje': function (x, y) {
            return x < y;
        },
        'ebYyT': function (x, y) {
            return x === y;
        }
    };
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    var N = input['shift'](), M = input['shift']();
    var p = input['splice'](0x0, N);
    var nodes = [];
    for (let k = 0x0; zVhMrN['uBURZ'](k, N); k++)
        nodes[k] = new Node(k);
    for (let k = 0x0; k < M; k++)
        nodes[zVhMrN['RmoxU'](input[zVhMrN['wlhHb'](0x2, k)], 0x1)]['merge'](nodes[zVhMrN['RmoxU'](input[0x2 * k + 0x1], 0x1)]);
    var counter = 0x0;
    for (let k = 0x0; zVhMrN['EtIje'](k, N); k++)
        if (zVhMrN['ebYyT'](nodes[k]['top'](), nodes[p[k] - 0x1]['top']()))
            counter++;
    console['log'](counter);
}
function Node(v) {
    var t = this;
    t['value'] = v;
    t['parent'] = null;
    t['weight'] = 0x1;
}
Node['prototype']['top'] = function () {
    var t = this;
    var p = t['parent'];
    if (!p)
        return t;
    else
        return p['top']();
};
Node['prototype']['adopt'] = function (progeny) {
    var t = this['top']();
    var c = progeny['top']();
    c['parent'] = t;
    t['weight'] += c['weight'];
};
Node['prototype']['merge'] = function (b) {
    var QYGsNS = {
        'PkRkX': function (x, y) {
            return x < y;
        }
    };
    var a = this['top']();
    b = b['top']();
    if (a === b)
        return;
    if (QYGsNS['PkRkX'](a['weight'], b['weight']))
        b['adopt'](a);
    else
        a['adopt'](b);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));