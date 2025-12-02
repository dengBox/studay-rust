# struct

结构体`struct`恰恰是复合数据结构，它是由其它数据类型组合而来。 其它语言也有类似的数据结构，不过可能有不同的名称，例如`javascript`的 `Object`。

结构体跟之前讲过的元组有些相像：都是由**多种类型组合**而成。但是与元组不同的是，结构体可以为内部的每个字段起一个富有含义的名称。因此结构体更加灵活更加强大，你无需依赖这些字段的顺序来访问和解析它们。

## 结构体语法

**定义结构体**

一个结构体由几部分组成：

1. 通过关键字`struct`定义
2. 一个清晰明确的结构体**名称**
3. 几个有名字的结构体**字段**
4. 
例如, 以下结构体定义了某网站的用户：
```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

```

该结构体名称是`User`，拥有`4`个字段，且每个字段都有对应的字段名及类型声明，例如`username`代表了用户名，是一个可变的`String`类型。

**创建结构体实例**

为了使用上述结构体，我们需要创建`User`结构体的实例：
```rust
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

```

有几点值得注意:

1. 初始化实例时，每个字段都**需要**进行初始化
2. 初始化时的字段顺序**不需要**和结构体定义时的顺序一致

**访问结构体字段**

通过`.`操作符即可访问结构体实例内部的字段值，也可以修改它们：
```rust
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");

```

需要注意的是，必须要将结构体实例声明为**可变的**，才能修改其中的字段，`Rust`不支持将某个结构体某个字段标记为可变。

**简化结构体创建**

当函数参数和结构体字段同名时，可以直接使用缩略的方式进行初始化，跟`TypeScript`中一模一样。
```rust

fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}

```

**结构体更新语法**

因为`user2`仅仅在`email`上与`user1`不同，因此我们只需要对`email`进行赋值，剩下的通过结构体更新语法`..user1`即可完成。

`..`语法表明凡是我们没有显式声明的字段，全部从`user1`中自动获取。需要注意的是`..user1`必须在结构体的**尾部**使用。
```rust
    let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };
```
:::tip
结构体更新语法跟赋值语句 = 非常相像，因此在上面代码中，user1 的部分字段所有权被转移到 user2 中：username 字段发生了所有权转移，作为结果，user1 无法再被使用。

聪明的读者肯定要发问了：明明有三个字段进行了自动赋值，为何只有 username 发生了所有权转移？

仔细回想一下所有权那一节的内容，我们提到了 Copy 特征：实现了 Copy 特征的类型无需所有权转移，可以直接在赋值时进行 数据拷贝，其中 bool 和 u64 类型就实现了 Copy 特征，因此 active 和 sign_in_count 字段在赋值给 user2 时，仅仅发生了拷贝，而不是所有权转移。

值得注意的是：username 所有权被转移给了 user2，导致了 user1 无法再被使用，但是并不代表 user1 内部的其它字段不能被继续使用，例如：
:::

```rust
let user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};
let user2 = User {
    active: user1.active,
    username: user1.username,
    email: String::from("another@example.com"),
    sign_in_count: user1.sign_in_count,
};
println!("{}", user1.active);
// 下面这行会报错
println!("{:?}", user1);

```

**把结构体中具有所有权的字段转移出去后，将无法再访问该字段，但是可以正常访问其它的字段。**

## 元组结构体(Tuple Struct)

结构体必须要有名称，但是结构体的字段可以没有名称，这种结构体长得很像元组，因此被称为元组结构体，例如：
```rust
    struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);

    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);

```
元组结构体在你希望有一个整体名称，但是又不关心里面字段的名称时将非常有用。例如上面的`Point`元组结构体，众所周知`3D`点是`(x, y, z)`形式的坐标点，因此我们无需再为内部的字段逐一命名为：`x, y, z`。

## 单元结构体(Unit-like Struct)

还记得之前讲过的基本没啥用的单元类型吧？单元结构体就跟它很像，没有任何字段和属性，但是好在，它还挺有用。

如果你定义一个类型，但是不关心该类型的内容，只关心它的行为时，就可以使用 单元结构体：
```rust
struct AlwaysEqual;

let subject = AlwaysEqual;

// 我们不关心 AlwaysEqual 的字段数据，只关心它的行为，因此将它声明为单元结构体，然后再为它实现某个特征
impl SomeTrait for AlwaysEqual {}

```

## 结构体数据的所有权

在之前的`User`结构体的定义中，有一处细节：我们使用了自身拥有所有权的`String`类型而不是基于引用的`&str`字符串切片类型。这是一个有意而为之的选择：因为我们想要这个结构体拥有它所有的数据，而不是从其它地方借用数据。

你也可以让`User`结构体从其它对象借用数据，不过这么做，就需要引入生命周期(`lifetimes`)这个新概念（也是一个复杂的概念），简而言之，生命周期能确保结构体的作用范围要比它所借用的数据的作用范围要小。

总之，如果你想在结构体中使用一个引用，就必须加上生命周期，否则就会报错：
```rust
struct User {
    username: &str,
    email: &str,
    sign_in_count: u64,
    active: bool,
}

fn main() {
    let user1 = User {
        email: "someone@example.com",
        username: "someusername123",
        active: true,
        sign_in_count: 1,
    };
}
```

## 使用 #[derive(Debug)] 来打印结构体的信息

首先，`Rust`默认不会为我们实现`Debug`，为了实现，有两种方式可以选择：

1. 手动实现
2. 使用`derive`派生实现
后者简单的多，但是也有限制，具体见附录 D，这里我们就不再深入讲解，来看看该如何使用:

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {:?}", rect1);
}
```
:::tip
当结构体较大时，我们可能希望能够有更好的输出表现，此时可以使用`{:#?}`来替代`{:?}`，输出如下:
:::

还有一个简单的输出`debug`信息的方法，那就是使用`dbg!`宏，它会拿走表达式的所有权，然后打印出相应的文件名、行号等`debug`信息，当然还有我们需要的表达式的求值结果。除此之外，它最终还会把表达式值的所有权返回！
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let scale = 2;
    let rect1 = Rectangle {
        width: dbg!(30 * scale),
        height: 50,
    };

    dbg!(&rect1);
}
```

最终的`debug`输出如下：
```shell
$ cargo run
[src/main.rs:10] 30 * scale = 60
[src/main.rs:14] &rect1 = Rectangle {
    width: 60,
    height: 50,
}
```



