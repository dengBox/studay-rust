// fn add_with_extra(x: i32, y: i32) -> i32 {
//     let x = x + 1; // 语句
//     let y = y + 5; // 语句
//     x + y // 表达式
// }

fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {}", y);
}

// fn main() {
//     let x = 1;
//     // if 语句块也是一个表达式，因此可以用于赋值，也可以直接返回
//     // 类似三元运算符，在Rust里我们可以这样写
//     let y = if x % 2 == 1 {
//         "odd"
//     } else {
//         "even"
//     };
//     // 或者写成一行
//     let z = if x % 2 == 1 { "odd" } else { "even" };
// }
