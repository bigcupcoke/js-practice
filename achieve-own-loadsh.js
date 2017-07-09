
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

var find = function(s1, s2) {
    if (s1.includes(s2) === true) {
        for (var i = 0; i < s1.length; i++) {
            var char = s1[i]
            if (char === s2) {
                break
            }
        }
        return i
    } else {
        return -1
    }
}

var uppercase = function(s) {
    //  初始化一个空字符串
    var result = ''
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < s.length; i++) {
        var index = find(lower, s[i])
        result += upper[index]
    }
    return result
}

var capString = function(str) {
    /*
    给定一个英文句子 str（由空格隔开的单词组成的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
    var foo = []
    var bar = str.split(' ')
    for (var i = 0; i < bar.length; i++) {
        var e = bar[i]
        e = uppercase(e[0]) + e.slice(1)
        foo.push(e)
        }
    return foo.join(' ')
}

var letterCount = function(str) {
    /*
    给定一个只包含字母的字符串，返回单个字母出现的次数
    考察字典的概念和使用
    返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

    // 可以使用 Object.keys 函数
    var obj = {
      foo: 1,
      bar: 2,
    }
    Object.keys(obj)
    ["foo", "bar"]

    参数 "hello"
    返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
    */
    var foo = {}
    for (var i = 0; i < str.length; i++) {
        let far = Object.keys(foo)
        var e = str[i]
        if (far.includes(e)) {
            foo[e]++
        }else {
            foo[e] = 1
        }
    }

    var arr = []
    for (var i = 0; i < Object.keys(foo).length; i++) {
        var e = Object.keys(foo)[i]
        var bar = []
        bar.push(e)
        bar.push(foo[e])
        arr.push(bar)
    }
    return arr
}

var queryFromObject = function(param) {
    /*
    param 是一个 object
    例子如下
    param 是 {
        'foo': 1,
        'bar': 'far',
    }
    返回如下 string, 顺序不做要求(foo bar 的顺序)
    foo=1&bar=far

    注意, 使用 Object.keys 函数
    */
    var foo = []
    for (var i = 0; i < Object.keys(param).length; i++) {
        var e = Object.keys(param)[i]
        var bar = []
        bar.push(`${e}=${param[e]}`)
        foo.push(bar)
    }
    return foo.join('&')
}

var ajaxGet = function(url, callback) {
    /*
    利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
    url 是一个 URL
    callback 是一个函数, 在接受服务器响应后调用并传递参数给它
    本题不会就放弃
    */
    var r = new XMLHttpRequest()
    r.open('GET', url, true)
    r.onreadystatechange = function(event) {
        if(r.readyState === 4){
        console.log('statechange', r)
        callback(r.response)
        }
    }
    r.send()
}

var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
        method, 请求的方法, string
        url, 请求的路径, string
        data, 请求发送的数据, 如果是 GET 方法则没这个值, string
        callback, 响应回调, function

    本题不会就放弃, 本题带了一个用法在下方
    */
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    if (request.contentType !== undefined) {
        r.setRequestHeader('Content-Type', request.contentType)
    }
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}
