## Variables

## 不可变变量

```rs
let x = 5
```
1. 在`rust`中：上述语句表达的意思是，将5的`所有权`交给变量`x`,
2. 在其他语言中，则为将5赋值给x。
::: tip
let 声明的变量不可再赋值，再次赋值即会报语法错误(`cannot assign twice to immutable variable`)。
:::