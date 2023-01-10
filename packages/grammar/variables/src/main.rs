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