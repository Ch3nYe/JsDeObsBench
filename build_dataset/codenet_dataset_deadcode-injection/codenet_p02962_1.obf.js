const a0_0x2d1851 = a0_0x3ceb;
function a0_0x15ee() {
    const _0x7a0700 = [
        'length',
        'push',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x15ee = function () {
        return _0x7a0700;
    };
    return a0_0x15ee();
}
function a0_0x3ceb(saUlTq, key) {
    const stringArray = a0_0x15ee();
    a0_0x3ceb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ceb(saUlTq, key);
}
function Main(input) {
    const _0x20584b = a0_0x3ceb;
    input = input['split']('\x0a');
    const s = input[0x0];
    const t = input[0x1];
    const match = [];
    for (i = 0x0; i < s[_0x20584b(0x0)]; i++) {
        if ((s + t)['slice'](i, i + t[_0x20584b(0x0)]) == t) {
            match[_0x20584b(0x1)](!![]);
        } else {
            match[_0x20584b(0x1)](![]);
        }
    }
    max = 0x0;
    for (i = 0x0; i < s[_0x20584b(0x0)]; i++) {
        isInf = ![];
        now = i;
        getted = [];
        while (match[now]) {
            getted[_0x20584b(0x1)](now);
            now = (now + t[_0x20584b(0x0)]) % s['length'];
            if (getted['indexOf'](now) != -0x1) {
                isInf = !![];
                break;
            }
        }
        if (isInf) {
            max = -0x1;
            break;
        } else {
            if (max < getted[_0x20584b(0x0)])
                max = getted[_0x20584b(0x0)];
        }
    }
    console['log'](max);
}
Main(require('fs')[a0_0x2d1851(0x2)](a0_0x2d1851(0x3), a0_0x2d1851(0x4)));