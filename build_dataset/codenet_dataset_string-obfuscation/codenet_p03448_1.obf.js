const a0_0x55d020 = a0_0x5a95;
function a0_0xd232() {
    const _0x30031a = [
        '6cPgtFo',
        '140967vfReHG',
        '7144123wtRwuY',
        '26ohVefK',
        '4878260aQpGFF',
        '24mSArHH',
        'utf8',
        '33769wUahPC',
        '2292381xGTMdf',
        '5045359wEtnCS',
        'log',
        '4410UKFTId',
        '372sQRJRW',
        'slice'
    ];
    a0_0xd232 = function () {
        return _0x30031a;
    };
    return a0_0xd232();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x4f5074 = a0_0x5a95;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4f5074(0x191)) / 0x1 * (parseInt(_0x4f5074(0x18d)) / 0x2) + -parseInt(_0x4f5074(0x184)) / 0x3 + -parseInt(_0x4f5074(0x188)) / 0x4 * (parseInt(_0x4f5074(0x187)) / 0x5) + parseInt(_0x4f5074(0x18a)) / 0x6 * (parseInt(_0x4f5074(0x18c)) / 0x7) + -parseInt(_0x4f5074(0x18f)) / 0x8 * (parseInt(_0x4f5074(0x18b)) / 0x9) + -parseInt(_0x4f5074(0x18e)) / 0xa + parseInt(_0x4f5074(0x185)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd232, 0x832c7));
function main(input) {
    const _0x499e16 = a0_0x5a95;
    const input_array = input['split']('\x0a');
    const coins_count = input_array[_0x499e16(0x189)](0x0, 0x3);
    const desired_sum = parseInt(input_array[_0x499e16(0x189)](-0x1), 0xa);
    var answer = 0x0;
    for (i = 0x0; i <= parseInt(coins_count[0x0], 0xa); i++) {
        for (j = 0x0; j <= parseInt(coins_count[0x1], 0xa); j++) {
            for (k = 0x0; k <= parseInt(coins_count[0x2], 0xa); k++) {
                if (0x1f4 * i + 0x64 * j + 0x32 * k == desired_sum) {
                    answer++;
                }
            }
        }
    }
    console[_0x499e16(0x186)](answer);
}
function a0_0x5a95(KwzPDM, key) {
    const stringArray = a0_0xd232();
    a0_0x5a95 = function (index, key) {
        index = index - 0x184;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5a95(KwzPDM, key);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x55d020(0x190)));