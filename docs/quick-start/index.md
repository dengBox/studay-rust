# 环境搭建

开发`rust`需要一款趁手的编辑器以及`rust`编译环境，这里选用`Visual Studio Code`  
* [Rust 编译工具](https://www.rust-lang.org/zh-CN/tools/install)
* [Visual Studio Code](https://code.visualstudio.com/Download)

## 搭建 Visual Studio Code 开发环境

> Rust 的编译工具依赖 C 语言的编译工具，
1. 如果你使用的是`Linux`系统，往往已经具备了 GCC 或 clang。
2. 如果你使用的是 `macOS`，需要安装 Xcode。
3. 如果你是用的是`Windows`操作系统，你需要安装`Visual Studio 2013`或以上的环境（需要 C/C++ 支持）以使用 MSVC 或安装 MinGW + GCC 编译环境。

### 安装 Rust 编译工具

Rust 编译工具推荐使用刚才从上方链接中下载的 Rustup 安装。下载好的 Rustup 在 Windows 上是一个可执行程序 rustup-init.exe。（在其他平台上应该是`rustup-init.sh`）。

1. Rust 更新 `rustup update`
2. Rust 卸载 `rustup self uninstall`

#### Cargo：Rust 的构建工具和包管理器
您在安装 Rustup 时，也会安装 Rust 构建工具和包管理器的最新稳定版，即 Cargo。Cargo 可以做很多事情：

`cargo build` 可以构建项目
`cargo run` 可以运行项目
`cargo test` 可以测试项目
`cargo doc` 可以为项目构建文档
`cargo publish` 可以将库发布到 crates.io。
要检查您是否安装了 Rust 和 Cargo，可以在终端中运行：

cargo --version
### 安装 Visual Studio Code

在上面的链接中，直接下载安装即可。

#### 配置 Extensions

打开`Visual Studio Code`在左侧的扩展栏搜索以下两个插件进行安装。

1. Native Debug
2. rust-analyzer