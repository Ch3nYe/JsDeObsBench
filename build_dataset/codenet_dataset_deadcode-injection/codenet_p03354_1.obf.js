'use strict';
var a0_0x25aa32 = a0_0x99fb;
function a0_0x5091() {
    var _0x4fb599 = [
        'map',
        'shift',
        'splice',
        'merge',
        'top',
        'log',
        'value',
        'parent',
        'prototype',
        'adopt',
        'weight',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5091 = function () {
        return _0x4fb599;
    };
    return a0_0x5091();
}
function Main(input) {
    var _0x322f0c = a0_0x99fb;
    input = input['trim']()['split'](/\s+/)[_0x322f0c(0x0)](x => x - 0x0);
    var N = input[_0x322f0c(0x1)](), M = input['shift']();
    var p = input[_0x322f0c(0x2)](0x0, N);
    var nodes = [];
    for (let k = 0x0; k < N; k++)
        nodes[k] = new Node(k);
    for (let k = 0x0; k < M; k++)
        nodes[input[0x2 * k] - 0x1][_0x322f0c(0x3)](nodes[input[0x2 * k + 0x1] - 0x1]);
    var counter = 0x0;
    for (let k = 0x0; k < N; k++)
        if (nodes[k][_0x322f0c(0x4)]() === nodes[p[k] - 0x1][_0x322f0c(0x4)]())
            counter++;
    console[_0x322f0c(0x5)](counter);
}
function Node(v) {
    var _0x55329a = a0_0x99fb;
    var t = this;
    t[_0x55329a(0x6)] = v;
    t[_0x55329a(0x7)] = null;
    t['weight'] = 0x1;
}
Node[a0_0x25aa32(0x8)][a0_0x25aa32(0x4)] = function () {
    var _0x455603 = a0_0x99fb;
    var t = this;
    var p = t[_0x455603(0x7)];
    if (!p)
        return t;
    else
        return p[_0x455603(0x4)]();
};
Node[a0_0x25aa32(0x8)][a0_0x25aa32(0x9)] = function (progeny) {
    var _0x57009b = a0_0x99fb;
    var t = this[_0x57009b(0x4)]();
    var c = progeny['top']();
    c['parent'] = t;
    t[_0x57009b(0xa)] += c[_0x57009b(0xa)];
};
function a0_0x99fb(ztapWl, key) {
    var stringArray = a0_0x5091();
    a0_0x99fb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x99fb(ztapWl, key);
}
Node['prototype'][a0_0x25aa32(0x3)] = function (b) {
    var _0x216513 = a0_0x99fb;
    var a = this[_0x216513(0x4)]();
    b = b['top']();
    if (a === b)
        return;
    if (a['weight'] < b['weight'])
        b[_0x216513(0x9)](a);
    else
        a[_0x216513(0x9)](b);
};
Main(require('fs')[a0_0x25aa32(0xb)](a0_0x25aa32(0xc), a0_0x25aa32(0xd)));