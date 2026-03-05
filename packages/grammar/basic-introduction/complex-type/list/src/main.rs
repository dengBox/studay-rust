fn main() {
    let a: [i32; 5] = [1, 2, 3, 4, 5];
    let ls = [3; 5];
    let second = ls[1];
    println!("Hello, world!");
}

fn main () {
    let array: [String; 8] = std::array::from_fn(|_i| String::from("rust is good!"));
    
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    let slice: &[i32] = &a[1..3];

    assert_eq!(slice, &[2, 3]);
}
