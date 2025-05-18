function Main(_0x108a43) {
    inputList = _0x108a43['split']('\x0a');
    inputNum = parseInt(inputList[0x0], 0xa);
    firstList = inputList[0x1]['split']('');
    secondList = inputList[0x2]['split']('');
    thirdList = inputList[0x3]['split']('');
    count = 0x0;
    for (var _0x168058 = 0x0; _0x168058 < inputNum; _0x168058++) {
        if (firstList[_0x168058] == secondList[_0x168058] && secondList[_0x168058] == thirdList[_0x168058]) {
            continue;
        }
        if (firstList[_0x168058] == secondList[_0x168058] || secondList[_0x168058] == thirdList[_0x168058] || thirdList[_0x168058] == firstList[_0x168058]) {
            count++;
            continue;
        }
        count++;
        count++;
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));