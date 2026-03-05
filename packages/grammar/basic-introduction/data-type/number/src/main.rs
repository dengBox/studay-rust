
// fn main() {
//     // 编译器会进行自动推导，给予twenty i32的类型
//     let twenty = 20;
//     // 类型标注
//     let twenty_one: i32 = 21;
//     // 通过类型后缀的方式进行类型标注：22是i32类型
//     let twenty_two = 22i32;
  
//     // 只有同样类型，才能运算
//     let addition = twenty + twenty_one + twenty_two;
//     println!("{} + {} + {} = {}", twenty, twenty_one, twenty_two, addition);
  
//     // 对于较长的数字，可以用_进行分割，提升可读性
//     let one_million: i64 = 1_000_000;
//     println!("{}", one_million.pow(2));
  
//     // 定义一个f32数组，其中42.0会自动被推导为f32类型
//     let forty_twos = [
//       42.0,
//       42f32,
//       42.0_f32,
//     ];
  
//     // 打印数组中第一个值，并控制小数位为2位
//     println!("{:.2}", forty_twos[0]);
//   }

// #[allow(unused_variables)]
// fn main() {
//     let x = 2.0; // f64
//     let y: f32 = 3.0; // f32

//     let nan = (-42.0_f32).sqrt();
//     if nan.is_nan() {
//         println!("未定义的数学行为")
//     }

//     // 加法
//     let sum = 5 + 10;

//     // 减法
//     let difference = 95.5 - 4.3;

//     // 乘法
//     let product = 4 * 30;

//     // 除法
//     let quotient = 56.7 / 32.2;

//     // 求余
//     let remainder = 43 % 5;
//     // 序列
//     for i in 1..=5 {
//         println!("{}",i);
//     }
// }

// fn main() {
//     for i in 1..=5 {
//         println!("{}",i);
//     }
// }

fn main() {
    // 二进制为00000010
    let a:i32 = 2;
    // 二进制为00000011
    let b:i32 = 3;

    println!("(a & b) value is {}", a & b);

    println!("(a | b) value is {}", a | b);

    println!("(a ^ b) value is {}", a ^ b);

    println!("(!b) value is {} ", !b);

    println!("(a << b) value is {}", a << b);

    println!("(a >> b) value is {}", a >> b);

    let mut a = a;
    // 注意这些计算符除了!之外都可以加上=进行赋值 (因为!=要用来判断不等于)
    a <<= b;
    println!("(a << b) value is {}", a);
}