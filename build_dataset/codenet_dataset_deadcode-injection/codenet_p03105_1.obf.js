const a0_0xacffd4 = a0_0x15e1;
function a0_0x15e1(yDUeQI, key) {
    const stringArray = a0_0x25a8();
    a0_0x15e1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x15e1(yDUeQI, key);
}
const main = input => {
    const _0x4b38b4 = a0_0x15e1;
    const In = input[_0x4b38b4(0x0)]('\x20')['map'](n => Number(n));
    const o1 = In[0x0] > In[0x1] ? 0x0 : In[0x1] / In[0x0];
    console[_0x4b38b4(0x1)](o1 >= In[0x2] ? In[0x2] : o1);
};
function a0_0x25a8() {
    const _0x5bb2f0 = [
        'split',
        'log',
        'utf8'
    ];
    a0_0x25a8 = function () {
        return _0x5bb2f0;
    };
    return a0_0x25a8();
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0xacffd4(0x2)));