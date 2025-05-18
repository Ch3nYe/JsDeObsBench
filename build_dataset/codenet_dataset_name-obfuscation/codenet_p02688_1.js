function Main(input) {
    tmp = input.split("\n");
    tmp2 = tmp[0].split(" ");
    var n = parseInt(tmp2[0], 10);
    var k = parseInt(tmp2[1], 10);
    tmp.shift();
    arry = tmp.slice();
    list = [];
    count = 0;
    tmp3 = [];

    for (let i = 0; i < arry.length; i++) {
       if (i % 2 !== 0) {

           arry[i] = arry[i].split(" ");
           tmp3 = arry[i].map(Number);

           for (let index = 0; index < tmp3.length; index++) {
               list.push(tmp3[index]);
           }
       }
    }
  
    for (let i = 1; i <= n; i++) {
        if (list.indexOf(i) >= 0) {
            
        } else{
            count += 1;
        }        
    }

    console.log(count);    

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));