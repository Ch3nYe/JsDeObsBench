var a0_0x4cd441 = a0_0x1acc;
function fillZero(l, num) {
    var _0x1e02e1 = a0_0x1acc;
    num = String(num);
    for (var i = num[_0x1e02e1(0x0)]; i < l; i++) {
        num = '0' + num;
    }
    return num;
}
function a0_0x1acc(zfaaCA, key) {
    var stringArray = a0_0x49d7();
    a0_0x1acc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1acc(zfaaCA, key);
}
function a0_0x49d7() {
    var _0x39d353 = [
        'length',
        'trim',
        'split',
        'map',
        'NOmFL',
        'push',
        'tkkop',
        'sort',
        'log',
        'readFileSync'
    ];
    a0_0x49d7 = function () {
        return _0x39d353;
    };
    return a0_0x49d7();
}
function main(arg) {
    var _0x644c48 = a0_0x1acc;
    arg = arg[_0x644c48(0x1)]()[_0x644c48(0x2)]('\x0a');
    arg[0x0] = arg[0x0][_0x644c48(0x2)]('\x20');
    var N = Number(arg[0x0][0x0]);
    var M = Number(arg[0x0][0x1]);
    arg['shift']();
    var p_master = {};
    for (var i = 0x0; i < arg['length']; i++) {
        var tmp = arg[i][_0x644c48(0x2)]('\x20')[_0x644c48(0x3)](e => Number(e));
        arg[i] = tmp;
        if (!p_master[tmp[0x0]]) {
            if (_0x644c48(0x4) === _0x644c48(0x4)) {
                p_master[tmp[0x0]] = [];
            } else {
                num = String(num);
                for (var i = num[_0x644c48(0x0)]; i < l; i++) {
                    num = '0' + num;
                }
                return num;
            }
        }
        p_master[tmp[0x0]][_0x644c48(0x5)](tmp[0x1]);
    }
    for (key in p_master) {
        if (_0x644c48(0x6) === _0x644c48(0x6)) {
            p_master[key][_0x644c48(0x7)]();
        } else {
            p_master[key][_0x644c48(0x7)]();
        }
    }
    for (var i = 0x0; i < arg['length']; i++) {
        var _p = arg[i][0x0];
        var j = 0x0;
        for (var j = 0x0; j < p_master[_p][_0x644c48(0x0)]; j++) {
            if (p_master[_p][j] === arg[i][0x1]) {
                break;
            }
        }
        console[_0x644c48(0x8)](fillZero(0x6, _p) + fillZero(0x6, j + 0x1));
    }
}
main(require('fs')[a0_0x4cd441(0x9)]('/dev/stdin', 'utf8'));