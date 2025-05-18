new Promise(function(resolve, reject) {
    let cin = "";
    process.stdin
        .on("data", chunk => { cin += chunk; })
        .on("end", () => { resolve([cin, process.stdout]); });
}).then(function([cin, cout]) {
    for (const b of cin.split(/[ \n]/).map(elt => parseInt(elt))) {
        if (b === 0) {
            break ;
        }
        let opt = "\n";
        for (let m = 1; m * (m - 1) < 2 * b; ++m) {
            const det = 2 * b - m * (m - 1);
            if (det % (2 * m) === 0) {
                opt = `${det / (2 * m)} ${m}\n`;
            }
        }
        cout.write(opt);
    }
});

