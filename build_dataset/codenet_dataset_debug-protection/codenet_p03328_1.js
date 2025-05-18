// inputに入力データ全体が入る
function Main(input) {
    input = input.split(' ');
    //文字列から10進数に変換するときはparseIntを使います
    var a = parseInt(input[0], 10);
    var b = parseInt(input[1], 10);
    
    var a_real = 1;
    var b_real = 1;
    var a_count = 1
    var b_count = 1
    var ans = 0;
    while ( true ) {
        while ( true ) {
            a_count++;
            a_real += a_count;
            b_count++;
            b_real += b_count;
            if (a_real > a) {
                break;
            }
        }
        while ( true ) {
            b_count++;
            b_real += b_count;
            if (b_real > b) {
                break;
            }
        }
        if ( (a_real - a) == (b_real - b)) {
            break;
        }
    }
    ans = a_real - a;
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
