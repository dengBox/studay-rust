# Variables

本章节主要讲述`rust`变量

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
x = 6 // [!code  error]
```
- 在`rust`中：上述语句表达的意思是，将5的`所有权`交给变量`x`,
- 在其他语言中，则为将`5`赋值给`x`。

## 可变变量

::: tip
通过关键字`mut`即可声明变量是可变的，在上述例子中将不会产生编译错误, 正常输出`The value of x is 6`
:::

```rs
let mut x = 5;
x = 6
println!("The value of x is:", x)
```

## 未使用变量

```rs
let _x = 5
```
- 通常在一些场景下（刚开始书写项目）我们会声明一些暂时使用不到的变量，此时只需要添加`_`前缀即可避开rust编译器的警告
- 添加`#[warn(unused_variables)]`

## 常量

```rs
const MAX_NUM: u32 = 100_000
```
通过上面的语法 就声明了一个不可变的变量.
## 变量遮蔽
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
这个程序首先将数值`5`绑定到`x`，然后通过重复使用`let x = `来遮蔽之前的`x`，并取原来的值加上`1`，所以`x`的值变成了 6。第三个`let`语句同样遮蔽前面的`x`，取之前的值并乘上`2`，得到的`x`最终值为`12`。当运行此程序，将输出以下内容：
```rs
The value of x in the inner scope is: 12
The value of x is: 6
```

## 变量解构

`let`表达式不仅仅用于变量的绑定，还能进行复杂变量的解构：从一个相对复杂的变量中，匹配出该变量的一部分内容
::: tip
`assert_eq`宏可以用于判断两个表达式返回的值是否相等
:::

```rs
fn main() {
  let (a, mut b): (bool,bool) = (true, false);
  // a = true,不可变; b = false，可变
  println!("a = {:?}, b = {:?}", a, b);

  b = true;
  assert_eq!(a, b);
}
```

### 解构赋值

我们可以在赋值语句的左式中使用元组、切片和结构体模式

```rust
struct Struct {
    e: i32
}

fn main() {
    let (a, b, c, d, e);

    (a, b) = (1, 2);
    // _ 代表匹配一个值，但是我们不关心具体的值是什么，因此没有使用一个变量名而是使用了 _
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };

    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);
}
```


