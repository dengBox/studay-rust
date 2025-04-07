# Function

`Rust`中的函数与`Typescript`很相似，关键字从`function`改为`fn`, 使用`->`标记函数返回类型即可。

```rust
fn add(i: i32, j: i32) -> i32 {
   i + j
 }
```

## 函数要点
1. 函数名和变量名使用蛇形命名法(`snake case`)，例如`fn add_two() -> {}`
2. 函数的位置可以随便放，`Rust`不关心我们在哪里定义了函数，只要有定义即可
3. 每个函数参数都需要标注类型

```rust
fn main() {
    another_function(5, 6.1);
}

fn another_function(x: i32, y: f32) {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
}
```

## 函数返回
在上一章节语句和表达式中，我们有提到，在`Rust`中函数就是表达式，因此我们可以把函数的返回值直接赋给调用者。

函数的返回值就是函数体最后一条表达式的返回值，当然我们也可以使用`return`提前返回，下面的函数使用最后一条表达式来返回一个值：

```rust
fn plus_or_minus(x:i32) -> i32 {
    if x > 5 {
        return x - 5
    }

    x + 5
}

fn main() {
    let x = plus_or_minus(5);

    println!("The value of x is: {}", x);
}
```

### 隐式返回
1. 函数没有返回值，那么返回一个`()`
2. 通过`;`结尾的语句返回一个`()`(其实也就是表达这是一个语句，具体可以看上章中的语句和表达式)

```rust
use std::fmt::Debug;

fn report<T: Debug>(item: T) {
  println!("{:?}", item);

}

```

### 永不返回

```rust
fn dead_end() -> ! {
  panic!("你已经到了穷途末路，崩溃吧！")
  // todo!()
  // unimplemented!()
  // loop {
  //   std::thread::sleep(std::time::Duration::from_secs(1))
  // }
}

fn dead_end() {
    never_return();
}

```

## Links

1. [函数](https://course.rs/basic/base-type/function.html)