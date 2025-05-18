'use strict';
const a0_0xa170e3 = a0_0x4587;
(function (stringArrayFunction, comparisonValue) {
    const _0x197aa5 = a0_0x4587;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x197aa5(0x19e)) / 0x1 * (parseInt(_0x197aa5(0x19a)) / 0x2) + parseInt(_0x197aa5(0x19b)) / 0x3 * (-parseInt(_0x197aa5(0x1a5)) / 0x4) + -parseInt(_0x197aa5(0x197)) / 0x5 + -parseInt(_0x197aa5(0x1a6)) / 0x6 * (parseInt(_0x197aa5(0x193)) / 0x7) + parseInt(_0x197aa5(0x198)) / 0x8 * (parseInt(_0x197aa5(0x19d)) / 0x9) + parseInt(_0x197aa5(0x195)) / 0xa * (-parseInt(_0x197aa5(0x1a1)) / 0xb) + -parseInt(_0x197aa5(0x1a3)) / 0xc * (-parseInt(_0x197aa5(0x1a4)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x485a, 0xac0dc));
function a0_0x485a() {
    const _0x259ab7 = [
        '756370gKGBJe',
        '6262792eJHcWA',
        '/dev/stdin',
        '6GexTLP',
        '33CRHzXa',
        'split',
        '9XGTnOA',
        '155491OEzBfN',
        'readFileSync',
        'utf8',
        '2292961VQnhKB',
        'trim',
        '636FAORST',
        '586417JdpqWe',
        '413520uobEOO',
        '6DDSMaH',
        '8610077IAzngj',
        'log',
        '20VfZtMx',
        'map'
    ];
    a0_0x485a = function () {
        return _0x259ab7;
    };
    return a0_0x485a();
}
const main = arg => {
    const _0x327767 = a0_0x4587;
    arg = arg[_0x327767(0x1a2)]()[_0x327767(0x19c)]('\x0a');
    const c = arg[_0x327767(0x196)](n => n[_0x327767(0x19c)]('\x20')[_0x327767(0x196)](l => parseInt(l)));
    for (let a1 = 0x0; a1 <= 0x64; a1++) {
        const b1 = c[0x0][0x0] - a1;
        const b2 = c[0x1][0x0] - a1;
        const b3 = c[0x2][0x0] - a1;
        for (let a2 = 0x0; a2 <= 0x64; a2++) {
            if (a2 + b1 !== c[0x0][0x1])
                continue;
            if (a2 + b2 !== c[0x1][0x1])
                continue;
            if (a2 + b3 !== c[0x2][0x1])
                continue;
            for (let a3 = 0x0; a3 <= 0x64; a3++) {
                if (a3 + b1 !== c[0x0][0x2])
                    continue;
                if (a3 + b2 !== c[0x1][0x2])
                    continue;
                if (a3 + b3 !== c[0x2][0x2])
                    continue;
                console[_0x327767(0x194)]('Yes');
                return;
            }
        }
    }
    console[_0x327767(0x194)]('No');
};
function a0_0x4587(ictPdJ, key) {
    const stringArray = a0_0x485a();
    a0_0x4587 = function (index, key) {
        index = index - 0x193;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4587(ictPdJ, key);
}
main(require('fs')[a0_0xa170e3(0x19f)](a0_0xa170e3(0x199), a0_0xa170e3(0x1a0)));