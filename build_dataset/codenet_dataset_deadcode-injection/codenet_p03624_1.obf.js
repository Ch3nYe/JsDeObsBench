var a0_0x2036a5 = a0_0x1fcc;
function a0_0x1fcc(nlIixC, key) {
    var stringArray = a0_0x38f4();
    a0_0x1fcc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1fcc(nlIixC, key);
}
function main(input) {
    var _0x26d411 = a0_0x1fcc;
    const S = input[_0x26d411(0x0)]('');
    alphabetList = _0x26d411(0x1)[_0x26d411(0x0)]('');
    arr = S[_0x26d411(0x2)](function (x, i, self) {
        var _0x2b5396 = a0_0x1fcc;
        return self[_0x2b5396(0x3)](x) === i;
    })['sort']();
    tmp = arrDiff(arr, alphabetList);
    function arrDiff(arr, alphabetList) {
        var _0x2325c3 = a0_0x1fcc;
        if (_0x2325c3(0x4) === _0x2325c3(0x5)) {
            a[arr[i]] = !![];
        } else {
            var a = [];
            var diff = [];
            for (var i = 0x0; i < arr['length']; i++) {
                a[arr[i]] = !![];
            }
            for (var i = 0x0; i < alphabetList[_0x2325c3(0x6)]; i++) {
                if (_0x2325c3(0x7) === _0x2325c3(0x8)) {
                    if (a[alphabetList[i]]) {
                        delete a[alphabetList[i]];
                    } else {
                        a[alphabetList[i]] = !![];
                    }
                } else {
                    if (a[alphabetList[i]]) {
                        delete a[alphabetList[i]];
                    } else {
                        if (_0x2325c3(0x9) !== 'mQQZS') {
                            a[alphabetList[i]] = !![];
                        } else {
                            delete a[alphabetList[i]];
                        }
                    }
                }
            }
            for (var k in a) {
                diff[_0x2325c3(0xa)](k);
            }
            return diff;
        }
    }
    if (tmp[_0x26d411(0x6)] > 0x0) {
        ans = tmp[0x0];
    } else {
        ans = _0x26d411(0xb);
    }
    console[_0x26d411(0xc)](ans);
}
main(require('fs')[a0_0x2036a5(0xd)]('/dev/stdin', a0_0x2036a5(0xe)));
function a0_0x38f4() {
    var _0xc80408 = [
        'split',
        'abcdefghijklmnopqrstuvwxyz',
        'filter',
        'indexOf',
        'dlmpz',
        'vztAS',
        'length',
        'rwDpC',
        'NHPBQ',
        'HPafg',
        'push',
        'None',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x38f4 = function () {
        return _0xc80408;
    };
    return a0_0x38f4();
}