function Main(input) {
  input = input.split("\n");
  let target = parseInt(input[0].split(" ")[0]);
  let zerocheck = parseInt(input[0].split(" ")[1]);
  if (zerocheck == 0) {
    console.log(target);
  } else {
    let str = input[1].split(" ");
    for (let i = 0; i < str.length; i++) {
      let num = parseInt(str[i]);
      str[i] = target - num;
    }
    for (let ite = 1; ite <= 100; ite++) {
      const isp = str.indexOf(ite);//小さい方
      const isn = str.indexOf(-ite);//大きい方
      if (isp == -1) {
        console.log(target - ite);
        break;
      }
      if (isn == -1) {
        console.log(target + ite);
        break;
      }
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));