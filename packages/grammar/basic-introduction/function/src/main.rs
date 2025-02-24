fn add(i: i32, j: i32) -> i32 {
    i + j
}

fn another_function(x: i32, y: f32) {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
}

fn plus_or_minus(x:i32) -> i32 {
    if x > 5 {
        return x - 5
    }

    x + 5
}

fn dead_end() -> ! {
    panic!("你已经到了穷途末路，崩溃吧！")
    // todo!()
    // unimplemented!()
    // loop {
    //   std::thread::sleep(std::time::Duration::from_secs(1))
    // }
  }

fn main() {
    let x = plus_or_minus(5);

    println!("The value of x is: {}", x);
}
