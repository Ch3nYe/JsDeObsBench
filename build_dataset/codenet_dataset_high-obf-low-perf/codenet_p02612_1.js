function Main(input) {
    const hyaku = Number(input)%1000;
    console.log(hyaku === 0 ? 0: 1000-hyaku);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));