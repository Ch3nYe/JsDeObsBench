(function (stringArrayFunction, comparisonValue) {
    const _0x4f5b70 = a0_0x1b39;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4f5b70(0xc1)) / 0x1 + parseInt(_0x4f5b70(0xbc)) / 0x2 + -parseInt(_0x4f5b70(0xbb)) / 0x3 * (parseInt(_0x4f5b70(0xb3)) / 0x4) + parseInt(_0x4f5b70(0xba)) / 0x5 + parseInt(_0x4f5b70(0xbd)) / 0x6 + -parseInt(_0x4f5b70(0xb7)) / 0x7 + parseInt(_0x4f5b70(0xb8)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25e8, 0x900d7));
function a0_0x25e8() {
    const _0x33982b = [
        '11332mAIDJG',
        'utf8',
        'shift',
        '/dev/stdin',
        '6923322NZfdNH',
        '3830864DMLgIX',
        'split',
        '1075620AUzzXz',
        '27YBToqk',
        '1001214NUNKGZ',
        '373770MTkiyM',
        'trim',
        'readFileSync',
        'map',
        '347698uVmljE'
    ];
    a0_0x25e8 = function () {
        return _0x33982b;
    };
    return a0_0x25e8();
}
function a0_0x1b39(PVwoZB, key) {
    const stringArray = a0_0x25e8();
    a0_0x1b39 = function (index, key) {
        index = index - 0xb3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1b39(PVwoZB, key);
}
(function main() {
    const _0x47f84e = a0_0x1b39;
    let lines = require('fs')[_0x47f84e(0xbf)](_0x47f84e(0xb6), _0x47f84e(0xb4))[_0x47f84e(0xbe)]()['split']('\x0a');
    let [n, k] = lines[_0x47f84e(0xb5)]()[_0x47f84e(0xb9)]('\x20')[_0x47f84e(0xc0)](Number);
    let w = lines['map'](Number);
    const canAllStack = p => {
        let cnt = 0x0, sum = 0x0;
        for (let i = 0x0; i < k; i++) {
            for (sum = 0x0; sum + w[cnt] <= p;) {
                sum += w[cnt++];
                if (cnt === n)
                    return n;
            }
        }
        return cnt;
    };
    let mid, left = 0x0, right = 0x3b9aca00;
    while (right - left > 0x1) {
        mid = (right + left) / 0x2;
        if (canAllStack(mid) >= n)
            right = mid;
        else
            left = mid;
    }
    console['log'](Math['floor'](right));
}());