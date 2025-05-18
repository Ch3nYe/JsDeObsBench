const a0_0xa47f1 = a0_0x511c;
function a0_0x511c(rrMhqi, key) {
    const stringArray = a0_0x545b();
    a0_0x511c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x511c(rrMhqi, key);
}
console[a0_0xa47f1(0x0)]((args => {
    const _0x57dcd3 = a0_0x511c;
    const s = args[_0x57dcd3(0x1)]();
    const N = s[_0x57dcd3(0x2)] - 0x1;
    let x = 0x0;
    for (let i = 0x0, j = N; i < j; i++, j--) {
        while (s[i] !== s[j]) {
            if (s[i] === 'x')
                x++, i++;
            else if (s[j] === 'x')
                x++, j--;
            else
                return '-1';
        }
    }
    return '' + x;
})(require('fs')[a0_0xa47f1(0x3)]('/dev/stdin', a0_0xa47f1(0x4))));
function a0_0x545b() {
    const _0x5152e3 = [
        'log',
        'trim',
        'length',
        'readFileSync',
        'utf8'
    ];
    a0_0x545b = function () {
        return _0x5152e3;
    };
    return a0_0x545b();
}