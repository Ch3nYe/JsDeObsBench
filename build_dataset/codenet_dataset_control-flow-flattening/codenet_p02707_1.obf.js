const Main = input => {
    const uxqKiq = {
        'vmkTF': function (x, y) {
            return x - y;
        },
        'JNGtN': function (x, y) {
            return x > y;
        }
    };
    const tmp = input['trim']()['split']('\x0a');
    const employees = parseInt(tmp[0x0]);
    const subordinateArray = tmp[0x1]['split']('\x20');
    const subordinateCount = {};
    const distinctSubordinate = subordinateArray['filter']((x, i, self) => self['indexOf'](x) === i);
    subordinateArray['forEach'](elem => {
        subordinateCount[elem] = subordinateCount[elem] ? subordinateCount[elem] + 0x1 : 0x1;
    });
    let result = [];
    distinctSubordinate['forEach'](elem => {
        return result['push'](subordinateCount[elem]);
    });
    const zeroCount = uxqKiq['vmkTF'](employees, distinctSubordinate['length']);
    if (uxqKiq['JNGtN'](zeroCount, 0x0)) {
        for (let index = 0x0; index < zeroCount; index++) {
            result['push'](0x0);
        }
    }
    result = result['join']('\x0a');
    console['log'](result);
    return result;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));