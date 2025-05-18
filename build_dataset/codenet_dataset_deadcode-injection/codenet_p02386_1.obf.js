var a0_0x4cb5e2 = a0_0x4bdb;
function move(d1, d2, d3, d4, d5, d6) {
    var _0x34df62 = a0_0x4bdb;
    var x = this[_0x34df62(0x0)]();
    if (x == 'N')
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    if (x == 'E')
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
}
function roll(d1, d2, d3, d4, d5, d6) {
    return [
        d1,
        d3,
        d5,
        d2,
        d4,
        d6
    ];
}
function rolls(arr) {
    var _0xf274b6 = a0_0x4bdb;
    for (var i = 0x0; i < 0x4; i++) {
        if (_0xf274b6(0x1) !== 'djcel') {
            return [
                d1,
                d3,
                d5,
                d2,
                d4,
                d6
            ];
        } else {
            obj[arr[_0xf274b6(0x2)](',')] = !![];
            arr = roll['apply'](null, arr);
        }
    }
}
var input = require('fs')[a0_0x4cb5e2(0x3)](a0_0x4cb5e2(0x4), a0_0x4cb5e2(0x5));
function a0_0x2ff7() {
    var _0x24d49c = [
        'toString',
        'djcel',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'Yes',
        'map',
        'apply',
        'hasOwnProperty',
        'log'
    ];
    a0_0x2ff7 = function () {
        return _0x24d49c;
    };
    return a0_0x2ff7();
}
var Arr = input['trim']()[a0_0x4cb5e2(0x6)]('\x0a');
var n = Arr[a0_0x4cb5e2(0x7)]() - 0x0;
function a0_0x4bdb(fOZMuw, key) {
    var stringArray = a0_0x2ff7();
    a0_0x4bdb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4bdb(fOZMuw, key);
}
var OBJ = {};
var result = a0_0x4cb5e2(0x8);
for (var i = 0x0; i < n; i++) {
    var obj = {};
    var dice = Arr[i][a0_0x4cb5e2(0x6)]('\x20')[a0_0x4cb5e2(0x9)](Number);
    for (var j = 0x0; j < 0x4; j++) {
        rolls(dice);
        dice = move[a0_0x4cb5e2(0xa)]('N', dice);
    }
    dice = move[a0_0x4cb5e2(0xa)]('E', dice);
    rolls(dice);
    dice = move['apply']('E', dice);
    dice = move[a0_0x4cb5e2(0xa)]('E', dice);
    rolls(dice);
    for (var k in obj) {
        if (OBJ[a0_0x4cb5e2(0xb)](k))
            result = 'No';
        else
            OBJ[k] = !![];
    }
    if (result == 'No')
        break;
}
console[a0_0x4cb5e2(0xc)](result);