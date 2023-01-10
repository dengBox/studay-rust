# Variables

本章节主要讲述`rust`语法

## 变量
> 变量类型一旦确定就不可变且在声明时必须赋值。(跟js最大的区别)

在`rust`中有两种声明变量的语法，分别是：
1. `let`通常用来生成变量和可变变量（`mut`）
2. `const`通常用来生成不可变常量，常量在声明时需要确定其数据类型）

## 不可变变量

::: tip
`let` 直接 声明的变量不可再赋值，再次赋值即会报语法错误(`cannot assign twice to immutable variable`)。
:::

```rs
let x = 5;
x = 6
```
1. 在`rust`中：上述语句表达的意思是，将5的`所有权`交给变量`x`,
2. 在其他语言中，则为将5赋值给x。

## 可变变量

::: tip
通过关键字`mut`即可声明变量是可变的，在上述例子中将不会产生编译错误, 正常输出`The value of x is 6`
:::

```rs
let mut x = 5;
x = 6
println!("The value of x is:", x)
```

### 未使用变量

```rs
let _x = 5
```
通常在一些场景下（刚开始书写项目）我们会声明一些暂时使用不到的变量，此时只需要添加`_`前缀即可避开rust编译器的警告

### 常量

```rs
const MAX_NUM: u32 = 100_000
```
通过上面的语法 就声明了一个不可变的变量.
### 变量遮蔽
::: tip
变量遮蔽与可变变量的区别是会重新生成新的变量，再次分配一次内存。
:::
```rs
fn main() {
  let x = 5;
  // 在main函数的作用域内对之前的x进行遮蔽
  let x = x + 1;

  {
    // 在当前的花括号作用域内，对之前的x进行遮蔽
    let x = x * 2;
    println!("The value of x in the inner scope is: {}", x);
  }

  println!("The value of x is: {}", x);
}
```
这个程序首先将数值 5 绑定到 x，然后通过重复使用 let x = 来遮蔽之前的 x，并取原来的值加上 1，所以 x 的值变成了 6。第三个 let 语句同样遮蔽前面的 x，取之前的值并乘上 2，得到的 x 最终值为 12。当运行此程序，将输出以下内容：
```rs
The value of x in the inner scope is: 12
The value of x is: 6
```

## Links

[rust-docs](https://doc.rust-lang.org/book/)
[rust-dpcs-zh](https://kaisery.github.io/trpl-zh-cn/)