function a0_0x5761(INrwCx, key) {
    var stringArray = a0_0x51f3();
    a0_0x5761 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5761(INrwCx, key);
}
var a0_0x3f4728 = a0_0x5761;
function a0_0x51f3() {
    var _0x1ed9cf = [
        'GREATER',
        'BGfDn',
        'split',
        'length',
        'log',
        'slice',
        'aboxP',
        'zKjbM',
        'LESS',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x51f3 = function () {
        return _0x1ed9cf;
    };
    return a0_0x51f3();
}
function rec(a, b) {
    var _0x162671 = a0_0x5761;
    if (a[0x0] > b[0x0]) {
        return _0x162671(0x0);
    } else if (a[0x0] < b[0x0]) {
        if (_0x162671(0x1) !== 'BGfDn') {
            s = s[_0x162671(0x2)]('\x0a');
            if (s[0x0][_0x162671(0x3)] > s[0x1][_0x162671(0x3)]) {
                console[_0x162671(0x4)](_0x162671(0x0));
            } else if (s[0x0][_0x162671(0x3)] < s[0x1][_0x162671(0x3)]) {
                console[_0x162671(0x4)]('LESS');
            } else {
                console['log']('%s', rec(s[0x0][_0x162671(0x5)](0x1), s[0x1]['slice'](0x1)));
            }
        } else {
            return 'LESS';
        }
    } else if (a[_0x162671(0x3)] == 0x1) {
        if (_0x162671(0x6) !== _0x162671(0x7)) {
            return 'EQUAL';
        } else {
            console[_0x162671(0x4)]('%s', rec(s[0x0]['slice'](0x1), s[0x1]['slice'](0x1)));
        }
    } else {
        return rec(a[_0x162671(0x5)](0x1), b[_0x162671(0x5)](0x1));
    }
}
function main(s) {
    var _0x44a894 = a0_0x5761;
    s = s[_0x44a894(0x2)]('\x0a');
    if (s[0x0][_0x44a894(0x3)] > s[0x1][_0x44a894(0x3)]) {
        console['log'](_0x44a894(0x0));
    } else if (s[0x0][_0x44a894(0x3)] < s[0x1]['length']) {
        console[_0x44a894(0x4)](_0x44a894(0x8));
    } else {
        console[_0x44a894(0x4)]('%s', rec(s[0x0]['slice'](0x1), s[0x1][_0x44a894(0x5)](0x1)));
    }
}
main(require('fs')[a0_0x3f4728(0x9)](a0_0x3f4728(0xa), 'utf8'));