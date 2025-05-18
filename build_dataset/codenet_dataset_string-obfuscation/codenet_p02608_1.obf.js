const a0_0x55652b = a0_0x44f5;
function a0_0x44f5(zuCsLh, key) {
    const stringArray = a0_0x292e();
    a0_0x44f5 = function (index, key) {
        index = index - 0x19b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x44f5(zuCsLh, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x25aed1 = a0_0x44f5;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x25aed1(0x19f)) / 0x1 + -parseInt(_0x25aed1(0x19d)) / 0x2 * (-parseInt(_0x25aed1(0x19b)) / 0x3) + -parseInt(_0x25aed1(0x1a2)) / 0x4 * (parseInt(_0x25aed1(0x1a4)) / 0x5) + -parseInt(_0x25aed1(0x1a7)) / 0x6 + -parseInt(_0x25aed1(0x1a0)) / 0x7 * (-parseInt(_0x25aed1(0x1a1)) / 0x8) + -parseInt(_0x25aed1(0x19c)) / 0x9 + parseInt(_0x25aed1(0x19e)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x292e, 0xeae3f));
function Main(input) {
    const _0x56d6c0 = a0_0x44f5;
    const N = Number(input);
    let fn = new Array(N)['fill'](0x0);
    for (let x = 0x1; x ** 0x2 <= N; x++) {
        for (let y = 0x1; y ** 0x2 <= N; y++) {
            if (x + y > N)
                break;
            for (let z = 0x1; z ** 0x2 <= N; z++) {
                const i = x ** 0x2 + y ** 0x2 + z ** 0x2 + x * y + y * z + z * x;
                if (i > N)
                    break;
                fn[i - 0x1]++;
            }
        }
    }
    console['log'](fn[_0x56d6c0(0x1a5)]('\x0a'));
}
function a0_0x292e() {
    const _0x200d4b = [
        'utf8',
        '30KypxEe',
        'join',
        '/dev/stdin',
        '3612372SyAOox',
        '175173fOtoGA',
        '16561305FWyMjw',
        '10jEZnTP',
        '32423730jxCZoT',
        '450477BHoFWy',
        '2795737voIXMT',
        '8MHipcg',
        '52616oCVqIY'
    ];
    a0_0x292e = function () {
        return _0x200d4b;
    };
    return a0_0x292e();
}
Main(require('fs')['readFileSync'](a0_0x55652b(0x1a6), a0_0x55652b(0x1a3)));