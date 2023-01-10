# Hello World

## 创建新项目

## 使用 rustc

因为`Rust`是静态语言，所以需要编译之后才可以执行（最大区别是变量数据类型不可变），而`Ruby、Python、JavaScript`是动态语言，所以可以直接执行。

1. 新建`main.rs`(约定文件后缀为rs)
```rs
// main.rs
fn main() {
    println!("Hello, world!");
}
```
2. `rustc main.rs` (main.rs为需要编译的rust文件，其实和gcc一样)
3. `main` (执行编译后的二进制)

## 使用 Cargo

::: tip 
:grinning:
我们将在新的`Rust`开发环境中编写一个小应用。首先用`Cargo`创建一个新项目。
:::
在您的终端中执行:

初始化项目:point_right: `cargo new hello-rust`

执行rust文件:point_right: `cargo run`