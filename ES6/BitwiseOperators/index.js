/**
* 本节对js位运算进行讨论和练习
* @date: 2017-08-03
* @author: hyting
* @description: js的位运算是仿的java位运算，但是由于js中只有double类型，不像java包含int类型，
*       所以位运算时需要将double转为int类型，导致效率不是很高。
*/

/**
* &运算
* a&b 对于a、b每一个比特位进行运算，都是1则返回1，否则为0
* 例如 3&5 => 0 1 1 => 3&5=1
*            1 0 1
*           -------
*            0 0 1
* 应用：判断奇偶性 n&1 == 1则说明为奇数 0则为偶数
*/
const isOdd = num => {
    if (isNaN(num) || parseInt(num) !== num) {
        return false;
    }
    return !!(num & 1);
};

/**
* |运算
* a|b 对于a、b每一个比特位进行运算，其中至少一位含有1则返回1，否则为0
* 例如 3|5 => 0 1 1 => 3|5=7
*            1 0 1
*           -------
*            1 1 1
* 应用：向下取整,通Math.floor()  n|0 = n 任何整数和0进行|运算，都会得到该整数位
*/
const floor = num => {
    if (isNaN(num)) {
        return false;
    }
    return num | 0;
};

/**
* 大小写转换（无实用价值，String提供的toUpperCase和toLowerCase已经满足实用）
* params: itemStr待转换字符串，toUpFlag是否转换大写
*/
const manualCase = (itemStr, toUpFlag = true) => {
    const reg = toUpFlag ? /[a-z]/g : /[A-Z]/g;
    return itemStr.replace(reg, char => {
        return String.fromCharCode(toUpFlag ? (char.charCodeAt(0) & ~32) : (char.charCodeAt(0) | 32));
    });
};

/**
* ^运算
* a^b 对于a、b每一个比特位进行运算，只含有一个1则返回1，否则为0
* 例如 3^5 => 0 1 1 => 3^5=6
*            1 0 1
*           -------
*            1 1 0
* 应用：不借助第三个变量交换两变量值  取异后再取异会得到原数 8^13^8=13
*/
let a = 3;
let b = 5;
a ^= b;
b ^= a;
a ^= b;

/**
* ~运算
* ~a 反转操作数的比特位，即0变成1，1变成0。
* 正数变为负数的操作是：对正数（int型含有32位）各位取反（0-1，1-0），然后再加1。
*       所以对一个数n取反运算的结果值，就是 ~n = -(n+1);
* 例如 ~5 =>                                      => ~5=-6 (= -5-1)
*            00000000 00000000 00000000 00000101
*           -------------------------------------
*            11111111 11111111 11111111 11111010
* 应用：
*/
