function Main(input) {
  let t = input.split("\n")[0], n , a = new Array(n), s = new Array(n), x = 0;
  
  for (let i = 0; i < t; i++) {
    n = input.split("\n")[i*3+1];
    a = input.split("\n")[i*3+2].split(" ");
    s = input.split("\n")[i*3+3].split("");

    let tmp;

    for (let j = 0; j < n; j++) {
      tmp = x ^ a[j];
      
      if (s[j] == 0) {
        if (tmp == 0) x = tmp;
      } else x = tmp;      
    }
    
    if (x == 0) {
      console.log(0)
    } else console.log(1);
    
    x = 0;
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));