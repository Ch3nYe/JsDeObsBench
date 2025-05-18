function a0_0x1ac9(uaBLHm, key) {
    const stringArray = a0_0x3241();
    a0_0x1ac9 = function (index, key) {
        index = index - 0x158;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ac9(uaBLHm, key);
}
const a0_0x3f347e = a0_0x1ac9;
function a0_0x3241() {
    const _0x312054 = [
        '5325940gcBVUB',
        '31712MALMqE',
        'trim',
        '7587720NWPAOt',
        '432300ywWnMR',
        '/dev/stdin',
        'length',
        'map',
        'split',
        'every',
        'utf8',
        '5UxmHcr',
        '2676822kXhNfA',
        'min',
        'keys',
        '9389450zWSlOR',
        'log',
        '5134728YWNaGo'
    ];
    a0_0x3241 = function () {
        return _0x312054;
    };
    return a0_0x3241();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5befc6 = a0_0x1ac9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5befc6(0x160)) / 0x1 + -parseInt(_0x5befc6(0x163)) / 0x2 + -parseInt(_0x5befc6(0x159)) / 0x3 + -parseInt(_0x5befc6(0x15f)) / 0x4 + -parseInt(_0x5befc6(0x158)) / 0x5 * (-parseInt(_0x5befc6(0x15e)) / 0x6) + parseInt(_0x5befc6(0x15c)) / 0x7 + parseInt(_0x5befc6(0x162)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3241, 0xa48be));
function main(input) {
    const _0x52b060 = a0_0x1ac9;
    const lines = input[_0x52b060(0x161)]()[_0x52b060(0x167)]('\x0a');
    const [N, M, X] = splitN(lines[0x0]);
    const costs = [];
    const options = [...Array(N)[_0x52b060(0x15b)]()];
    select(options);
    function select(options, cost = 0x0, aList = []) {
        const _0x22b2a1 = _0x52b060;
        for (let i = 0x0; i < options[_0x22b2a1(0x165)]; i++) {
            const _options = [...options], [s] = _options['splice'](i, 0x1), [c, ...a] = splitN(lines[s + 0x1]), _cost = cost + c, _aList = a['map']((v, i) => v + (aList[i] || 0x0));
            if (_aList[_0x22b2a1(0x168)](v => v >= X)) {
                costs['push'](_cost);
                continue;
            }
            select(_options, _cost, _aList);
        }
    }
    console[_0x52b060(0x15d)](costs['length'] ? Math[_0x52b060(0x15a)](...costs) : -0x1);
}
main(require('fs')['readFileSync'](a0_0x3f347e(0x164), a0_0x3f347e(0x169)));
function splitN(s) {
    const _0x28314e = a0_0x3f347e;
    return s[_0x28314e(0x167)]('\x20')[_0x28314e(0x166)](Number);
}