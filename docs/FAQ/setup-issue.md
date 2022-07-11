# 环境搭建时碰到的问题
### 1. Hello-world，执行cargo build报错
这里使用的是Windows11的64位系统，所以需要安装相应的链接工具，
这里使用了gnu方式的Mingw-w64
>error: linker `link.exe` not found

> = note: program not found

#### 执行以下两行命令
```
1. rustup toolchain install stable-x86_64-pc-windows-gnu
2. rustup default stable-x86_64-pc-windows-gnu
```
可以看到系统路径已经有了.rustup\toolchains\stable-x86_64-pc-windows-gnu