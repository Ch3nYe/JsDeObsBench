let inputString = '';
process['stdin']['on']('data', _0x4d104d => {
    inputString += _0x4d104d;
});
process['stdin']['on']('end', function () {
    inputString = inputString['replace'](/\s*$/, '')['split']('\x0a')['map'](_0x1576d2 => _0x1576d2['replace'](/\s*$/, ''));
    selectionSort(inputString[0x1]['split']('\x20')['map'](_0x537f76 => Number(_0x537f76)));
});
const selectionSort = _0x4894a8 => {
    let _0x5c1647 = 0x0;
    for (let _0x1108d6 = 0x0; _0x1108d6 < _0x4894a8['length']; _0x1108d6++) {
        let _0x17997d = _0x1108d6;
        for (let _0x4ef8d7 = _0x1108d6; _0x4ef8d7 < _0x4894a8['length']; _0x4ef8d7++) {
            if (_0x4894a8[_0x4ef8d7] < _0x4894a8[_0x17997d]) {
                _0x17997d = _0x4ef8d7;
            }
        }
        const _0x244afd = _0x4894a8[_0x1108d6];
        const _0x277266 = _0x4894a8[_0x17997d];
        if (_0x244afd !== _0x277266) {
            _0x4894a8[_0x17997d] = _0x244afd;
            _0x4894a8[_0x1108d6] = _0x277266;
            _0x5c1647++;
        }
    }
    console['log'](_0x4894a8['join']('\x20'));
    console['log'](_0x5c1647);
};