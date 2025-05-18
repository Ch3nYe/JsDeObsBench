const Main = () => {
    let line = require('fs').readFileSync('/dev/stdin', 'utf8');
    const mod = {};
    let count = 0;
    for (let i = line.length; 0 < i; i--) {
        const n = parseInt(line, 10);
        const m = n % 2019;
        if (mod[m] || m === 0) {
            count ++;
        }
        mod[m] = true;
        line = line.slice(1);
    }
    console.log(count);
}

Main();