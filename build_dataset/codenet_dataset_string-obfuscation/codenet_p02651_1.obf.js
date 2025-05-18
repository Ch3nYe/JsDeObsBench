function a0_0x2162(XCtCjo, key) {
    const stringArray = a0_0x564a();
    a0_0x2162 = function (index, key) {
        index = index - 0x7f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2162(XCtCjo, key);
}
function a0_0x564a() {
    const _0x5765c3 = [
        'log',
        'readFileSync',
        '5UWwXfK',
        '2727580wvfuGi',
        '10aloBSx',
        '920391JEPEUp',
        '772597bxlNrV',
        '9nRWdxd',
        '156974QzptCG',
        '362232hIqdDb',
        '720666TeXkDd',
        '365852hOTmXM',
        'split'
    ];
    a0_0x564a = function () {
        return _0x5765c3;
    };
    return a0_0x564a();
}
const a0_0x4913b8 = a0_0x2162;
(function (stringArrayFunction, comparisonValue) {
    const _0x24be76 = a0_0x2162;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x24be76(0x88)) / 0x1 * (parseInt(_0x24be76(0x81)) / 0x2) + parseInt(_0x24be76(0x8b)) / 0x3 + parseInt(_0x24be76(0x84)) / 0x4 * (-parseInt(_0x24be76(0x8a)) / 0x5) + -parseInt(_0x24be76(0x83)) / 0x6 + parseInt(_0x24be76(0x7f)) / 0x7 + parseInt(_0x24be76(0x82)) / 0x8 + parseInt(_0x24be76(0x80)) / 0x9 * (-parseInt(_0x24be76(0x89)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x564a, 0x4422f));
function Main(input) {
    const _0x4909fb = a0_0x2162;
    let t = input[_0x4909fb(0x85)]('\x0a')[0x0], n, a = new Array(n), s = new Array(n), x = 0x0;
    for (let i = 0x0; i < t; i++) {
        n = input[_0x4909fb(0x85)]('\x0a')[i * 0x3 + 0x1];
        a = input[_0x4909fb(0x85)]('\x0a')[i * 0x3 + 0x2]['split']('\x20');
        s = input['split']('\x0a')[i * 0x3 + 0x3][_0x4909fb(0x85)]('');
        let tmp;
        for (let j = 0x0; j < n; j++) {
            tmp = x ^ a[j];
            if (s[j] == 0x0) {
                if (tmp == 0x0)
                    x = tmp;
            } else
                x = tmp;
        }
        if (x == 0x0) {
            console[_0x4909fb(0x86)](0x0);
        } else
            console[_0x4909fb(0x86)](0x1);
        x = 0x0;
    }
}
Main(require('fs')[a0_0x4913b8(0x87)]('/dev/stdin', 'utf8'));