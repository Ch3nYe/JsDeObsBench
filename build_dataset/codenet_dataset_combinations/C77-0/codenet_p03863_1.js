function Main(s) {
  s = s.trim();
  const l = s.length;
  if((l & 1) ^ (s[0] === s[l-1]))
    console.log("First");
  else console.log("Second");
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));
