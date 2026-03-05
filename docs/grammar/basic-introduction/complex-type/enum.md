# enum

枚举(`enum` 或 `enumeration`)允许你通过列举可能的成员来定义一个枚举类型，例如扑克牌花色:
```rust
enum PokerSuit {
  Clubs,
  Spades,
  Diamonds,
  Hearts,
}
```

扑克总共有四种花色，而这里我们枚举出所有的可能值，这也正是**枚举**名称的由来。

**枚举值**只可能是其中某一个成员

**枚举类型是一个类型，它会包含所有可能的枚举成员，而枚举值是该类型中的具体某个成员的实例。**

## 枚举值

现在来创建`PokerSuit`枚举类型的两个成员实例：
```rust
let heart = PokerSuit::Hearts;
let diamond = PokerSuit::Diamonds;
```

通过`::`操作符来访问`PokerSuit`下的具体成员, `print_suit`函数的参数类型是`PokerSuit`因此我们可以把`heart`和`diamond`传给它，  
虽然`heart`是基于`PokerSuit`下的`Hearts`成员实例化的，但是它是货真价实的`PokerSuit`枚举类型。

```rust
fn main() {
    let heart = PokerSuit::Hearts;
    let diamond = PokerSuit::Diamonds;

    print_suit(heart);
    print_suit(diamond);
}

fn print_suit(card: PokerSuit) {
    // 需要在定义 enum PokerSuit 的上面添加上 #[derive(Debug)]，否则会报 card 没有实现 Debug
    println!("{:?}",card);
}
```

目前来说，枚举值还不能带有值，因此先用**结构体**来实现：
```rust
enum PokerSuit {
    Clubs,
    Spades,
    Diamonds,
    Hearts,
}

struct PokerCard {
    suit: PokerSuit,
    value: u8
}

fn main() {
   let c1 = PokerCard {
       suit: PokerSuit::Clubs,
       value: 1,
   };
   let c2 = PokerCard {
       suit: PokerSuit::Diamonds,
       value: 12,
   };
}
```

通过结构体`PokerCard`来代表一张牌，结构体的`suit`字段表示牌的花色，类型是`PokerSuit`枚举类型，`value`字段代表扑克牌的数值,
但是，我们可以在优化一下：
```rust
enum PokerCard {
    Clubs(u8),
    Spades(u8),
    Diamonds(char),
    Hearts(char),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
   let c1 = PokerCard::Spades(5);
   let c2 = PokerCard::Diamonds('A');
}
```

该枚举类型代表一条消息，它包含四个不同的成员：
1. `Quit`没有任何关联数据
2. `Move`包含一个匿名结构体
3. `Write`包含一个 String 字符串
4. `ChangeColor`包含三个 i32
当然，我们也可以用结构体的方式来定义这些消息：
```rust
struct QuitMessage; // 单元结构体
struct MoveMessage {
    x: i32,
    y: i32,
}
struct WriteMessage(String); // 元组结构体
struct ChangeColorMessage(i32, i32, i32); // 元组结构体
```
由于每个结构体都有自己的类型，因此我们无法在需要同一类型的地方进行使用，例如某个函数它的功能是接受消息并进行发送，那么用枚举的方式，就可以接收不同的消息，但是用结构体，该函数无法接受`4`个不同的结构体作为参数。  

而且从代码规范角度来看，枚举的实现更简洁，代码内聚性更强，不像结构体的实现，分散在各个地方。

## 同一化类型

例如我们有一个`WEB`服务，需要接受用户的长连接，假设连接有两种：`TcpStream`和`TlsStream`，但是我们希望对这两个连接的处理流程相同，也就是用同一个函数来处理这两个连接，代码如下：
```rust
fn new (stream: TcpStream) {
  let mut s = stream;
  if tls {
    s = negotiate_tls(stream)
  }

  // websocket是一个WebSocket<TcpStream>或者
  // WebSocket<native_tls::TlsStream<TcpStream>>类型
  websocket = WebSocket::from_raw_socket(
    s, ......)
}

```

此时就可以使用枚举表示`Websocket`连接类型：
```rust
enum Websocket {
  Tcp(Websocket<TcpStream>),
  Tls(Websocket<native_tls::TlsStream<TcpStream>>),
}
```

## Option 枚举用于处理空值

在其它编程语言中，往往都有一个`null 关键字`，该关键字用于表明一个变量当前的值为空（不是零值，例如整型的零值是 0），也就是不存在值。
但是在`rust`中，由于`null`会导致空指针异常，因此rust中没有`null`关键字，而是使用`Option`枚举类型来表示可能为空的值。  
`Option`枚举包含两个成员，一个成员表示含有值：`Some(T)`, 另一个表示没有值：`None`，定义如下：
```rust
enum Option<T> {
    Some(T),
    None,
}
```

其中`T`是泛型参数，`Some(T)`表示该枚举成员的数据类型是`T`，换句话说，`Some`可以包含任何类型的数据。  

`Option<T>`枚举是如此有用以至于它被包含在了`prelude`（`prelude`属于`Rust`标准库，`Rust`会将最常用的类型、函数等提前引入其中，省得我们再手动引入）之中，你不需要将其显式引入作用域。另外，它的成员`Some`和`None`也是如此，无需使用`Option::`前缀就可直接使用`Some`和`None`。总之，不能因为`Some(T)`和`None`中没有`Option::`的身影，就否认它们是`Option`下的卧龙凤雏。

再来看以下代码：
```rust
let some_number = Some(5);
let some_string = Some("a string");

let absent_number: Option<i32> = None;
```

如果使用`None`而不是`Some`，需要告诉`Rust Option<T>`是什么类型的，因为编译器只通过`None`值无法推断出`Some`成员保存的值的类型。

当有一个`Some`值时，我们就知道存在一个值，而这个值保存在`Some`中。当有个`None`值时，在某种意义上，它跟空值具有相同的意义：并没有一个有效的值。那么，`Option<T>` 为什么就比空值要好呢？  

简而言之，因为`Option<T>`和`T`（这里`T`可以是任何类型）是不同的类型，例如，这段代码不能编译，因为它尝试将`Option<i8>(Option<T>)`与`i8(T)`相加：
```rust
let x: i8 = 5;
let y: Option<i8> = Some(5);

let sum = x + y;
```

总的来说，为了使用`Option<T>`值，需要编写处理每个成员的代码。你想要一些代码只当拥有`Some(T)`值时运行，允许这些代码使用其中的`T`。也希望一些代码在值为`None`时运行，这些代码并没有一个可用的`T`值。`match`表达式就是这么一个处理枚举的控制流结构：它会根据枚举的成员运行不同的代码，这些代码可以使用匹配到的值中的数据。
```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

`plus_one`通过`match`表达式来处理不同`Option`的情况。
