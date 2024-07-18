## 函数

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

## Links

1. [函数](https://course.rs/basic/base-type/function.html)