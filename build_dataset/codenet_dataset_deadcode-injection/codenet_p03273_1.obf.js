function a0_0x1b9d(GNOfZx, key) {
    const stringArray = a0_0x2da5();
    a0_0x1b9d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1b9d(GNOfZx, key);
}
const a0_0x119e1c = a0_0x1b9d;
function main(input) {
    const _0x187299 = a0_0x1b9d;
    input = input['split'](/\s/);
    let h = parseInt(input[0x0]);
    let w = parseInt(input[0x1]);
    let mp = [];
    for (let i = 0x2; i < 0x2 + h; i++)
        mp[_0x187299(0x0)](input[i]);
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
            console[_0x187299(0x1)](ans);
    }
}
function a0_0x2da5() {
    const _0x4b7f8e = [
        'push',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2da5 = function () {
        return _0x4b7f8e;
    };
    return a0_0x2da5();
}
main(require('fs')[a0_0x119e1c(0x2)]('/dev/stdin', a0_0x119e1c(0x3)));