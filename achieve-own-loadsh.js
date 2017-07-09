
//  是否是素数
var isPrime = function(n) {
    /*
    n 是 int
    判断 n 是否是素数(质数)
    */
    var product = 1
    for (var i = 2; i < n; i++) {
        product *= (n % i)
    }
    if (product === 0) {
        return false
    }else {
        return true
    }
}
