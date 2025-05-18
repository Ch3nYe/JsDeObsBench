const a0_0x14486e = a0_0x4321;
function a0_0x4321(mOycpi, key) {
    const stringArray = a0_0x5445();
    a0_0x4321 = function (index, key) {
        index = index - 0x163;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4321(mOycpi, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x32d7ac = a0_0x4321;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x32d7ac(0x163)) / 0x1 + -parseInt(_0x32d7ac(0x16d)) / 0x2 + parseInt(_0x32d7ac(0x169)) / 0x3 + parseInt(_0x32d7ac(0x164)) / 0x4 + parseInt(_0x32d7ac(0x16c)) / 0x5 * (-parseInt(_0x32d7ac(0x167)) / 0x6) + -parseInt(_0x32d7ac(0x166)) / 0x7 + parseInt(_0x32d7ac(0x16a)) / 0x8 * (parseInt(_0x32d7ac(0x165)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5445, 0xac4f5));
function a0_0x5445() {
    const _0x3f5d59 = [
        'readFileSync',
        '/dev/stdin',
        '467293myJCyE',
        '1988392YJDLnx',
        '13059VsSIaB',
        '2505993CmBHxv',
        '1410qUkXMu',
        'log',
        '896142sXZVnF',
        '6568xAivNs',
        'split',
        '9695LYPvOK',
        '690UPStDZ',
        'push'
    ];
    a0_0x5445 = function () {
        return _0x3f5d59;
    };
    return a0_0x5445();
}
function main(input) {
    const _0x45e390 = a0_0x4321;
    input = input[_0x45e390(0x16b)](/\s/);
    let h = parseInt(input[0x0]);
    let w = parseInt(input[0x1]);
    let mp = [];
    for (let i = 0x2; i < 0x2 + h; i++)
        mp[_0x45e390(0x16e)](input[i]);
    function check(x, y) {
        let res = 0x0;
        for (let i = 0x0; i < h; i++)
            if (mp[i][x] == '#') {
                res++;
                break;
            }
        for (let j = 0x0; j < w; j++)
            if (mp[y][j] == '#') {
                res++;
                break;
            }
        return res == 0x2;
    }
    for (let i = 0x0; i < h; i++) {
        ans = '';
        for (let j = 0x0; j < w; j++)
            if (check(j, i))
                ans = ans + mp[i][j];
        if (ans != '')
            console[_0x45e390(0x168)](ans);
    }
}
main(require('fs')[a0_0x14486e(0x16f)](a0_0x14486e(0x170), 'utf8'));