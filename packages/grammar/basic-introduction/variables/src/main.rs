// 不可变变量

// fn main() {
//     let x = 5;
//     println!("The value of x is: {}", x);
//     x = 6;
//     println!("The value of x is: {}", x);
// }

// 可变变量

// fn main() {
//     let mut x = 5;
//     println!("The value of x is: {}", x);
//     x = 6;
//     println!("The value of x is: {}", x);
// }

// 常量

// fn main() {
//     const MAX_NUM: u32 = 100_000;
//     println!("The value of x is: {}", MAX_NUM);
// }

// 变量遮蔽
// #[allow(unused_variables)]
// fn main() {
//     let y = 1;
//     let x = 5;
//     // 在main函数的作用域内对之前的x进行遮蔽
//     let x = x + 1;

//     {
//         // 在当前的花括号作用域内，对之前的x进行遮蔽
//         let x = x * 2;
//         println!("The value of x in the inner scope is: {}", x);
//     }

//     println!("The value of x is: {}", x);
// }

// 变量解构

struct Struct {
    e: i32
}

fn main() {
    let (a, b, c, d, e);

    (a, b) = (1, 2);
    // _ 代表匹配一个值，但是我们不关心具体的值是什么，因此没有使用一个变量名而是使用了 _
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };
    println!("{1}{0}", d, b);
    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);
}