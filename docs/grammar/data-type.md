# DataType

本文主要介绍`rust`中的数据类型。总的来说可以分为两类：`基本`类型和`复合`类型还有`自定义`类型。

## 基本类型
基本类型意味着它们往往是一个最小化原子类型，无法解构为其它类型(一般意义上来说)，由以下组成：

1. 数值类型: 有符号整数`(i8, i16, i32, i64, isize)`、无符号整数`(u8, u16, u32, u64, usize)`、浮点数`(f32, f64)`、以及有理数、复数。
2. 字符串：字符串字面量和字符串切片`&str`。
3. 布尔类型: `true`和`false`。
4. 字符类型: 表示单个`Unicode`字符，存储为`4`个字节。
5. 单元类型: 即`()`，其唯一的值也是`()`。

### 数值类型

>数值分为以下两种情况：

**整数类型**

:::tip
每个有符号类型规定的数字范围是$-(2^{n - 1})$ ~ $2^{n - 1} - 1$，其中`n`是该定义形式的位长度。因此`i8`可存储数字范围是$-(2^7)$ ~ $2^7 - 1$，即 -128 ~ 127。无符号类型可以存储的数字范围是 0 ~ $2^n - 1$，所以`u8`能够存储的数字为 0 ~ $2^8 - 1$，即 0 ~ 255。
:::

整数是没有小数部分的数字。之前使用过的`i32`类型，表示有符号的 `32`位整数（`i`是英文单词`integer`的首字母，与之相反的是`u`，代表无符号`unsigned`类型）。下表显示了`Rust`中的内置的整数类型：

| 长度        | 有符号名称           | 无符号名称  |
| ------------- |:-------------:| -----|
| 8位    | i8 | u8 |
| 16位    | i16 | u16 |
| 32位    | i32 | u32 |
| 64位    | i64 | u64 |
| 128位    | i128 | u128 |
| 视架构而定    | isize | usize |

类型定义的形式统一为：有无符号 + 类型大小(位数)。无符号数表示数字只能取正数，而有符号则表示数字既可以取正数又可以取负数。就像在纸上写数字一样：当要强调符号时，数字前面可以带上正号或负号；然而，当很明显确定数字为正数时，就不需要加上正号了。有符号数字以补码形式存储。

此外`isize`和`usize`类型取决于程序运行的计算机`CPU`类型： 若`CPU`是`32`位的，则这两个类型是`32`位的，同理，若`CPU`是`64`位，那么它们则是`64`位。

这么多类型，有没有一个简单的使用准则？答案是肯定的， Rust 整型默认使用`i32`，例如 let i = 1，那 i 就是 i32 类型，因此你可以首选它，同时该类型也往往是性能最好的。isize 和 usize 的主要应用场景是用作集合的索引。

### 整型溢出

假设有一个`u8`，它可以存放从`0`到`255`的值。那么当你将其修改为范围之外的值，比如`256`则会发生整型溢出。关于这一行为`Rust`有一些有趣的规则：当在`debug`模式编译时`Rust`会检查整型溢出，若存在这些问题，则使程序在编译时`panic`(崩溃,`Rust` 使用这个术语来表明程序因错误而退出)。

**浮点类型**

浮点类型数字 是带有小数点的数字，在`Rust`中浮点类型数字也有两种基本类型：`f32`和`f64`，分别为 32 位和 64 位大小。默认浮点类型是`f64`，在现代的 CPU 中它的速度与`f32`几乎相同，但精度更高。

> 浮点数根据 IEEE-754 标准实现。f32 类型是单精度浮点型，f64 为双精度。

浮点数计算与其他语言都存在精度的问题，如`0.1`

你需要遵守以下准则：

1. 避免在浮点数上测试相等性
2. 当结果在数学上可能存在未定义时，需要格外的小心。

**NaN**
对于数学上未定义的结果，例如对负数取平方根 -42.1.sqrt() ，会产生一个特殊的结果：Rust 的浮点数类型使用`NaN`(not a number)来处理这些情况。

所有跟`NaN`交互的操作，都会返回一个`NaN`，而且`NaN`不能用来比较

出于防御性编程的考虑，可以使用`is_nan()`等方法，可以用来判断一个数值是否是`NaN`：

```rust
fn main() {
  let x = (-42.0_f32).sqrt();
  if x.is_nan() {
      println!("未定义的数学行为")
  }
}
```

## 数字运算

`Rust`支持所有数字类型的基本数学运算：加法、减法、乘法、除法和取模运算:
```rust
fn main() {
  // 加法
  let sum = 5 + 10;

  // 减法
  let difference = 95.5 - 4.3;

  // 乘法
  let product = 4 * 30;

  // 除法
  let quotient = 56.7 / 32.2;

  // 求余
  let remainder = 43 % 5;
}
```

## 位运算
Rust的运算基本上和其他语言一样

| 运算符        | 说明           |
| ------------- |:-------------:|
| & 位与    | 相同位置均为1时则为1，否则为0 |
| | 位或    | 相同位置只要有1时则为1，否则为0 |
| ^ 异或    | 相同位置不相同则为1，相同则为0 |
| ! 位非    | 把位中的0和1相互取反，即0置为1，1置为0 |
| << 左移    | 所有位向左移动指定位数，右位补零 |
| >> 右移    | 所有位向右移动指定位数，左位补零 |

```rust
fn main() {
    // 二进制为00000010
    let a:i32 = 2;
    // 二进制为00000011
    let b:i32 = 3;

    println!("(a & b) value is {}", a & b);

    println!("(a | b) value is {}", a | b);

    println!("(a ^ b) value is {}", a ^ b);

    println!("(!b) value is {} ", !b);

    println!("(a << b) value is {}", a << b);

    println!("(a >> b) value is {}", a >> b);

    let mut a = a;
    // 注意这些计算符除了!之外都可以加上=进行赋值 (因为!=要用来判断不等于)
    a <<= b;
    println!("(a << b) value is {}", a);
}
```

## 序列(Range)

`Rust`提供了一个非常简洁的方式，用来生成连续的数值，例如`1..5`，生成从`1`到`4`的连续数字，不包含`5`；`1..=5`，生成从`1`到`5`的连续数字，包含`5`，它的用途很简单，常常用于循环中：
```rust
for i in 1..=5 {
  println!("{}",i);
}
```

## 有理数和复数


## Links
[数据类型](https://course.rs/basic/base-type/numbers.html#%E6%95%B4%E6%95%B0%E7%B1%BB%E5%9E%8B)