const a0_0x4fcbd8 = a0_0x5d5c;
function a0_0x5d5c(OgDyby, key) {
    const stringArray = a0_0x2c41();
    a0_0x5d5c = function (index, key) {
        index = index - 0x1ee;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5d5c(OgDyby, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x22a653 = a0_0x5d5c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x22a653(0x1f4)) / 0x1 + -parseInt(_0x22a653(0x1f7)) / 0x2 + parseInt(_0x22a653(0x1f1)) / 0x3 + -parseInt(_0x22a653(0x1fa)) / 0x4 * (parseInt(_0x22a653(0x1f9)) / 0x5) + -parseInt(_0x22a653(0x1fb)) / 0x6 + parseInt(_0x22a653(0x1f8)) / 0x7 + -parseInt(_0x22a653(0x1ee)) / 0x8 * (-parseInt(_0x22a653(0x1f5)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c41, 0xc841a));
function Main(input) {
    const _0x2fd316 = a0_0x5d5c;
    input = input[_0x2fd316(0x1f3)]('');
    let N = input[_0x2fd316(0x1f0)]('N');
    let S = input[_0x2fd316(0x1f0)]('S');
    let E = input['includes']('E');
    let W = input[_0x2fd316(0x1f0)]('W');
    let NS = N && S || !N && !S;
    let EW = E && W || !E && !W;
    if (NS && EW) {
        console[_0x2fd316(0x1fc)]('Yes');
    } else {
        console[_0x2fd316(0x1fc)]('No');
    }
}
Main(require('fs')[a0_0x4fcbd8(0x1f6)](a0_0x4fcbd8(0x1ef), a0_0x4fcbd8(0x1f2)));
function a0_0x2c41() {
    const _0x21ee4b = [
        'readFileSync',
        '3260464cJnrVC',
        '6381466JcJdJA',
        '4390pITSXp',
        '2836MtKdtg',
        '4197120zZJXud',
        'log',
        '4968INZpby',
        '/dev/stdin',
        'includes',
        '4528347XEVYPi',
        'utf8',
        'split',
        '170275TpitOT',
        '17118erdaGo'
    ];
    a0_0x2c41 = function () {
        return _0x21ee4b;
    };
    return a0_0x2c41();
}