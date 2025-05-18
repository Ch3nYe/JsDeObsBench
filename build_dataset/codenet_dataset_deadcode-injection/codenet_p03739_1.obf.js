var a0_0x57eaf6 = a0_0x2c12;
function Main(s) {
    var _0x5824bd = a0_0x2c12;
    var s = s[_0x5824bd(0x0)]('\x0a');
    var n = parseInt(s[0x0], 0xa);
    var a = s[0x1][_0x5824bd(0x0)]('\x20')['map'](e => parseInt(e, 0xa));
    var acc = 0x0, cnt = 0x0, arr = [];
    for (var i = 0x0; i < n; i++) {
        acc += a[i];
        if (i === 0x0) {
            if (_0x5824bd(0x1) === _0x5824bd(0x1)) {
                if (acc === 0x0) {
                    if (a[i + 0x1] >= 0x0) {
                        if (_0x5824bd(0x2) !== _0x5824bd(0x2)) {
                            cnt += Math[_0x5824bd(0x3)](acc) + 0x1;
                            acc += Math[_0x5824bd(0x3)](acc) + 0x1;
                        } else {
                            acc -= a[i + 0x1] - 0x1;
                            if (acc === 0x0)
                                acc--;
                            cnt += Math[_0x5824bd(0x3)](acc);
                        }
                    } else {
                        if ('nvNca' !== 'nvNca') {
                            if (a[i + 0x1] >= 0x0) {
                                acc -= a[i + 0x1] - 0x1;
                                if (acc === 0x0)
                                    acc--;
                                cnt += Math[_0x5824bd(0x3)](acc);
                            } else {
                                acc += Math['abs'](a[i + 0x1]) - 0x1;
                                if (acc === 0x0)
                                    acc++;
                                cnt += acc;
                            }
                        } else {
                            acc += Math[_0x5824bd(0x3)](a[i + 0x1]) - 0x1;
                            if (acc === 0x0)
                                acc++;
                            cnt += acc;
                        }
                    }
                }
            } else {
                acc += Math['abs'](a[i + 0x1]) - 0x1;
                if (acc === 0x0)
                    acc++;
                cnt += acc;
            }
        } else {
            if ('lZGfO' !== _0x5824bd(0x4)) {
                if (acc >= 0x0) {
                    cnt += acc + 0x1;
                    acc -= acc + 0x1;
                }
            } else {
                if (arr[i - 0x1] > 0x0) {
                    if ('EjUIf' === _0x5824bd(0x5)) {
                        if (acc <= 0x0) {
                            cnt += Math['abs'](acc) + 0x1;
                            acc += Math[_0x5824bd(0x3)](acc) + 0x1;
                        }
                    } else {
                        if (acc >= 0x0) {
                            cnt += acc + 0x1;
                            acc -= acc + 0x1;
                        }
                    }
                } else {
                    if (acc <= 0x0) {
                        if (_0x5824bd(0x6) === _0x5824bd(0x6)) {
                            cnt += Math[_0x5824bd(0x3)](acc) + 0x1;
                            acc += Math['abs'](acc) + 0x1;
                        } else {
                            cnt += acc + 0x1;
                            acc -= acc + 0x1;
                        }
                    }
                }
            }
        }
        arr[_0x5824bd(0x7)](acc);
    }
    console[_0x5824bd(0x8)](cnt);
}
function a0_0x35b5() {
    var _0xa8ecb1 = [
        'split',
        'OwfGw',
        'HYCno',
        'abs',
        'lZGfO',
        'Auqnz',
        'OensP',
        'push',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x35b5 = function () {
        return _0xa8ecb1;
    };
    return a0_0x35b5();
}
function a0_0x2c12(jUwHGU, key) {
    var stringArray = a0_0x35b5();
    a0_0x2c12 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c12(jUwHGU, key);
}
Main(require('fs')[a0_0x57eaf6(0x9)](a0_0x57eaf6(0xa), a0_0x57eaf6(0xb)));