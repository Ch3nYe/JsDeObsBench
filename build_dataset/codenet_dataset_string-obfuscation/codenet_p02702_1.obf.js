function a0_0x3a15() {
    const _0x3dbcca = [
        '487115UIcJqL',
        '64oPCacp',
        '1252365ihfYJQ',
        '63wCYjYu',
        '77608mZXUIw',
        '1557vrteLI',
        'utf8',
        '4274hLzJna',
        '55Sfvcsa',
        '17585020syIhsb',
        'log',
        '1170NkCIal',
        '58296yxuDLK',
        'readFileSync',
        '8467668vOBlci'
    ];
    a0_0x3a15 = function () {
        return _0x3dbcca;
    };
    return a0_0x3a15();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x536640 = a0_0x57dc;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x536640(0x185)) / 0x1 + parseInt(_0x536640(0x17b)) / 0x2 * (parseInt(_0x536640(0x188)) / 0x3) + parseInt(_0x536640(0x184)) / 0x4 * (-parseInt(_0x536640(0x183)) / 0x5) + parseInt(_0x536640(0x17f)) / 0x6 * (-parseInt(_0x536640(0x180)) / 0x7) + -parseInt(_0x536640(0x187)) / 0x8 * (parseInt(_0x536640(0x186)) / 0x9) + -parseInt(_0x536640(0x17d)) / 0xa + parseInt(_0x536640(0x17c)) / 0xb * (parseInt(_0x536640(0x182)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3a15, 0xd6f8e));
const Main = () => {
    const _0x40c0d7 = a0_0x57dc;
    let line = require('fs')[_0x40c0d7(0x181)]('/dev/stdin', _0x40c0d7(0x17a));
    const mod = {};
    let count = 0x0;
    for (let i = line['length']; 0x0 < i; i--) {
        const n = parseInt(line, 0xa);
        const m = n % 0x7e3;
        if (mod[m] || m === 0x0) {
            count++;
        }
        mod[m] = !![];
        line = line['slice'](0x1);
    }
    console[_0x40c0d7(0x17e)](count);
};
function a0_0x57dc(jDnYHl, key) {
    const stringArray = a0_0x3a15();
    a0_0x57dc = function (index, key) {
        index = index - 0x17a;
        let value = stringArray[index];
        return value;
    };
    return a0_0x57dc(jDnYHl, key);
}
Main();